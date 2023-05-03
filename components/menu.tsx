import { motion, AnimatePresence } from 'framer-motion'
import { links } from '@/lib/links'
import Link from 'next/link'
import { useScrollLock } from '@/hooks/useScrollLock'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export type MenuProps = {
  show: boolean
  setShow: React.Dispatch<React.SetStateAction<boolean>>
}

const Menu = ({ show, setShow }: MenuProps) => {
  const router = useRouter()
  const { pathname } = router

  const { lockScroll, unlockScroll } = useScrollLock()

  useEffect(() => {
    if (show) lockScroll()
    return () => {
      unlockScroll()
    }
  })

  const transition = { duration: 0.2, ease: 'easeInOut' }

  return (
    <AnimatePresence mode='wait'>
      {show && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={transition}>
          <div className='absolute bg-black text-white top-0 left-0 h-full w-full flex justify-center items-start transition-all '>
            <div className='flex flex-col gap-8 text-3xl font-semibold pt-20'>
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
