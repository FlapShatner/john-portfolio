import { coversImages } from '@/lib/covers'
import { useRouter } from 'next/router'
import { CoverImage } from './coverImage'

export const Suggest = () => {
  const router = useRouter()
  const { asPath } = router

  const filteredCovers = coversImages.filter((cover) => cover.link !== asPath).slice(1)

  return (
    <div>
      <h2 className='text-start px-6 pt-6 text-2xl'>You may also like</h2>
      <div className='grid grid-cols-1 p-6 gap-6 md:grid-cols-2'>
        {filteredCovers.map((cover) => (
          <CoverImage key={cover.coverName} src={cover.coverPath} alt={cover.coverName} hover={cover.hover} link={cover.link} />
        ))}
      </div>
    </div>
  )
}
