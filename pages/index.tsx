import { Inter } from '@next/font/google'
import { GetStaticProps } from 'next'
import { FC } from 'react'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import Social from '../components/social'
import { GeneralSiteProps } from '../const'
import Concerts from './concerts';
import { useRouter } from 'next/router'
import Home from './home'
import Gallery from './gallery'
import Contact from './contact'
import Communities from './communities'
import Workshops from './workshops'
import Videos from './videos'
import Lectures from './lectures'
import Book from './book'
import Bio from './bio'
import News from './news'
import MenuPanel from '../components/menuPanel'

const inter = Inter({ subsets: ['latin'] })

const Index: FC<GeneralSiteProps> = (props) => {
  const pagesMap: Map<string, any> = new Map([
    ['concerts', Concerts],
    ['home', Home],
    ['gallery', Gallery],
    ['contact', Contact],
    ['communities', Communities],
    ['workshops', Workshops],
    ['videos', Videos],
    ['lectures', Lectures],
    ['book', Book],
    ['bio', Bio],
    ['news', News],
  ]);
  const router = useRouter()
  const Com = pagesMap.get(router.query.page?.toString() || 'home');
  return (
    <>

    <MenuPanel {...props}></MenuPanel> 
      <Layout>
        <Com {...props}></Com>


      </Layout>

    </>
  )
}

export const getStaticProps: GetStaticProps<GeneralSiteProps> = async ({
  locale,
  locales,
}) => {
  // const res = await fetch(`./assets/${locale}/nav.json`)
  const res = await fetch(`https://res.cloudinary.com/lior/raw/upload/noya2022/${locale}/nav.json`)
  const menuItems = await res.json()
  return {
    props: {
      locale,
      locales,
      menuItems
    },
  }
}


export default Index;

