import React, { Context,createContext, useState } from "react"


const TransactionContext = React.createContext()

let connector
if(typeof window !== 'undefined'){
    connector = window.ethereum
}


const TransactionProviderr =({children})=>{
const [account,setAccount] = useState()
const test = 'hello'
const connectWallet = async function(metamask = connector){
    console.log('confirm');
    if (metamask) {
        const accounts = await metamask.request({method : 'eth_requestAccount'}) 
        setAccount(accounts[0])
    }
    else{
        alert('please install metamask')
    }
}

return (
    <TransactionContext.Provider
        value={
           {
            connectWallet,
            account,
            test
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