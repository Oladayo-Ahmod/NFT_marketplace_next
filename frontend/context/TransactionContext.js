import { Context,createContext } from "react"
export const transactionContext = createContext()


let connector = window?.ethereum

const connectWallet = async()=>{
    if (connector) {
        const account = await connector.request({method : 'eth_requestAccount'}) 
    }
    else{
        alert('please install metamask')
    }
}