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
    if (metamask) {
        const accounts = await connector.request({method : 'eth_requestAccounts'}) 
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