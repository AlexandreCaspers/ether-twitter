pragma solidity ^0.8.9;

import "hardhat/console.sol";

/*
on frontend
Tweet.Tweeting(function(error, result) {
    // do something with result.message / result.tweetHash / result.tweetTime
    // event NewTweet(string tweetMessage, bytes32 tweetHash, uint tweetTime, uint tweetId);
})
*/

contract Tweet {
    event NewTweet(string tweetMessage, bytes32 tweetHash, uint tweetTime, uint tweetId);

    struct TweetStruct {
        string TweetMessage;
        bytes32 TweetHash;
        uint TweetTime;
    }

    TweetStruct[] public tweets;
    mapping (uint => address) public tweetToOwner;

    function PostTweet(string memory message) public {
        require(keccak256(abi.encodePacked(message)) != keccak256(abi.encodePacked("")));
        console.log(uint(keccak256(abi.encodePacked("My First Tweet!"))));
        uint time = block.timestamp;
        bytes32 _hash = keccak256(abi.encodePacked(time));
        tweets.push(TweetStruct(message, _hash, time));
        uint id = tweets.length - 1;
        tweetToOwner[id] = msg.sender;
        emit NewTweet(message, _hash, time, id);
    }

    function DeleteTweet(uint id) public {
        require(msg.sender == tweetToOwner[id]);
        // is deleting even possible? just hide on web?
    }

    function EditTweet(uint id, string memory newMessage) public {
        require(msg.sender == tweetToOwner[id]);
        // delete and repost?
    }
}