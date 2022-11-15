import React from 'react'
import convertDateToRightFormat from '../../constants/convertDate'
import { TweetActionDiv, TweetContainerDiv, TweetMessageDiv, TweetNameAndTimeDiv } from './styled';
import { IconButton} from '@chakra-ui/react';
import {DeleteIcon, EditIcon} from '@chakra-ui/icons'

function TweetContainer(props) {
    //first row will show user name, time of creation, and if edited or not
    //second row tweet itself
    //thrid let you edit or delete tweet (with icons)
    //OPTIONAL put a nice avatar, maybe red if yours
    console.log(props)
  return (
    <TweetContainerDiv>
        <TweetNameAndTimeDiv>
            <p>{props.tweet.TweetOwner}</p>
             {props.tweet.edited? <p>edited</p>:<span></span>}
            <p>{convertDateToRightFormat(props.tweet.TweetTime)}</p>
        </TweetNameAndTimeDiv>
        <TweetMessageDiv>
            <p>{props.tweet.TweetMessage}</p>
        </TweetMessageDiv>
        <TweetActionDiv>
          <IconButton aria-label='Edit Tweet' icon={<EditIcon/>}/>
          <IconButton aria-label='Delete Tweet' isDisabled={(props.user != props.tweet.TweetOwner.toLowerCase() )} icon={<DeleteIcon/>} />
        </TweetActionDiv>
    </TweetContainerDiv>
  )
}

export default TweetContainer