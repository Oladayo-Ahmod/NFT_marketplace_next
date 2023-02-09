const {ethers, network} = require('hardhat')
const {assert,expect} = require('chai')
describe("NFT Marketplace", function (){
    let provider, deploy
    beforeEach(async ()=>{
        provider = await ethers.getContractFactory("Marketplace")
        deploy = await provider.deploy()

    })

    it("deployed contract", async function(){
        const address = await deploy.deployed()
        assert.notEqual(address,0x0)
        assert.notEqual(address,'')
        assert.notEqual(address,undefined)
        assert.notEqual(address,null)

    })
    it("has a valid constructor", async ()=>{
        const name = await deploy.name()
        console.log(name,'name');
        assert.equal(name,"Ahmad Token")
    })
})