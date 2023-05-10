import PhotoAlbum from 'react-photo-album'
import NextJsImage from '@/components/nextJsImage'
import Lightbox from 'yet-another-react-lightbox'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import 'yet-another-react-lightbox/styles.css'
import PageTransition from '@/components/pageTransition'
import { designs } from '@/lib/designs'
import { useState } from 'react'
import { Suggest } from '@/components/suggest'
import ScrollToTop from 'react-scroll-to-top'
import { UpArrow } from '@/components/upArrow'

type Props = {}
type DesignsPageRef = React.ForwardedRef<HTMLDivElement>

const Designs = (props: Props, ref: DesignsPageRef) => {
  const [index, setIndex] = useState(-1)

  // Breakpoints in px for the number of photos per row
  const fourColumns = 1200
  const threeColumns = 700
  const twoColumns = 200

  const rowConstraints = (w: number) => ({ maxPhotos: w > fourColumns ? 4 : w > threeColumns ? 3 : w > twoColumns ? 2 : 1 })

  return (
    <PageTransition ref={ref}>
      <div className='w-full px-4'>
        <h1 className='text-center py-6 text-4xl font-extrabold'>Designs</h1>
        <PhotoAlbum
          photos={designs}
          layout='rows'
          rowConstraints={rowConstraints}
          renderPhoto={NextJsImage}
          defaultContainerWidth={1200}
          spacing={(containerWidth) => (containerWidth < 500 ? 5 : 10)}
          onClick={({ index }) => setIndex(index)}
        />
        <Lightbox slides={designs} open={index >= 0} close={() => setIndex(-1)} index={index} plugins={[Zoom]} />
      </div>
      <Suggest />
      {index <= 0 && <ScrollToTop className='scroll' smooth component={<UpArrow size={40} color={'black'} />} />}
    </PageTransition>
  )
}

export default Designs
