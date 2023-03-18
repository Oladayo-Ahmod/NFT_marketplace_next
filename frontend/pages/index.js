import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Banner from '../components/banner'
import Service from '../components/service'
import NewestItem from '../components/newestItem'
import TopCollection from '@/components/topCollection'
import Navbar from '@/components/Navbar'
import Footer from '@/components/footer'
import { useContext, useEffect } from 'react'
import { TransactionContext } from "../context/TransactionContext"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>NFT Marketplace</title>
        <meta name="description" content="An awesome nft marketplace" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
      <Banner />
      <NewestItem />
      <Service />
      <TopCollection />
      <Footer />
      </main>
      
    </>
  )
}
