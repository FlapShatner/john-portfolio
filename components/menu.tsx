import { motion, AnimatePresence } from 'framer-motion'
import { links } from '@/lib/links'
import Link from 'next/link'
import { useRouter } from 'next/router'

export type MenuProps = {
  show: boolean
  setShow: React.Dispatch<React.SetStateAction<boolean>>
}

const Menu = ({ show, setShow }: MenuProps) => {
  const router = useRouter()
  const { pathname } = router

  return (
    <AnimatePresence>
      {show && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <div className='absolute bg-black text-white top-0 left-0 h-full w-full flex justify-center items-start transition-all'>
            <div className='flex flex-col gap-8 text-3xl font-semibold pt-40'>
              {links.map((link) => (
                <Link key={link.linkName} href={link.linkPath}>
                  <div className={`${pathname == link.linkPath ? 'text-red-600' : 'text-white'}`} onClick={() => setShow(!show)}>
                    {link.linkName}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Menu
