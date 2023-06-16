import { Inter } from '@next/font/google'
import { GetStaticProps } from 'next'
import { FC } from 'react'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import { GeneralSiteProps } from '../const'
import Concerts from './concerts';
import { useRouter } from 'next/router'
import HomeCardMobile from 'components/home_card/home.card'
import book from 'public/book.jpg'
import wall from 'public/wall.jpg'
import house from 'public/house.jpg'
import sitting from 'public/sitting.jpg'
import blackwhite from 'public/blackwhite.png'
import VideoWithImage from 'components/video_with_image/video_with_image'
import AudioPlayer from '@/components/audio_player/audio_player'
import CustomAudioPlayer from 'components/audio_player/audio_player'
import PressCardMobile from 'components/press_card/press_card.mobile'
import BookPageMobile from 'components/pages/book/book.mobile'

const inter = Inter({ subsets: ['latin'] })

const Book: FC<GeneralSiteProps> = (props) => {

  return (
    <> 
     {props.isMobile && <BookPageMobile {...props} ></BookPageMobile>}
     {!props.isMobile && <h1>desktop Book</h1>}
    </>
 
  )
}

export  const getStaticProps: GetStaticProps<{}> = async ({
  locale,
  locales,
}) => {
  // const res = await fetch(`./assets/${locale}/nav.json`)
  return {
    props: {}, // will be passed to the page component as props
  }
}


export default Book;

