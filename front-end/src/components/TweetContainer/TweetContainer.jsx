import React from 'react'
import convertDateToRightFormat from '../../constants/convertDate'
import { TweetActionDiv, TweetContainerDiv, TweetMessageDiv, TweetNameAndTimeDiv } from './styled';
import { IconButton} from '@chakra-ui/react';
import {DeleteIcon, EditIcon} from '@chakra-ui/icons'
import EditModal from '../EditModal/EditModal';
import { useState } from 'react';

function TweetContainer(props) {
const [showModal, setShowModal] = useState(false)
  
    if (props.tweet.visibility)
  {
    return (
      <TweetContainerDiv>
        <TweetNameAndTimeDiv>
          <p>{props.tweet.TweetOwner}</p>
          <p>{props.tweet.edited ? 'edited'  : ''}{props.tweet.edited ? <span id='spaceSpan'>·</span>:<></>}{convertDateToRightFormat(props.tweet.TweetTime)}</p>
        </TweetNameAndTimeDiv>
        <TweetMessageDiv>
          <p>{props.tweet.TweetMessage}</p>
        </TweetMessageDiv>
        { props.user === props.tweet.TweetOwner.toLowerCase() ? <TweetActionDiv>
          <IconButton 
          aria-label="Edit Tweet" 
          icon={<EditIcon />} 
          isDisabled={props.user !== props.tweet.TweetOwner.toLowerCase()}
          onClick={() => setShowModal(true)}
          />
        { showModal ? 
        <EditModal 
        showModal={showModal} 
        tweetMessage={props.tweet.TweetMessage}
        closeModal={() => setShowModal(false)}
        id={props.id}
        userAccount={props.user}
        populateTweets = {() => props.setFeedTweets()}
        />
        : 
        <></>}     
          <IconButton
            aria-label="Delete Tweet"
            isDisabled={props.user !== props.tweet.TweetOwner.toLowerCase()}
            icon={<DeleteIcon />}
            onClick={() => props.deleteTweet(props.id)}
          />
        </TweetActionDiv> : <></>}
      </TweetContainerDiv>
    );
 }
 else{
  return <></>
 }
}

export default TweetContainer