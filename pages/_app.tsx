import { Layout } from '@/components/layout'
import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'

import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const { asPath } = router

  return (
    <>
      <Head>
        <title>John Roberts</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='shortcut icon' href='/favicon.png' />
      </Head>
      <Layout>
        <AnimatePresence initial={false} mode='wait'>
          <Component key={asPath} {...pageProps} />
        </AnimatePresence>
      </Layout>
    </>
  )
}
