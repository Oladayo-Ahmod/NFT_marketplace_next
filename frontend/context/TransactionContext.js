import React, { Context,createContext, useEffect, useState } from "react"
import {abi,address} from '../constants/index'
import {ethers} from 'ethers'
import Swal from "sweetalert2"
import {client} from '../constants/sanity.js'
import {uploadJSONToIPFS,uploadFileToIPFS} from '../constants/pinata.js'
const axios = require('axios');

const TransactionContext = React.createContext()

let connector
if(typeof window !== 'undefined'){
    connector = window.ethereum
}


const TransactionProviderr =({children})=>{
    const [disability,setDisability] = useState(false)
    const [formData,setFormData] = useState(
        {
            name: '', 
            description : '',
            size: '',
            royalty : '',
            properties : '',
            price : '',
            file :''
        })
    const [account,setAccount] = useState()
    const [nftData,setNftData] = useState()
    const [nftUrl, setNftUrl] = useState()
    const [tokenId,setTokenId] = useState()

     const fileWatcher = async function(e){
        let file = e.target.files[0]
        try {
            const response = await uploadFileToIPFS(file)
            setNftUrl(response)
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    // const testPinata = pinata.testAuthentication().then((result)=>{
    //     console.log(result);
    // }).catch((error)=>{
    //     console.log(error);
    // })

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
        AllUnsoldNfts()
    },[nftData])
    useEffect(()=>{
        connectWallet(connector)
    },[account])
    useEffect(()=>{
        if(!account) return ;
         (async ()=>{
             const userDoc = {
                 _type : 'users',
                 _id : account,
                 userName : 'a user',
                 address : account
             }
             await client.createIfNotExists(userDoc)
         })()
     },[account])

    const CreateNft = async function(){
        try{
            setDisability(true)
            const {name,description,size,royalty,properties,price,file} = formData
            const metaDataUrl = await uploadMetaData()
            console.log(metaDataUrl);
            const provider = new ethers.providers.Web3Provider(connector);
            const signer = provider.getSigner()
            const contract = new ethers.Contract(address,abi,signer)
            const NFTprice = new ethers.utils.parseUnits(price,'ether')
            const listingPrice = await contract.getListingPrice()
            const transaction = await contract.createToken(metaDataUrl, NFTprice, { value: listingPrice })
            const wait = await transaction.wait()
            const tokenId = wait.events[1].args.tokenId.toNumber()
            // setTokenId(tokenId)
            // await client.createIfNotExists(txDoc)
            // saveNftCreated(tokenId,name,description,size,royalty,properties,price,file,transaction.hash,address,account)
            // saveNftCreated(tokenId)
            // console.log(formData);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                text: `You have successfully created this item at ${price} ETH`,
                showConfirmButton: false,
                timer: 4000
            })
            setDisability(false)

            
        }
        catch(error){
            setDisability(false)
            console.log(error)
        }
       
       

    }

    const uploadMetaData = async function(){
        const {name,description,size,royalty,properties,price} = formData
        // if (!name || !description || !size || !royalty || !properties || !price )
        // return

        const nftJSON = {
            name,
            description,
            size,
            royalty,
            properties,
            price,
            // tokenId,
            file:nftUrl
        }

        
        try {
            // const stringify = JSON.stringify(nftJSON)
            // console.log(nftJSON);
            const response = await uploadJSONToIPFS(nftJSON)
            // console.log(response);
            return response.pinataURL
        } catch (error) {
            console.log(error);
        }
    }
    const saveNftCreated =async(tokenId, ...others)=>{
        try {
            const txDoc = {
                _type : 'nfts',
                _id : others[7],
                seller : others[8],
                owner : others[9],
                timestamp : new Date(Date.now()).toISOString(),
                hash : others[7],
                price : parseFloat(others[5]),
                sold : false,
                image : others[6],
                size : others[2],
                description : others[1],
                royalty : others[3],
                tokenId : tokenId,
                properties : others[4]
            }
            await client.createIfNotExists(txDoc)
            .then((data)=>{
                console.log('data',data);
            })
        }
        catch(error){
            console.log(error);
        }
        // await client
        // .patch(others[10])
        // .setIfMissing({nfts : []})
        // .insert('after','nfts[-1]',[
        //     {
        //         _key : others[8],
        //         _ref : others[8]
        //         // _hash : 'reference'
        //     }
        // ])
        // .commit()

    }

    const AllUnsoldNfts = async()=>{
        try{
            const provider = new ethers.providers.Web3Provider(connector)
            const signer = provider.getSigner()
            const contract = new ethers.Contract(address,abi,signer)
            const NFTS = await contract.allUnsoldItems()
            const data = await Promise.all(NFTS.map(async i =>{
                const tokenURI = await contract.tokenURI(i.tokenId)
                let meta = await axios.get(tokenURI);
                meta = meta.data;
                let price = ethers.utils.formatUnits(i.price.toString(), 'ether')
                let item = {
                    price,
                    tokenId: i.tokenId.toNumber(),
                    seller: i.seller,
                    owner: i.owner,
                    image: meta.file.pinataURL,
                    name: meta.name,
                  }
                  return item
            }))
            setNftData(data)
        }

        catch(error){
            console.log(error);
        }
    }
    return (
        <TransactionContext.Provider
            value={ 
            {
                connectWallet,
                account,
                CreateNft,
                formData,
                AllUnsoldNfts,
                disability,
                nftData,
                setFormData,
                fileWatcher,
                uploadMetaData
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