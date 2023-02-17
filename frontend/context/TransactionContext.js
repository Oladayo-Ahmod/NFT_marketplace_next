import Footer from "@/components/footer"
import Navbar from "@/components/Navbar"
import { Context,createContext, useState } from "react"


export const TransactionContext = createContext()

let connector
if(typeof window !== undefined){
    connector = window.ethereum
}


 const TransactionProviderr =({children})=>{
const [account,setAccount] = useState()
const connectWallet = async()=>{
    if (connector) {
        const accounts = await connector.request({method : 'eth_requestAccount'}) 
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
            account
        }
        }
        >
            <Navbar />
            {children}
            <Footer />
    </TransactionContext.Provider>
)
    }

    export default TransactionProviderr