import { FC } from 'react'
import { GeneralSiteProps } from 'const'
import HomeCardMobile from 'components/home_card/home.card'
import book from 'public/book.jpg'
import wall from 'public/wall.jpg'
import house from 'public/house.jpg'
import sitting from 'public/sitting.jpg'
import blackwhite from 'public/blackwhite.png'
import VideoWithImage from 'components/video_with_image/video_with_image'
import CustomAudioPlayer from 'components/audio_player/audio_player'
import PressCardMobile from 'components/press_card/press_card.mobile'


const BioPageMobile: FC<GeneralSiteProps> = (props) => {


  
  return (
    <>
        <HomeCardMobile generalSiteProps={props} description='cv'></HomeCardMobile>  
    </>
  )
}
export default BioPageMobile;

