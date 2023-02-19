const {ethers} = require('hardhat')
const fs = require('fs')
require('dotenv').config()

module.exports = async function(){
    if (process.env.UPDATE_FRONTEND) {
        console.log('-----------------updating--------frontend-------------constants');
        const ABI = '../frontend/constants/abi.json'  // abi location
        const ADDRESS = '../frontend/constants/address.json' // contract address location
        
            const transaction = await hre.ethers.getContractFactory('Marketplace')
            const deploy = await transaction.deploy()
            console.log('---------------updating---contract-----------address');
            fs.writeFileSync(ADDRESS,JSON.parse(deploy.address))
            console.log('--------------updated--------contract------------address');
    }
}
