import React, { Context,createContext, useEffect, useState } from "react"
import {abi,address} from '../constants/index'
import {ethers} from 'ethers'

const TransactionContext = React.createContext()

let connector
if(typeof window !== 'undefined'){
    connector = window.ethereum
}


const TransactionProviderr =({children})=>{
    const [fileUrl,setFileUrl] = useState()
    const [formInput,setFormInput] = useState()
    const [account,setAccount] = useState()

    const connectWallet = async function(metamask = connector){
        if (metamask) {
            const accounts = await connector.request({method : 'eth_requestAccounts'})
            setAccount(accounts[0])
        }
        else{
            console.log('please install metamask')
        }
    }

    const CreateNft = async function(metamask = connector){
        const provider = new ethers.providers.Web3Provider(metamask);
        const signer = provider.getSigner()
        const contract = new ethers.Contract(abi,signer)
    }

    return (
        <TransactionContext.Provider
            value={ 
            {
                connectWallet,
                account,
                CreateNft
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