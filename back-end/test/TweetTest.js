/*
const { expect } = require("chai");

describe("Tweet contract", function () {
    it("Should create tweet", async function() {
        const [owner] = await ethers.getSigners();
        const Tweet = await ethers.getContractFactory("Tweet");
        const hardhatTweet = await Tweet.deploy();

        await hardhatTweet.PostTweet("My First Tweet!");
        expect(await tweets[0].TweetMessage.to.equal("My First Tweet!"));
        expect(await tweets[0].TweetHash.to.equal(90));
        expect(await tweets[0].TweetTime.to.equal(now));
        expect(await tweetToOwner[0].to.equal(owner));
    });
});
*/

const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { expect } = require("chai");

describe("Token contract", function () {
    async function deployTweetFixture() {
        const [owner, addr1] = await ethers.getSigners();
        const Tweet = await ethers.getContractFactory("Tweet");
        const hardhatTweet = await Tweet.deploy();
        await hardhatTweet.deployed();
        return { Tweet, hardhatTweet, owner, addr1 };
    }
    
    it("Should create tweet", async function() {
        const { hardhatTweet, owner } = await loadFixture(deployTweetFixture);
        let myTweet = hardhatTweet.PostTweet("My First Tweet!");
        myTweet.then( async () => {
            expect(await hardhatTweet.GetTweetMessage(0)).to.equal("My First Tweet!");
            expect(await hardhatTweet.GetTweetOwner(0)).to.equal(owner.address);
            //expect(await hardhatTweet.GetTweetTime(0)).to.equal(new Date().getTime() / 1000);
            expect(await hardhatTweet.GetTweetVisibility(0)).to.equal(true);
        }).catch((err) => console.log(err))
    });
/*
    it("Should link tweet to correct owner", async function() {
        const { hardhatTweet, owner } = await loadFixture(deployTweetFixture);

        await hardhatTweet.PostTweet("My First Tweet!");
        expect(await tweetToOwner[0].to.equal(owner));
    });
*/

    it("Should emit NewTweet events", async function () {
        const { hardhatTweet, owner, addr1 } = await loadFixture(deployTweetFixture);
        /*
        // Transfer 50 tokens from owner to addr1
        //await expect(hardhatTweet.PostTweet("Some Tweet")).to.emit
        await expect(hardhatToken.transfer(addr1.address, 50))
          .to.emit(hardhatToken, "Transfer")
          .withArgs(owner.address, addr1.address, 50);
  
        // Transfer 50 tokens from addr1 to addr2
        // We use .connect(signer) to send a transaction from another account
        await expect(hardhatToken.connect(addr1).transfer(addr2.address, 50))
          .to.emit(hardhatToken, "Transfer")
          .withArgs(addr1.address, addr2.address, 50);
          */
    });

    it("Should Fail on empty message", async function () {
        const { hardhatTweet, owner, addr1 } = await loadFixture(deployTweetFixture);
        /*const initialOwnerBalance = await hardhatToken.balanceOf(owner.address);

        // Try to send 1 token from addr1 (0 tokens) to owner (1000 tokens).
        // `require` will evaluate false and revert the transaction.
        await expect(
            hardhatToken.connect(addr1).transfer(owner.address, 1)
        ).to.be.revertedWith("Not enough tokens");

        // Owner balance shouldn't have changed.
        expect(await hardhatToken.balanceOf(owner.address)).to.equal(
            initialOwnerBalance
        );*/
    });

    it("Should create several tweets correctly", async function () {
        const { hardhatTweet, owner, addr1 } = await loadFixture(deployTweetFixture);
    });

    it("Should Delete Tweet", async function () {
        const { hardhatTweet, owner, addr1 } = await loadFixture(deployTweetFixture);
    });

    it("Should Fail on Delete Tweet of non-owner", async function () {
        const { hardhatTweet, owner, addr1 } = await loadFixture(deployTweetFixture);
    });

    it("Should Edit Tweet", async function () {
        const { hardhatTweet, owner, addr1 } = await loadFixture(deployTweetFixture);
    });

    it("Should Fail on Edit Tweet of non-owner", async function () {
        const { hardhatTweet, owner, addr1 } = await loadFixture(deployTweetFixture);
    });
});