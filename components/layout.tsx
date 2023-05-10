import React, { PropsWithChildren, useLayoutEffect, useState } from 'react'

import { motion } from 'framer-motion'
import { Header } from './header/header'
import { HeaderLinks } from './header/headerLinks'
import { Footer } from './footer'
import Menu from './menu'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], axes: ['slnt'] })

export const Layout = ({ children }: PropsWithChildren) => {
  const [show, setShow] = useState(false)

  return (
    <main className={`flex min-h-screen flex-col items-center ${inter.className}`}>
      <Header setShow={setShow} show={show} />
      <HeaderLinks />
      <motion.div className='w-full  mx-auto max-w-screen-2xl ' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        {children}
      </motion.div>
      <Footer />
      <Menu setShow={setShow} show={show} />
    </main>
  )
}
