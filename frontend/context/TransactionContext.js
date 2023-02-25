import React, { Context,createContext, useEffect, useState } from "react"
import {abi,address} from '../constants/index'
import {ethers} from 'ethers'
import Swal from "sweetalert2"


const TransactionContext = React.createContext()

let connector
if(typeof window !== 'undefined'){
    connector = window.ethereum
}


const TransactionProviderr =({children})=>{
    const [fileUrl,setFileUrl] = useState()
    const [formData,setFormData] = useState(
        {
            name: '', 
            description : '',
            size: '',
            royalty : '',
            properties : '',
            price : '',
        })
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

    useEffect(()=>{
        connectWallet(connector)
    },[account])

    const CreateNft = async function(){
        try{
            const provider = new ethers.providers.Web3Provider(connector);
            const signer = provider.getSigner()
            const contract = new ethers.Contract(address,abi,signer)
            const NFTprice = new ethers.utils.parseUnits('1','ether')
            const url = 'https://mytoken.com'
            const listingPrice = await contract.getListingPrice()
            const transaction = await contract.createToken(url, NFTprice, { value: listingPrice })
            const wait = await transaction.wait()
            const tokenId = wait.events[1].args.tokenId.toNumber() 
            // console.log(wait.events[1].args.tokenId.toNumber())
            const {name,description,size,royalty,properties,price} = formData
            saveNftCreated(tokenId,name,description,size,royalty,properties,price)
            // console.log(formData);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                text: `You have successfully created this item at ${price} ETH`,
                showConfirmButton: false,
                timer: 4000
            })

            
        }
        catch(error){
            console.log(error)
        }
       
       

    }

    const saveNftCreated =(tokenId, ...others)=>{
        console.log('token',tokenId);
        console.log('others',others);
    }

    return (
        <TransactionContext.Provider
            value={ 
            {
                connectWallet,
                account,
                CreateNft,
                setFormData,
                formData
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