import Head from "next/head"
import MyListedNFTs from "../components/my-listed-nfts"
import Footer from '/@components/Footer'
import Navbar from '/@components/Navbar'

const MyCollection = ()=>{
    return (
        <>
         <Head>
            <title>NFT Marketplace | My NFT Collections</title>
            <meta name="description" content="An awesome nft marketplace" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
            <Navbar />
            <MyListedNFTs />
            <Footer />
        </main>
        </>
    )
}