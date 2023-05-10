import Link from 'next/link'
import { FaLinkedin, FaInstagramSquare } from 'react-icons/fa'

export const Footer = () => {
  return (
    <div className='flex justify-center pt-6 pb-16 gap-4'>
      <Link href='https://www.linkedin.com/in/john-roberts-1b5ba23a/'>
        <FaLinkedin className='hover:text-[var(--fg)] text-gray-400' size={56} />
      </Link>
      <Link href='https://www.instagram.com/johnwillumroberts/'>
        <FaInstagramSquare className='hover:text-[var(--fg)] text-gray-400' size={56} />
      </Link>
    </div>
  )
}
