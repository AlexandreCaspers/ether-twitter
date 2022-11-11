pragma solidity ^0.8.9;

import "hardhat/console.sol";
import "./Ownable.sol";

/*
on frontend, handle these 3 events
Tweet.NewTweetEvent(function(error, result) {
    // do something with result.message / result.tweetOwner / result.tweetTime / uint tweetId
})
event NewTweetEvent(string tweetMessage, address tweetOwner, uint tweetTime, uint tweetId);
event DeleteTweetEvent(uint tweetId);
event EditTweetEvent(string tweetMessage, uint tweetId);

function now() {
    return Math.floor(new Date().getTime() / 1000);
}

//converting time
uint startDate = 1514764800; // 2018-01-01 00:00:00
uint endDate = 1518220800; // 2018-02-10 00:00:00
uint diff = Math.floor((endDate - startDate) / 60 / 60 / 24); // 40 days 

console.log(Math.floor(new Date().getTime() / 1000) + 31536000); // 1year in seconds added, to fit solidity


Put character limit front-end -> 140
*/


contract Tweet is Ownable {
    // Events
    event NewTweetEvent(string tweetMessage, address tweetOwner, uint tweetTime, uint tweetId);
    event DeleteTweetEvent(uint tweetId);
    event EditTweetEvent(string tweetMessage, uint tweetId);

    // Structure used to store tweets
    struct TweetStruct {
        string TweetMessage;
        address TweetOwner;
        uint32 TweetTime;
        bool visibility;
        bool edited;
    }

    // Array in which all tweets are stored
    TweetStruct[] private tweets;
    
    // Getter Functions for the array & struct above
    function GetTweetMessage(uint id) public view returns(string memory) {
        return tweets[id].TweetMessage;
    }
    function GetTweetOwner(uint id) public view returns(address) {
        return tweets[id].TweetOwner;
    }
    function GetTweetTime(uint id) public view returns(uint) {
        return tweets[id].TweetTime;
    }
    function GetTweetVisibility(uint id) public view returns(bool) {
        return tweets[id].visibility;
    }
    function GetTweetEdited(uint id) public view returns(bool) {
        return tweets[id].edited;
    }
    function GetTweetLength() public view returns(uint) {
        return tweets.length;
    }
    function GetTweets() public view returns(TweetStruct[] memory) {
        return tweets;
    }

    /**
     * @dev Creates a Twwet
     * @param message The contents of the Tweet
     * @param time The time the tweet was received
     */
    function PostTweet(string memory message, uint32 time) public {
        require(keccak256(abi.encodePacked(message)) != keccak256(abi.encodePacked("")), "Tweet cannot be empty.");
        require(bytes(message).length <= 140, "Tweet is too long.");
        address owner = msg.sender;
        tweets.push(TweetStruct(message, owner, time, true, false));
        uint id = tweets.length - 1;
        emit NewTweetEvent(message, owner, time, id);
    }

    /**
     * @dev Deletes a Twwet
     * @param id The index of a tweet in the array 'tweets'
     */
    function DeleteTweet(uint id) public { //onlyOwner
        require(msg.sender == tweets[id].TweetOwner, "Ownable: caller is not the owner");
        tweets[id].visibility = false;
        emit DeleteTweetEvent(id);
    }

    /**
     * @dev Edits a Twwet
     * @param id The index of a tweet in the array 'tweets'
     * @param newMessage The new contents of the tweet
     */
    function EditTweet(uint id, string memory newMessage) public { //onlyOwner
        require(msg.sender == tweets[id].TweetOwner, "Ownable: caller is not the owner");
        require(keccak256(abi.encodePacked(newMessage)) != keccak256(abi.encodePacked("")), "Tweet cannot be empty.");
        require(bytes(newMessage).length <= 140, "Tweet is too long.");
        tweets[id].TweetMessage = newMessage;
        tweets[id].edited = true;
        emit EditTweetEvent(newMessage, id);
    }
}