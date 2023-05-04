import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Lightbox from 'yet-another-react-lightbox'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import 'yet-another-react-lightbox/styles.css'
import PageTransition from '@/components/pageTransition'
import { Suggest } from '@/components/suggest'
import { photos } from '@/lib/editorial'

type Props = {}
type EditorialPageRef = React.ForwardedRef<HTMLDivElement>

type Photo = {
  src: string
  width: number
  height: number
  alt: string
  href: string
  btnTxt: string
}

const ImageWithLink = (photo: Photo) => {
  const { src, alt, href, btnTxt, width, height } = photo
  return (
    <>
      <Image className='mx-auto' src={src} width={width} height={height} alt={alt} />
      <Link href={href}>
        <div className='w-max mx-auto border py-1 px-6 text-[1.75rem] text-black font-extrabold border-black rounded-xl mt-6 mb-16 hover:bg-red-500 hover:text-white transition-colors'>
          {btnTxt}
        </div>
      </Link>
    </>
  )
}

const Editorial = (props: Props, ref: EditorialPageRef) => {
  const [index, setIndex] = useState(-1)

  return (
    <PageTransition ref={ref}>
      <div className='w-full px-16'>
        <h1 className='text-center py-6 text-4xl font-extrabold'>Editorial</h1>
        {photos.map((photo, i) => (
          <div className='cursor-pointer' onClick={() => setIndex(i)} key={i}>
            <ImageWithLink {...photo} />
          </div>
        ))}
        <Link href='https://www.motortrend.com/staff/john-roberts/'>
          <div className='w-max mx-auto border py-1 px-6 text-[1.75rem] text-red-500 font-extrabold border-black rounded-xl mt-6 mb-16 hover:bg-[#1B1B1B] hover:text-white transition-colors'>
            More Editorial Here
          </div>
        </Link>
      </div>
      <Suggest />
      <Lightbox slides={photos} open={index >= 0} close={() => setIndex(-1)} index={index} plugins={[Zoom]} />
    </PageTransition>
  )
}

export default Editorial
