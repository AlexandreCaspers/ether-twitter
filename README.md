# ether-twitter
## Group Members
Alexandre Caspers, Martin Sejas, Grace Jiyoung Yun, Erlei Lin

## Project Description
A mini recreation of Twitter using Ethereum and Solidity for the backend and ReactJS for the frontend, with our Smart Contract deployed on the Goerli Testnet.

Check out the latest live build! (Desktop Only)
<br>
https://ethereum-twitter.surge.sh/

<i>Smart Contract Address: **0xD517074D8Da2A1cd107242222A9BCc63372dFC53** </i>

Track the smart contract on etherscan:
<br>
 https://goerli.etherscan.io/address/0xD517074D8Da2A1cd107242222A9BCc63372dFC53)


Our 'ether-twitter' allows anyone to\
**without metamask**
* read all tweets

**with metamask**
* post tweets oneself
* edit own tweets
* delete own tweets

**additional features**
* Users without a connected account have the 'Tweet' button disabled
* Metamask users on the wrong network, will be prompted to switch to the Goerli Testnet
* Connected Users can ONLY delete and/or edit their OWN tweets
* 'Edited' label to edited tweets
* Age of tweet is shown

This project demonstrates a basic Hardhat use case, containing
* a sample contract
* tests for the contract

# Installation and Running
Try running some of the following tasks:

(Make sure you have the latest version of Node installed)

```shell
npm install
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

# Documentation

## Project Outline
### 1. Environment Setup and Tutorials
* Environment
```
* https://hardhat.org/tutorial
```
* Learning Solidity and Contracts
```
* https://cryptozombies.io/
* https://docs.soliditylang.org/en/v0.8.17/
```
### 2. Folder Structure
```
.
├── back-end                  # Contracts and Testing
│   ├── contracts
│   │   ├── Tweet.sol
│   │   └── ...          
│   ├── test                  # Unit testing
│   │   ├── TweetTest.js
│   │   └── ...  
│   └── ...
├── front-end                 # Program UI
│   ├── README.md
│   └── ...                
├── README.md                 # Here
└── ...
```

### 3. File Description

* ```Tweet.sol``` - Tweet Structure, Tweet post, edit, delete methods
* ```TweetTest.js``` - 14 extensive testcases
* ```front-end/``` - front-end files

## Backend
The back-end consists of a hardhat project, with ```Tweet.sol``` at its core. Coded in Solidity, our smart contract is deployed on the Ethereum Goerli Testnet.

The back-end is set up using hardhat. As for the smart contract, we referenced the chapters 1,2 and 6 of the CryptoZombies Tutorial, which helped us a lot to deepen and test our understanding.

```back-end/contracts/Tweet.sol``` cotains the 'Twitter' smart contract as well as related functions and components:
* 'Tweet' structure
* Array of All Tweets
* Post Tweet function
* Delete Tweet function
* Edit Tweet function
* Necessary 'Getter' functions

Within the main functions we perform multiple asserts as needed:
* verifying that the tweet is non-empty (PostTweet, EditTweet)
* the length of the tweet is not beyond 140 characters (PostTweet, EditTweet)
*  that we are the owner of the tweet (DeleteTweet, EditTweet)
        
\
```back-end/test/TweetTest.js``` contains all test cases for ```Tweet.sol```. There are 13 bases cases checking every feature and assert disconnected from the rest as much as possible. Our 14th test case tests everything the 13 previous tests do, but everything connected and sequential, to model real-life behavior.
We use the 'describe' & 'it' functions in an asynchronous way to do so.

## Frontend
Please refer to ```front-end/README.md``` for detailed description of the front-end functionality.

## Difficulties & Solutions
* **Delete Function**: \
As nothing can be deleted from blockchain, coming up with a way to deleting a tweet was not intuitive.\
Therefore, instead of deleting from the tweets array, we have created a boolean for each tweet that gets flagged when the user wants to delete a tweet meanwhile not displaying it on the frontend.

* **OnlyOwner Identifier**: \
At first we thought of using OwnlyOwner identifier to allow only the owner of a tweet to delete or edit one's tweet. However, the bahvior was different than expected.\
Instead, we save the address of the initial sender within the Tweet Structure, and compare that upon delete / edit request.

* **Asynchronous Functions & Promises**: \
When writing the tests, our major difficulty was figuring out how to handle asynchronous functions properly. We want to of course run all tests in parallel, instead of sequential. However, at first, within any given test it would not wait after executing statments that require to wait, thus running into 'Promise' issues (e.g. deploying the contract, and then immediatly trying to Tweet).\
With lots of trial and error we found a way to get the expected behavior.

* **Imbalance Research & Code to write**: \
In the beginning, the project felt complicated as no one of us had any experience with smart contracts or ethereum. As such, all member underwent extensive research before starting to code. Once we started to code the backend, it was very quickly done. However, it was writing the related tests and creating the frontend that ended up being unexpectedly longer than anticipated, not the reverse.\
As such, the way we initially partioned the tasks of each member turned out to be a bit superfluous.\
As such, during the project, we decided to work with some members together on one task instead of everyone on their own domain.\
Despite this, we all learned and understood how ethereum and solidity functions.

## Conclusion
Looking back, our team invested more time on doing research and tutorials than coding. We are positive that we all have grasped a deeper understanding on ethereum.

We have a dedicated Readme for the Front End! Check it out at ether-twitter/front-end