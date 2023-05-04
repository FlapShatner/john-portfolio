import YouTube, { YouTubeProps } from 'react-youtube'
import { videos } from '@/lib/videos'
import PageTransition from '@/components/pageTransition'
import { Suggest } from '@/components/suggest'

type VideoPlayerProps = {
  id: string
}

const VideoPlayer = ({ id }: VideoPlayerProps) => {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo()
  }

  const opts: YouTubeProps['opts'] = {
    height: '100%',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  }

  return (
    <div className='w-full h-full max-w-[640px] max-h-[360px]'>
      <YouTube className='aspect-video' videoId={id} opts={opts} onReady={onPlayerReady} />
    </div>
  )
}

type VideoPageProps = {}
type VideoPageRef = React.ForwardedRef<HTMLDivElement>

export default function Video(props: VideoPageProps, ref: VideoPageRef) {
  return (
    <PageTransition ref={ref}>
      <h1 className='text-center py-6 text-4xl text-[#69DB7A] font-extrabold'>YOUTUBE SERIES “THE TASTING”</h1>
      <div className='flex flex-col items-center justify-center gap-4 min-h-screen py-2'>
        {videos.map((video) => (
          <VideoPlayer key={video.id} id={video.id} />
        ))}
      </div>
      <Suggest />
    </PageTransition>
  )
}
