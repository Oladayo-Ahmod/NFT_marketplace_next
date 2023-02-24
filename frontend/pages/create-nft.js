import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/footer'
const CreateNFT =()=>{
    return (
        <>
         <Head>
            <title>NFT Marketplace Create NFT</title>
            <meta name="description" content="An awesome nft marketplace" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
            <Navbar />
            <h1>Create</h1> 
            <Footer />
        </main>
           
        </>
    )
}

export default CreateNFT