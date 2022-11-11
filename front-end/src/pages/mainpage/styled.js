import styled from "styled-components";

export const FeedMainDiv = styled.div`
width: 100vw; 
height: fit-content; //dynamic height to act as a feed
min-height: 100vh; 
background-color: #1DA1F2; //copying twitter's original color
overflow-y: scroll; //allow scrollling 
display: flex; 
flex-direction: column; 
align-items: center; 
`

export const FeedTitleDiv = styled.div`
width: 60%; 
height: 15vh; 
font-family: Roboto, sans-serif; 
color: white; 
font-size: 2rem; 
text-align: center;
font-weight: 700; 

h1 {
    padding-top: 5vh; 
}
`

export const FeedMetaMaskDiv = styled.div`
width: 45%; 
margin-top: 5vh;

Button{
    width: 100%; 
    font-size: 1.3rem;
    padding: 4% 0%; 
    font-weight: 500; 
    background-color: #0a8e33;
    color: white;

    :hover {
        background-color: #0a8e33;
        opacity: 0.8;
    }
}`

export const FeedContentDiv = styled.div`
width: 45%; 
margin-top: 5vh; 
display: flex; 

Input {
   padding: 5% 2%;
   background-color: white;
   font-size: 1.3rem; 
   width: 80%;
   ; 
   
}
Button{
    height: auto;
    width: 20%; 
    margin-left: 5px; 
    color: white;
    background-color: #0598d0; 
    border: 2px solid white;
    /* box-shadow: 1px 1px 1px;  */

    :hover {
        background-color: #0598d0;
        opacity: 0.8;
    }
     

}
`