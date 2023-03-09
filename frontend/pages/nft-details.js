import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/footer'
import NftDetails from '../components/details'
const NFTDetails =()=>{
    return (
        <>
         <Head>
            <title>NFT Marketplace  NFT details</title>
            <meta name="description" content="An awesome nft marketplace" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
            <Navbar />
            <NftDetails />
            <Footer />
        </main>
           
        </>
    )
}

export default NFTDetails