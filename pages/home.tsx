import { Inter } from '@next/font/google'
import { GetStaticProps } from 'next'
import { FC } from 'react'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import { GeneralSiteProps } from '../const'
import Concerts from './concerts';
import { useRouter } from 'next/router'
import HomeMobile from '../components/home/home.mobile'
import IntroMobile from 'components/intro/into.mobile'
import LittleGirlMobile from 'components/littleGirl/littleGirl.mobile'
import VideoMobile from 'components/video/video.mobile'
import AudioMobile from 'components/audio/audio.mobile'
import ConcertsMobile from 'components/concerts/concerts.mobile'
import LecturesMobile from 'components/lectures/lectures.mobile'
import lecture from '../public/lecture.jpeg'
import crash from '../public/crash.jpeg'
import book from '../public/book.jpg'
import workshops from '../public/workshops.jpg'
import HomeCardMobile from 'components/home_card/home.card'
import ContactMobile from 'components/contact/contact.mobile'

const inter = Inter({ subsets: ['latin'] })

const Home: FC<GeneralSiteProps> = (props) => {


  
  return (
    <> 
     <HomeMobile></HomeMobile>
   <IntroMobile {...props}></IntroMobile>
   <LittleGirlMobile {...props}></LittleGirlMobile>
   <VideoMobile  {...props}></VideoMobile>
   <AudioMobile  {...props}></AudioMobile>
   <HomeCardMobile description='home_concerts' generalSiteProps={props} img={crash} link='concerts' title='concerts'></HomeCardMobile>
   <HomeCardMobile description='home_lectures' generalSiteProps={props} img={lecture} link='lectures' title='lectures'></HomeCardMobile>
   <HomeCardMobile description='home_workshops' generalSiteProps={props} img={workshops} link='workshops' title='workshops'></HomeCardMobile>
   <HomeCardMobile description='home_book' generalSiteProps={props} img={book} link='book' title='book'></HomeCardMobile>
   <ContactMobile {...props}></ContactMobile>
    </>
 
  )
}

// export  const getStaticProps: GetStaticProps<{}> = async ({
//   locale,
//   locales,
// }) => {
//   // const res = await fetch(`./assets/${locale}/nav.json`)
//   return {
//     props: {}, // will be passed to the page component as props
//   }
// }


export default Home;

