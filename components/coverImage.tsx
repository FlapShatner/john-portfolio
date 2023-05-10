import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

type CoverImageProps = {
  src: string
  alt: string
  hover: string
  link: string
}

export const CoverImage = ({ src, alt, hover, link }: CoverImageProps) => {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className='sm:hover:scale-105 sm:hover:mix-blend-lighten transition-all duration-300 ease-out'>
      <Link href={link}>
        <Image className='rounded-lg' src={isHovering ? hover : src} alt={alt} width={1200} height={800} />
      </Link>
    </div>
  )
}
