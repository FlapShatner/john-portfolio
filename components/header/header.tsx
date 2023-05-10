import { useRouter } from 'next/router'
import { Twirl as Hamburger } from 'hamburger-react'
import { HeaderLinks } from './headerLinks'
import { MenuProps } from '../menu'

export const Header = ({ show, setShow }: MenuProps) => {
  const router = useRouter()
  const { pathname } = router

  return (
    <div className='z-50 top-0 w-full bg-[#1B1B1B]'>
      <div className='max-w-screen-2xl  mx-auto'>
        <div className='px-6 w-full h-16 flex items-center relative transition-all justify-between sm:justify-start'>
          <h1 className=' text-4xl font-bold sm:text-5xl'>John Roberts</h1>
          <div className={`absolute  sm:hidden z-10 ${show ? 'right-6' : 'right-4'}`}>
            <Hamburger toggle={setShow} toggled={show} direction='right' rounded />
          </div>
        </div>
        {/* <HeaderLinks pathname={pathname} /> */}
      </div>
    </div>
  )
}
