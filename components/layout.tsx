import React, { PropsWithChildren } from 'react'
import { Header } from './header'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], axes: ['slnt'] })


export const Layout = ({ children }: PropsWithChildren) => {
    return (
        <main className={`flex min-h-screen flex-col items-center ${inter.className}`}>
            <Header />
            {children}
        </main>
    )
}
