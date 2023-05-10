import Link from 'next/link'

import { useRouter } from 'next/router'
import { Twirl as Hamburger } from 'hamburger-react'
import { links } from '@/lib/links'
import { MenuProps } from './menu'

type HeaderLinkProps = {
  linkName: string
  linkPath: string
  pathname: string
}

const HeaderLink = ({ linkName, linkPath, pathname }: HeaderLinkProps) => {
  return (
    <Link href={linkPath}>
      <div className={`${pathname == linkPath ? 'text-red-500' : 'text-[var(--fg)]'} hover:text-red-500  transition-all ease-in-out duration-200`}>
        {linkName}
      </div>
    </Link>
  )
}

export const Header = ({ show, setShow }: MenuProps) => {
  const router = useRouter()
  const { pathname } = router

  return (
    <div className='w-full bg-[#1B1B1B]'>
      <div className='max-w-screen-2xl mx-auto'>
        <div className='px-6 w-full h-16 flex items-center  transition-all justify-between sm:justify-start'>
          <h1 className=' text-4xl font-bold sm:text-5xl'>John Roberts</h1>
          <div className={`absolute  sm:hidden z-10 ${show ? 'right-6' : 'right-4'}`}>
            <Hamburger toggle={setShow} toggled={show} direction='right' rounded />
          </div>
        </div>
        <div className='hidden sm:flex w-full h-8 gap-7 items-center justify-center bg-black font-semibold pr-4 md:justify-end'>
          {links.map((link) => (
            <HeaderLink pathname={pathname} key={link.linkName} linkName={link.linkName} linkPath={link.linkPath} />
          ))}
        </div>
      </div>
    </div>
  )
}
