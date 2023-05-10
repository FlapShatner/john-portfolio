import NextJsImage from '@/components/nextJsImage'
import PageTransition from '@/components/pageTransition'
import { Suggest } from '@/components/suggest'
import { UpArrow } from '@/components/upArrow'
import { photos } from '@/lib/photos'
import { useState } from 'react'
import PhotoAlbum from 'react-photo-album'
import ScrollToTop from 'react-scroll-to-top'
import Lightbox from 'yet-another-react-lightbox'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import 'yet-another-react-lightbox/styles.css'

type Props = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>

const Photography = (props: Props, ref: IndexPageRef) => {
  const [index, setIndex] = useState(-1)

  // Breakpoints in px for the number of photos per row
  const fourColumns = 1200
  const threeColumns = 700
  const twoColumns = 200

  const rowConstraints = (w: number) => ({ maxPhotos: w > fourColumns ? 4 : w > threeColumns ? 3 : w > twoColumns ? 2 : 1 })

  return (
    <PageTransition ref={ref}>
      <div className='w-full px-4'>
        <h1 className='text-center py-6 text-4xl font-extrabold'>Photography</h1>
        <PhotoAlbum
          photos={photos}
          layout='rows'
          rowConstraints={rowConstraints}
          renderPhoto={NextJsImage}
          defaultContainerWidth={1200}
          spacing={(containerWidth) => (containerWidth < 500 ? 5 : 10)}
          onClick={({ index }) => setIndex(index)}
        />
        <Lightbox slides={photos} open={index >= 0} close={() => setIndex(-1)} index={index} plugins={[Zoom]} />
      </div>
      <Suggest />
      {index <= 0 && <ScrollToTop className='scroll' smooth component={<UpArrow size={40} color={'black'} />} />}
    </PageTransition>
  )
}

export default Photography
