const ethers = require('ethers')
const {assert,expect} = require('chai')
describe("NFT Marketplace", function (){
    beforeEach(async ()=>{
        const provider = new ethers.ContractFactory("Marketplace")
        const deploy = await provider.deploy()

    })

    it("deployed contract", async function(){
        const address = await deploy.deployed()
        assert.notEqual(address,0x0)
        assert.notEqual(address,'')
        assert.notEqual(address,undefined)
        assert.notEqual(address,null)

    })
})