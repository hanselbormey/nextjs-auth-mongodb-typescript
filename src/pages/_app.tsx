import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'

import Layout from '~components/Layout/Layout'
/* import 'tailwindcss/tailwind.css'; */

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Layout><Component {...pageProps} session={pageProps.session}/></Layout>
    </SessionProvider>
  )
}

export default MyApp
