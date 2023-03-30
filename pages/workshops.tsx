import { Inter } from '@next/font/google'
import { GetStaticProps } from 'next'
import { FC } from 'react'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import { GeneralSiteProps } from '../const'
import Concerts from './concerts';
import { useRouter } from 'next/router'
import CustomImage from 'components/image/image'
import HomeCardMobile from 'components/home_card/home.card'
import bongo from 'public/bongo.jpg'
import smile from 'public/smile.jpg'
import darbuka from 'public/darbuka.jpg'

const inter = Inter({ subsets: ['latin'] })

const Workshops: FC<GeneralSiteProps> = (props) => {


  
  return (
    <>
             <CustomImage img={bongo} generalSiteProps={props} ></CustomImage>
           <HomeCardMobile description='workshops_desc' generalSiteProps={props} title='workshops'></HomeCardMobile>
           <HomeCardMobile description='percwork_desc' generalSiteProps={props} img={smile} title='percwork_title'></HomeCardMobile>
           <HomeCardMobile description='rythm_desc' generalSiteProps={props} img={darbuka} title='rythm_title'></HomeCardMobile>

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


export default Workshops;

