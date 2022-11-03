import React from 'react'; 
import { FeedContentDiv, FeedMainDiv, FeedMetaMaskDiv, FeedTitleDiv } from './styled';
import {Input, Button} from '@chakra-ui/react'


function Feed() {
  return (
    <FeedMainDiv>
     <FeedTitleDiv> 
        <h1>Welcome to Ethereum Twitter!</h1>
     </FeedTitleDiv>
     <FeedMetaMaskDiv>
        <Button>ENABLE METAMASK</Button>
     </FeedMetaMaskDiv>
     <FeedContentDiv>
        <Input placeholder= "What do you want to share with your blockchain?"/> 
        <Button>TWEET</Button>
     </FeedContentDiv>
    </FeedMainDiv>
  )
}

export default Feed