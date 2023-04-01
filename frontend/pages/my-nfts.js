import MyNfts from "../components/my-nfts"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Head from "next/head"

const My_Nfts=()=>{
    return (
       <>
         <Head>
            <title>NFT Marketplace | My NFTs</title>
            <meta name="description" content="An awesome nft marketplace" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
            <Navbar />
            <MyNfts />
            <Footer />
        </main>
       </> 
    )
}

export default My_Nfts