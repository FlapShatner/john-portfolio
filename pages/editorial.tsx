import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Lightbox from 'yet-another-react-lightbox'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import 'yet-another-react-lightbox/styles.css'
import PageTransition from '@/components/pageTransition'
import { Suggest } from '@/components/suggest'
import { photos } from '@/lib/editorial'
import ScrollToTop from 'react-scroll-to-top'
import { UpArrow } from '@/components/upArrow'

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

const LinkButton = ({ href, btnTxt }: { href: string; btnTxt: string }) => {
  return (
    <div className='w-max mx-auto border text-xs flex flex-shrink py-2 text-[var(--fg)] font-extrabold border-[var(--fg)] rounded-xl mt-6 mb-16 hover:bg-red-500 hover:text-[var(--fg)] transition-colors sm:text-2xl md:text-3xl md:px-2'>
      <Link className='py-1 px-2 md:px-6' href={href}>
        {btnTxt}
      </Link>
    </div>
  )
}

const PageImage = (photo: Photo) => {
  const { src, alt, width, height } = photo

  return <Image className='mx-auto' src={src} width={width} height={height} alt={alt} />
}

const Editorial = (props: Props, ref: EditorialPageRef) => {
  const [index, setIndex] = useState(-1)

  return (
    <PageTransition ref={ref}>
      <div className='w-full px-4 md:px-16'>
        <h1 className='text-center py-6 text-4xl font-extrabold'>Editorial</h1>
        {photos.map((photo, i) => (
          <div key={i}>
            <div onClick={() => setIndex(i)}>
              <PageImage {...photo} />
            </div>
            <LinkButton href={photo.href} btnTxt={photo.btnTxt} />
          </div>
        ))}
        <div className='w-max mx-auto border text-sm flex flex-shrink py-2 text-red-500 font-extrabold border-[var(--fg)] rounded-xl mt-6 mb-16 hover:bg-[#1B1B1B] hover:text-[var(--fg)] transition-colors md:text-3xl md:px-2'>
          <Link className='py-1 px-2 md:px-6' href='https://www.motortrend.com/staff/john-roberts/'>
            More Editorial Here
          </Link>
        </div>
      </div>
      <Suggest />
      <Lightbox slides={photos} open={index >= 0} close={() => setIndex(-1)} index={index} plugins={[Zoom]} />
      {index <= 0 && <ScrollToTop className='scroll' smooth component={<UpArrow size={40} color={'black'} />} />}
    </PageTransition>
  )
}

export default Editorial
