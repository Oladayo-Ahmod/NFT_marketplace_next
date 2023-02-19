import React, { Context,createContext, useEffect, useState } from "react"



const TransactionContext = React.createContext()

let connector
if(typeof window !== 'undefined'){
    connector = window.ethereum
}


const TransactionProviderr =({children})=>{
const [account,setAccount] = useState()

const connectWallet = async function(metamask = connector){
    if (metamask) {
        const accounts = await connector.request({method : 'eth_requestAccounts'}) 
        console.log(accounts);
        setAccount(accounts[0])
    }
    else{
        console.log('please install metamask')
    }
}

// const createNft = 
return (
    <TransactionContext.Provider
        value={
           {
            connectWallet,
            account,
        }
        }
        >
            {children}
    </TransactionContext.Provider>
)
    }

    module.exports = {
        TransactionContext,
        TransactionProviderr
    }