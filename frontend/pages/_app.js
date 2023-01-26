import '@/styles/globals.css'
import { AppProps } from 'next/app'
import Layout from '../components/layouts/index'
export default function MyApp({ Component, pageProps }) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}
