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

const inter = Inter({ subsets: ['latin'] })

const Book: FC<GeneralSiteProps> = (props) => {


  
  return (
    <>
           <HomeCardMobile description='drumshouse_desc' img={book} img2={wall} generalSiteProps={props} title='drumshouse_title'></HomeCardMobile>
           <HomeCardMobile generalSiteProps={props}>
           <VideoWithImage generalSiteProps={props} img={house} videoId='xD0K80ekIHI'></VideoWithImage>
           </HomeCardMobile>
           <HomeCardMobile generalSiteProps={props} description='place_order'></HomeCardMobile>
           <HomeCardMobile generalSiteProps={props} description='signed_desc' title='signed_title'></HomeCardMobile>
           <HomeCardMobile generalSiteProps={props} description='price_desc' title='price_title'></HomeCardMobile>
           <HomeCardMobile generalSiteProps={props} description='delivery_desc' title='delivery_title'></HomeCardMobile>
           <HomeCardMobile generalSiteProps={props} img={blackwhite} description='coloring_desc' title='coloring_title'></HomeCardMobile>
           <HomeCardMobile generalSiteProps={props}>
           <CustomAudioPlayer track={{title:'drums_house_audio_title',url:'/short_story.mp3',subTitle:'drums_house_audio_desc'}}></CustomAudioPlayer>
           </HomeCardMobile>
           <HomeCardMobile generalSiteProps={props} description='order_now'></HomeCardMobile>
           <HomeCardMobile generalSiteProps={props}>
           <VideoWithImage generalSiteProps={props} img={sitting} videoId='75KPnL4Na5s'></VideoWithImage>
           </HomeCardMobile>
           <HomeCardMobile generalSiteProps={props} description='to_order'></HomeCardMobile>
           <PressCardMobile generalSiteProps={props} reviewer='yalechi' review='yalechi_rev'></PressCardMobile>
           <PressCardMobile generalSiteProps={props} reviewer='inbar' review='inbar_rev'></PressCardMobile>
           <PressCardMobile generalSiteProps={props} reviewer='ilana' review='ilana_rev'></PressCardMobile>
           <PressCardMobile generalSiteProps={props} reviewer='sigi' review='sigi_rev'></PressCardMobile>
           <PressCardMobile generalSiteProps={props} reviewer='gold' review='gold_rev'></PressCardMobile>
           <PressCardMobile generalSiteProps={props} reviewer='tagar' review='tagar_rev'></PressCardMobile>
           <PressCardMobile generalSiteProps={props} reviewer='broch' review='broch_rev'></PressCardMobile>
           <PressCardMobile generalSiteProps={props} reviewer='shfi' review='shfi_rev'></PressCardMobile>
           <PressCardMobile generalSiteProps={props} reviewer='begen' review='begen_rev'></PressCardMobile>
           <PressCardMobile generalSiteProps={props} reviewer='rozil' review='rozil_rev'></PressCardMobile>
           <PressCardMobile generalSiteProps={props} reviewer='loved' review='loved_rev'></PressCardMobile>
           <HomeCardMobile generalSiteProps={props} description='place_order'></HomeCardMobile>
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

