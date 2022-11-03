pragma solidity ^0.8.9;

import "hardhat/console.sol";

/*
on frontend
Tweet.NewTweet(function(error, result) {
    // do something with result.message / result.tweetOwner / result.tweetTime / uint tweetId
})
*/

contract Tweet {
    event NewTweet(string tweetMessage, address tweetOwner, uint tweetTime, uint tweetId);

    struct TweetStruct {
        string TweetMessage;
        address TweetOwner;
        uint TweetTime;
        bool visibility;
    }

    TweetStruct[] public tweets;
    //mapping (uint => address) public tweetToOwner;
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

    function PostTweet(string memory message) public {
        require(keccak256(abi.encodePacked(message)) != keccak256(abi.encodePacked("")));
        uint time = block.timestamp;
        address owner = msg.sender;
        tweets.push(TweetStruct(message, owner, time, true));
        uint id = tweets.length - 1;
        //tweetToOwner[id] = msg.sender;
        emit NewTweet(message, owner, time, id);
    }

    function DeleteTweet(uint id) public {
        require(msg.sender == tweets[id].TweetOwner);
        // is deleting even possible? just hide on web?
    }

    function EditTweet(uint id, string memory newMessage) public {
        require(msg.sender == tweets[id].TweetOwner);
        // delete and repost?
    }
}