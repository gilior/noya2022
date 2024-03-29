import { Inter } from '@next/font/google'
import { GetStaticProps } from 'next'
import { FC } from 'react'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import { GeneralSiteProps } from '../const'
import Concerts from './concerts';
import { useRouter } from 'next/router'
import GalleryPageMobile from 'components/pages/gallery/gallery.mobile'

const inter = Inter({ subsets: ['latin'] })

const Gallery: FC<GeneralSiteProps> = (props) => {


  
  return (
    <> 
     {props.isMobile && <GalleryPageMobile {...props} ></GalleryPageMobile>}
     {!props.isMobile && <h1>desktop</h1>}
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


export default Gallery;

