import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/footer'
import NftDetails from '../../components/details'
import {useRouter} from 'next/router'

const NFTDetails =()=>{
    // console.log(tokenId);
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
            {/* <h1>{router.query}</h1> */}
            <NftDetails />
            <Footer />
        </main>
           
        </>
    )
}

export default NFTDetails