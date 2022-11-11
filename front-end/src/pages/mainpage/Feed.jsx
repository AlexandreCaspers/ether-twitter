import React, {useState, useEffect} from 'react';  
import { FeedContentDiv, FeedMainDiv, FeedMetaMaskDiv, FeedTitleDiv } from './styled';
import {Input, Button} from '@chakra-ui/react'
import SMART_CONTRACT from '../../smartContract';
import detectEthereumProvider from '@metamask/detect-provider';



function Feed() {


let [displayButton, setDisplayButton] = useState(false); 
let [userAccount, setUserAccount] = useState(null)

let [isLoading, setIsLoading] = useState(false); 

useEffect( () => {
   // if(window.ethereum)
   // {
   //    window.ethereum
   //    .request({ method: "eth_accounts"})
   //    .then( (accounts) => console.log(accounts))
   //    .catch( (err) => {
   //       alert(`Unexpected error occured: ${err}`)
   //    })
   // }

   
},[])




function handleChainChanged(_chainId) {
  window.location.reload();
}

function handleAccountsChanged(accounts) {
   if (accounts.length === 0) {
     // MetaMask is locked or the user has not connected any accounts
     console.log('Please connect to MetaMask.');
   } else if (accounts[0] !== userAccount) {
     setUserAccount(accounts[0]);
     // Do any other work!
   }
 }


const connectToMetamask = async () => {

   //detect ethereum provider
   setIsLoading(true)
   const provider = await detectEthereumProvider();
   setIsLoading(false)

   //if not metamask, prompt the user to install it or use it
   if(provider === null || provider !== window.ethereum)
   {
      alert("Please install Metamask! Or use it as your only wallet ")
      //Potentially connect to the node here
      return
   }

   const chainId = await window.ethereum.request({ method: 'eth_chainId' });

   //Check user is on the right network
   if(chainId !== "0x5")
   {
      alert("Please change your Metamask network to the Goerli testnet")
      
   }
  

   //If metamask is installed, connect
   if (window.ethereum) {
     window.ethereum
       .request({ method: "eth_requestAccounts" })
       .then(handleAccountsChanged)
       .catch((err) => {
         // Some unexpected error.
         // For backwards compatibility reasons, if no accounts are available,
         // eth_accounts will return an empty array.
         console.error(err);
       });
      // let address = await window.ethereum.request({ method: "eth_requestAccounts" });
      // setUserAccount(address[0])

      
   }
   //if not use a read only node from my goerli infura node
   // else {
   // }
  
  
   setDisplayButton(!displayButton)
}
   
  return (
    <FeedMainDiv>
     <FeedTitleDiv> 
        <h1>Welcome to Ethereum Twitter!</h1>
     </FeedTitleDiv>
     <FeedMetaMaskDiv>
        <Button disabled={displayButton} isLoading={isLoading} onClick={()=> connectToMetamask()}>ENABLE METAMASK</Button>
     </FeedMetaMaskDiv>
     <FeedContentDiv>
        <Input placeholder= "What do you want to share with your blockchain?"/> 
        <Button>TWEET</Button>
     </FeedContentDiv>
    </FeedMainDiv>
  )
}

export default Feed