import React, { PropsWithChildren, useState } from 'react'
import { Header } from './header'
import { Footer } from './footer'
import Menu from './menu'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'], axes: ['slnt'] })


export const Layout = ({ children }: PropsWithChildren) => {
    const [show, setShow] = useState(false)


    return (
        <main className={`flex min-h-screen flex-col items-center ${inter.className}`}>
            <Header setShow={setShow} show={show} />
            {children}
            <Footer />
            <Menu setShow={setShow} show={show} />
        </main>
    )
}
