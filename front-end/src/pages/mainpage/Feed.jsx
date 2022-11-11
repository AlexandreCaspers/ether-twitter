import React, {useState, useEffect} from 'react';  
import { FeedMakeTweetDiv, FeedMainDiv, FeedMetaMaskDiv, FeedTitleDiv } from './styled';
import {Input, Button,FormControl, FormErrorMessage, Textarea} from '@chakra-ui/react'
import SMART_CONTRACT from '../../smartContract';
import detectEthereumProvider from '@metamask/detect-provider';
import * as Yup from "yup";
import {Formik, Form, Field} from 'formik';



function Feed() {

let [displayButton, setDisplayButton] = useState(false); 
let [userAccount, setUserAccount] = useState(null)
let [isLoading, setIsLoading] = useState(false); 
let [isMetamaskHandled, setIsMetamaskHandled] = useState(false)

useEffect( ()=>{
   if(window.ethereum.selectedAddress)
   {
      window.ethereum
       .request({ method: "eth_requestAccounts" })
       .then(handleAccountsChanged) //will call the handleAccountsChanged function which will save the wallet address on our userAccount variable
       .catch((err) => {
         // Some unexpected error.
         // For backwards compatibility reasons, if no accounts are available,
         // eth_accounts will return an empty array.
         console.error(err);
       });
      setIsMetamaskHandled(true)
   }
},[])

//function for handling change of metamask accounts
function handleAccountsChanged(accounts) {
   if (accounts.length === 0) {
     // MetaMask is locked or the user has not connected any accounts
     console.log('Please connect to MetaMask.');
   } else if (accounts[0] !== userAccount) {
     setUserAccount(accounts[0]);
   }
 }

 //function handling connection to metamask
 //1.- checks if there is an ethereum provider for the browser
 //2.- If it's not Metamask, prompt the user to install it
 //3.- If it IS metamask, check the user is on the Goerli testnet
 //4.- Prompt the user to switch to the goerli testnet (if not there), (if there) request connection to metamask account
 //5.- Once connection is established, get address from metamask
 //6.- Save address to our userAccount variable to consume the smart contract
const connectToMetamask = async () => {

   //detect ethereum provider
   setIsLoading(true)
   const provider = await detectEthereumProvider();
   setIsLoading(false)

   //if not metamask, prompt the user to install it or use it
   if(provider === null || provider !== window.ethereum)
   {
      alert("Please install Metamask! Or use it as your  wallet to create Tweets! ")
      return
   }

   const chainId = await window.ethereum.request({ method: 'eth_chainId' });

   //Check user is on the right network, Goerli chainId is '0x5'
   if(chainId !== "0x5")
   {
      alert("Please change your Metamask network to the Goerli testnet")
      return   
   }
  
   //Get account
     window.ethereum
       .request({ method: "eth_requestAccounts" })
       .then(handleAccountsChanged) //will call the handleAccountsChanged function which will save the wallet address on our userAccount variable
       .catch((err) => {
         // Some unexpected error.
         // For backwards compatibility reasons, if no accounts are available,
         // eth_accounts will return an empty array.
         console.error(err);
       }); 
   
   setDisplayButton(!displayButton);
   setIsMetamaskHandled(true)
   
}
  
  return (
    <FeedMainDiv>
     <FeedTitleDiv> 
        <h1>Welcome to Ethereum Twitter!</h1>
     </FeedTitleDiv>
    {isMetamaskHandled ? <span></span> : <FeedMetaMaskDiv>
        {<Button disabled={displayButton} isLoading={isLoading} onClick={()=> connectToMetamask()}>ENABLE METAMASK</Button>}
     </FeedMetaMaskDiv>}
     <FeedMakeTweetDiv>

     <Formik
          initialValues={ { body: ""}}

          //input control
          validationSchema= { Yup.object({
            body: Yup.string()
            .min(5, "Minimum 5 characters")
            .max(140, "Max 140 caractcters")
            .required("Obligatory Field")
          })}

          //actions on Submit
          onSubmit = { (values, actions) => {
            
            // let requestBody = {
            //   title: values.title,
            //   body: values.body
            // }

            alert(values.body)
            

            // CODE HERE MAKE TWEET TO THE CONTRACT 


            // let answer = CreatePost(requestBody,token)
            // answer.then( (response) => {
            //   GetPosts(`posts?page=1`, token, setPostsOnDisplay);
            //   actions.resetForm(); 
            //   actions.setSubmitting(false)
            // })
            // .catch( (error)=> {})

            //CODE API REQUEST AND WAIT FOR ANSWER
            actions.resetForm();
            actions.setSubmitting(false);
          }}
          >
            { (props) => {
              return(
                <Form>
                  <Field name="body">
                    {({field, form}) => (
                      <FormControl isInvalid={form.errors.body && form.touched.body}>
                        <Textarea {...field} className = "bodyInput" placeholder='What do you want to share with your blockchain?' _placeholder={{opacity: 0.8,color: '#323941'}}/>
                        <FormErrorMessage className = "errorMessage">{form.errors.body}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Button disabled={userAccount === null} id= 'postButton' variant='solid' isLoading={props.isSubmitting} type='submit'>TWEET</Button>
                </Form>
              )
            }}
          </Formik>
     </FeedMakeTweetDiv>
     <hr/>
    </FeedMainDiv>
  )
}

export default Feed