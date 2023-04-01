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
import blackwhite from 'public/blackwhite.png'
import VideoWithImage from 'components/video_with_image/video_with_image'
import AudioPlayer from '@/components/audio_player/audio_player'

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
           {/* <AudioPlayer tracks={[{tags:['test'],title:'test',url:'/short_story.mp3'}]}></AudioPlayer> */}
           </HomeCardMobile>


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

