import { coversImages } from '@/lib/covers'
import { useRouter } from 'next/router'
import { CoverImage } from './coverImage'
import { getNeighbors } from '@/utils/utils'

export const Suggest = () => {
  const router = useRouter()
  const { asPath } = router
  const index = coversImages.findIndex((cover) => cover.link === asPath)
  const neighbors = getNeighbors(coversImages, index)

  return (
    <div>
      <h2 className='text-start px-6 pt-10 text-black font-bold text-3xl'>You may also like</h2>
      <div className='grid grid-cols-1 px-6 pb-6 pt-2 gap-6 md:grid-cols-2'>
        {neighbors.map((cover) => (
          <CoverImage key={cover.coverName} src={cover.coverPath} alt={cover.coverName} hover={cover.hover} link={cover.link} />
        ))}
      </div>
    </div>
  )
}
