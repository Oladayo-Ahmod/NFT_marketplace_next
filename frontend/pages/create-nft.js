import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import Create from '../components/create-nft'
const CreateNFT =()=>{
    return (
        <>
         <Head>
            <title>NFT Marketplace | Create NFT</title>
            <meta name="description" content="An awesome nft marketplace" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
            <Navbar />
            <Create />
            <Footer />
        </main>
           
        </>
    )
}

export default CreateNFT