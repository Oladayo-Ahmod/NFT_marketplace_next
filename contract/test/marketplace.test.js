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
            const [, buyerAccount] = new ethers.getSigners()
            const account = marketplace.connect(buyerAccount)
            await account.createToken("https://token.com",itemPrice,{value :listingPrice.toString()})
            const tx = await account.createSale(1,{value :itemPrice})
            const result = await tx.wait()
            console.log(result.events);
        })
    })
   

})