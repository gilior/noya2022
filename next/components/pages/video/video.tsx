import { FC } from 'react'
import { GeneralSiteProps } from 'const'
import CustomImage from 'components/image/image'
import HomeCardMobile from 'components/home_card/home.card'
import bongo from 'public/bongo.jpg'
import smile from 'public/smile.jpg'
import darbuka from 'public/darbuka.jpg'
import VideoMobile from 'components/video/video.mobile'


const VideoPageMobile: FC<GeneralSiteProps> = (props) => {


  
  return (
    <>
    <HomeCardMobile generalSiteProps={props}>
    <VideoMobile  {...props}></VideoMobile>

    </HomeCardMobile>

    </>
  )
}
export default VideoPageMobile;

