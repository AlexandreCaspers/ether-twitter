import React from 'react'
import convertDateToRightFormat from '../../constants/convertDate'
import { TweetActionDiv, TweetContainerDiv, TweetMessageDiv, TweetNameAndTimeDiv } from './styled';
import { IconButton} from '@chakra-ui/react';
import {DeleteIcon, EditIcon} from '@chakra-ui/icons'

function TweetContainer(props) {

 
  
    if (props.tweet.visibility)
  {
    return (
      <TweetContainerDiv>
        <TweetNameAndTimeDiv>
          <p>{props.tweet.TweetOwner}</p>
          {props.tweet.edited ? <p>edited</p> : <span></span>}
          <p>{convertDateToRightFormat(props.tweet.TweetTime)}</p>
        </TweetNameAndTimeDiv>
        <TweetMessageDiv>
          <p>{props.tweet.TweetMessage}</p>
        </TweetMessageDiv>
        <TweetActionDiv>
          <IconButton aria-label="Edit Tweet" icon={<EditIcon />} />
          <IconButton
            aria-label="Delete Tweet"
            isDisabled={props.user !== props.tweet.TweetOwner.toLowerCase()}
            icon={<DeleteIcon />}
            onClick = {() =>  props.deleteTweet(props.id)}
            
          />
        </TweetActionDiv>
      </TweetContainerDiv>
    );
 }
 else{
  return <></>
 }
}

export default TweetContainer