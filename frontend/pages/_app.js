// import '@/styles/globals.css'
// import '@/styles/plugins/feature.css'
// import '@/styles/plugins/jquery-ui.min.css'
import '@/styles/vendor/nice-select.css'
import '@/styles/vendor/odometer.css'
import '@/styles/vendor/slick.css'
import '@/styles/vendor/slick-theme.css'
import '@/styles/style.css'


import { AppProps } from 'next/app'
import Layout from '../components/layouts/index'
export default function MyApp({ Component, pageProps }) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}
