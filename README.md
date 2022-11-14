# ether-twitter
## Group Members
Alexandre Caspers, Martin Hugo De Barros Sejas, Grace Jiyoung Yun, Erlei Lin

## Project Description
A mini recreation of Twitter using Ethereum and Solidity for the backend and ReactJS for the frontend, deployed on the Goerli Testnet.

Our 'ether-twitter' allows anyone to\
**without metamask**
* read all tweets

**with metamask**
* post tweets oneself
* edit own tweets
* delete own tweets

This project demonstrates a basic Hardhat use case, containing
* a sample contract
* a test for the contract

# Installation and Running
Try running some of the following tasks:

```shell
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
│   │   └── Tweet.sol           
│   └── test                  # Unit testing
│       └── TweetTest.js   
├── front-end                 # Program UI                    
└── README.md
```

### 3. File Description

* ```Tweet.sol``` - Tweet Structure, Tweet post, edit, delete methods
* ```TweetTest.js``` - 14 extensive testcases.
* ``` /front-end ``` - front-end files


## Difficulties & Solutions
* **Delete Function**: \
As nothing can be deleted from blockchain, coming up with a way to deleting a tweet was not intuitive. Therefore, instead of deleting from the tweets array, we have created a boolean for each tweet that gets flagged when the user wants to delete a tweet meanwhile not displaying it on the frontend.

* **OnlyOwner Identifier**: \
At first we thought of using OwnlyOwner identifier to allow only the owner of a tweet to delete or edit one's tweet. However, the bahvior was different than expected. Instead, we save the address of the initial sender within the Tweet Structure, and compare that upon delete / edit request.

* **Imbalance Research & Code to write**: \
In the beginning, the project felt complicated as none of us had experiences with contracts or ethereum. As such, all member underwent extensive research before starting to code. However, once we started coding, we discovered it was fairly little work to partition among 4 members.

## Conclusion
Looking back, our team invested more time on doing research and tutorials than coding. We are positive that we all have grasped a deeper understanding on ethereum.