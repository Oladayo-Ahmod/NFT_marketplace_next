const {ethers, network,logs} = require('hardhat')
const {assert,expect} = require('chai')
describe("NFT Marketplace", function (){
    let provider, marketplace
    beforeEach(async ()=>{
        provider = await ethers.getContractFactory("Marketplace")
        marketplace = await provider.deploy()

    })

    it("deployed contract", async function(){
        const address = await marketplace.deployed()
        console.log(marketplace.address);
        assert.notEqual(address,0x0)
        assert.notEqual(address,'')
        assert.notEqual(address,undefined)
        assert.notEqual(address,null)

    })
    it("has a valid constructor", async ()=>{
        const name = await marketplace.name()
        assert.equal(name,"Ahmad Token")
    })
    it("creates token", async ()=>{
        const listingPrice = await marketplace.getListingPrice()
        const itemPrice = ethers.utils.parseEther('1')
        await marketplace.createToken("https://token.com",itemPrice,{value :listingPrice.toString()})
       
      
    })

    describe("pricing", function (){
        it("has a correct listing price", async ()=>{
            const listingPrice = await marketplace.getListingPrice()
            assert.equal(listingPrice.toString(),ethers.utils.parseEther("0.05"))
        })
        it("authorized price update", async ()=>{
            const updatedPrice = ethers.utils.parseEther("0.08")
            await marketplace.connect(marketplace.address)
            await marketplace.updateListingPrice(updatedPrice)
            const afterPriceUpdate = await marketplace.getListingPrice()
            assert.equal(afterPriceUpdate.toString(),updatedPrice)
        })
    })

    describe("items sales", ()=>{
        it("creates sales",async ()=>{
            const listingPrice = await marketplace.getListingPrice()
            const itemPrice = ethers.utils.parseEther('1')
            await marketplace.createToken("https://token.com",itemPrice,{value :listingPrice.toString()})
            const tx = await marketplace.createSale(1,{value :itemPrice})
            const results = await tx.wait()
            assert.equal(results.events[1].args.sold,true)
        })
        it("item resales", async ()=>{
            const listingPrice = await marketplace.getListingPrice()
            const itemPrice = ethers.utils.parseEther('1')
            const [, buyerAccount] = await ethers.getSigners()
            const account = marketplace.connect(buyerAccount)
            await account.createToken("https://token.com",itemPrice,{value :listingPrice.toString()})
            const tx = await account.createSale(1,{value :itemPrice})
            const newItemPrice = ethers.utils.parseEther('2')
            const resell = await account.resellItem(1,newItemPrice,{value : listingPrice.toString()})
            const result = await resell.wait()
            assert.equal(result.events[1].args.sold,false)
        })
        it("all unsold items", async ()=>{
            const listingPrice = await marketplace.getListingPrice()
            const itemPrice = ethers.utils.parseEther('1')
            const [, firstBuyer,secondBuyer,thirdBuyer] = await ethers.getSigners()
            const account1 = marketplace.connect(firstBuyer)
            await account1.createToken("https://token1.com",itemPrice,{value :listingPrice.toString()}) // create item
            const account2 = marketplace.connect(secondBuyer)
            await account2.createToken("https://token2.com",itemPrice,{value :listingPrice.toString()}) // create item
            await marketplace.connect(thirdBuyer).createSale(1,{value :itemPrice}) // sell one of the created item
            const items = await account2.allUnsoldItems()
            // console.log(items);
        })
        it("fetches my purchased items", async ()=>{
            const listingPrice = await marketplace.getListingPrice()
            const itemPrice = ethers.utils.parseEther('1')
            await marketplace.createToken("https://token.com",itemPrice,{value :listingPrice.toString()})
            const [, buyer] = await ethers.getSigners()
            await marketplace.connect(buyer).createSale(1,{value :itemPrice})
            const myItems = await marketplace.connect(buyer).fetchMyItems()
            // console.log('my item',myItems);
        })
        
        it("fetches my listed items", async ()=>{
            const [, seller,anotherSeller] = await ethers.getSigners()
            const listingPrice = await marketplace.getListingPrice()
            const itemPrice = ethers.utils.parseEther('1')
            await marketplace.connect(seller).createToken("https://token.com",itemPrice,{value :listingPrice.toString()}) // list item
            await marketplace.connect(anotherSeller).createToken("https://token.com",itemPrice,{value :listingPrice.toString()}) // list item by another seller
            const myListedItems = await marketplace.connect(seller).fetchMyListedItems()
            console.log(myListedItems);
        })
    })
   

})