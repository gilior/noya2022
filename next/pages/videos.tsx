import { Inter } from '@next/font/google'
import { GetStaticProps } from 'next'
import { FC } from 'react'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import { GeneralSiteProps } from '../const'
import Concerts from './concerts';
import { useRouter } from 'next/router'
import VideoPageMobile from 'components/pages/video/video'

const inter = Inter({ subsets: ['latin'] })

const Videos: FC<GeneralSiteProps> = (props) => {


  
  return (
    <> 
     {props.isMobile && <VideoPageMobile {...props} ></VideoPageMobile>}
     {!props.isMobile && <h1>desktop  Videos</h1>}
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


export default Videos;

