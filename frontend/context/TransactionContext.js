import React, { Context,createContext, useEffect, useState } from "react"
import { useRouter } from "next/router"
import {abi,address} from '../constants/index'
import {ethers} from 'ethers'
import Swal from "sweetalert2"
// import {client} from '../constants/sanity.js'
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
    const [message,setMessage] = useState('Submit Item')
    const [singleData,setSingleData] = useState()
    const [userNftData, setUserNftData] = useState('')
    const {push} = useRouter()


     const fileWatcher = async function(e){
        let file = e.target.files[0]
        try {
            const response = await uploadFileToIPFS(file)
            setNftUrl(response)
            // console.log(response);
        } catch (error) {
            console.log(error);
        }
    }


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
            const {name,description,size,royalty,properties,price,file} = formData
            if (nftUrl && price) {
                setDisability(true)
                setMessage('Listing Item...')
                const metaDataUrl = await uploadMetaData()
                const provider = new ethers.providers.Web3Provider(connector);
                const signer = provider.getSigner()
                const contract = new ethers.Contract(address,abi,signer)
                const NFTprice = new ethers.utils.parseUnits(price,'ether')
                const listingPrice = await contract.getListingPrice()
                const transaction = await contract.createToken(metaDataUrl, NFTprice, { value: listingPrice })
                await transaction.wait()
                // const tokenId = wait.events[1].args.tokenId.toNumber()
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    text: `You have successfully created this item at ${price} ETH`,
                    showConfirmButton: false,
                    timer: 4000
                })
                setDisability(false)
                setFormData({
                    name: '', 
                    description : '',
                    size: '',
                    royalty : '',
                    properties : '',
                    price : '',
                    file :''
                })
                setMessage('successfully listed!')
    
            }
            else{
                Swal.fire({
                    position: 'top-end',
                    icon: 'warning',
                    text: `Please upload a valid NFT image`,
                    showConfirmButton: true,
                    timer: 4000
                })
            }
            

            
        }
        catch(error){
            setDisability(false)
            setMessage('Submit Item')
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
  

    // buy nft 
    const buyNft = async (tokenId,price)=>{
        try {
            const provider = new ethers.providers.Web3Provider(connector)
            const signer = provider.getSigner()
            const parsedPrice = new ethers.utils.parseEther(price)
            const contract = new ethers.Contract(address,abi,signer)
            const purchase = await contract.createSale(tokenId,{value :parsedPrice})
            await purchase.wait()
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                text: `You have successfully purchased this item at ${price} ETH`,
                showConfirmButton: false,
                timer: 4000
            })
            push('/my-nfts')



        } catch (error) {
            console.log(error);
        }
    }

    // fetch a single nft
    const getNft =async (tokenId)=>{
        try{
            const provider = new ethers.providers.Web3Provider(connector)
            const signer = provider.getSigner()
            const contract = new ethers.Contract(address,abi,signer)
            const tokenURI = await contract.tokenURI(tokenId);
            const NFTS = await contract.getItemById(tokenId)
            let meta = await axios.get(tokenURI);
            meta = meta.data;
            let item = {
                description : meta.description,
                size : meta.size,
                royalty : meta.royalty,
                properties : meta.properties,
                price : meta.price,
                tokenId,
                seller: NFTS.seller,
                owner: NFTS.owner,
                image: meta.file.pinataURL,
                name: meta.name,
            }

            setSingleData(item)
            
        }

        catch(error){
            console.log(error);
        }
    } 

    // resell purchased nft by user
    const resellNft = async (tokenId,price)=>{
        try{
            const provider = new ethers.providers.Web3Provider(connector)
            const signer = provider.getSigner()
            const contract = new ethers.Contract(address,abi,signer)
            const NFTprice = new ethers.utils.parseUnits(price,'ether')
            const listingPrice = await contract.getListingPrice()
            const transaction = await contract.resellItem(tokenId,NFTprice,{value : listingPrice})
            transaction.wait()
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                text: `You have successfully relisted this item at ${price} ETH`,
                showConfirmButton: false,
                timer: 4000
            })

        }
        catch(error){
            console.log(error);
        }
    }

    // all nfts purchased by a user
    const userNfts=async()=>{
        try {
            const provider = new ethers.providers.Web3Provider(connector)
            const signer = provider.getSigner()
            const contract = new ethers.Contract(address,abi,signer)
            const NFTS = await contract.fetchMyItems()
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
            setUserNftData(data)
            // setNftData(data)
        } catch (error) {
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
                disability,
                nftData,
                setFormData,
                fileWatcher,
                uploadMetaData,
                message,
                buyNft,
                getNft,
                singleData,
                resellNft,
                userNfts,
                userNftData
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