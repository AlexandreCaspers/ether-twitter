import React from 'react'
import convertDateToRightFormat from '../../constants/convertDate'
import { TweetContainerDiv, TweetMessageDiv, TweetNameAndTimeDiv } from './styled'

function TweetContainer(props) {
    //first row will show user name, time of creation, and if edited or not
    //second row tweet itself
    //thrid let you edit or delete tweet (with icons)
    //OPTIONAL put a nice avatar, maybe red if yours
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
    </TweetContainerDiv>
  )
}

export default TweetContainer