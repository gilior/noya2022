import { Inter } from '@next/font/google'
import { GetStaticProps } from 'next'
import { FC } from 'react'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import { NavBarProps } from '../const'
import Concerts from './concerts';
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

const Gallery: FC<NavBarProps> = (props) => {


  
  return (
    <>
      <h1>Gallery page</h1>
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

