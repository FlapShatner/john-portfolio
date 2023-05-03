import { CoverImage } from '@/components/coverImage'
import PageTransition from '@/components/pageTransition'
import { coversImages } from '@/lib/covers'

type CoverImageProps = {
  src: string
  alt: string
  hover: string
  link: string
}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>

type HomeProps = {}

export default function Home(props: HomeProps, ref: IndexPageRef) {
  return (
    <>
      <PageTransition ref={ref}>
        <div className='grid grid-cols-1 p-6 gap-6 md:grid-cols-2'>
          {coversImages.map((cover) => (
            <CoverImage key={cover.coverName} src={cover.coverPath} alt={cover.coverName} hover={cover.hover} link={cover.link} />
          ))}
        </div>
      </PageTransition>
    </>
  )
}
