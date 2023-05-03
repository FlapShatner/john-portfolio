import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import PageTransition from '@/components/pageTransition'
import { coversImages } from '@/lib/covers'

type CoverImageProps = {
  src: string
  alt: string
  hover: string
  link: string
}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>

const CoverImage = ({ src, alt, hover, link }: CoverImageProps, ref: IndexPageRef) => {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <PageTransition ref={ref}>
      <div
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className='hover:scale-105 hover:mix-blend-lighten transition-all duration-300 ease-out'>
        <Link href={link}>
          <Image className='rounded-lg' src={isHovering ? hover : src} alt={alt} width={1200} height={800} />
        </Link>
      </div>
    </PageTransition>
  )
}

export default function Home() {
  return (
    <>
      <div className='grid grid-cols-1 p-6 gap-6 md:grid-cols-2'>
        {coversImages.map((cover) => (
          <CoverImage key={cover.coverName} src={cover.coverPath} alt={cover.coverName} hover={cover.hover} link={cover.link} />
        ))}
      </div>
    </>
  )
}
