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

const inter = Inter({ subsets: ['latin'] })

const Book: FC<GeneralSiteProps> = (props) => {


  
  return (
    <>
           <HomeCardMobile description='drumshouse_desc' img={book} img2={wall} generalSiteProps={props} title='drumshouse_title'></HomeCardMobile>

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

