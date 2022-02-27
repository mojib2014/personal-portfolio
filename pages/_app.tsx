import '../styles/tailwind.css'
import '../styles/globals.css'
import '../styles/prism.css'

import '@fontsource/inter/variable-full.css'

import Head from 'next/head'
import LayoutWrapper from '@components/LayoutWrapper'
import {ThemeProvider} from 'next-themes'
import {ClientReload} from '@components/ClientReload'

import siteMetadata from '@data/siteMetadata'

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

function MyApp({Component, pageProps}) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head key="viewport">
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      {isDevelopment && isSocket && <ClientReload />}
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  )
}

export default MyApp
