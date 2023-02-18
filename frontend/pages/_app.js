// import '@/styles/globals.css'
// import '@/styles/plugins/feature.css'
// import '@/styles/plugins/jquery-ui.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '@/styles/vendor/nice-select.css'
import '@/styles/vendor/odometer.css'
import '@/styles/style.css'
import {TransactionProviderr} from '../context/TransactionContext.js'



import { AppProps } from 'next/app'
import Layout from '../components/layouts/index'
export default function MyApp({ Component, pageProps }) {
  return (
    <TransactionProviderr>
        <Component {...pageProps} />
    </TransactionProviderr>
  )
}
