import { Inter } from '@next/font/google'
import { GetStaticProps } from 'next'
import { FC } from 'react'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import Social from '../components/social'
import { generalSiteProps, GeneralSiteProps, YOUTUBE_PLAYLIST_ITEMS_API } from 'const'
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
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const inter = Inter({ subsets: ['latin'] })

const Index: FC<GeneralSiteProps> = (props) => {
  console.log(props.youtubeObj);
  
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
  //const env = process.env.NODE_ENV;
  // if (env == "development") {
  //   const devGeneralSiteProps = getPropsByLocale(locale);
  //   return {
  //     props: {
  //       ...(await serverSideTranslations(locale ?? 'en', [
  //         'common',
  //       ])),
  //       locale,
  //       locales,
  //       menuItems: devGeneralSiteProps.menuItems,
  //       title: devGeneralSiteProps.title,
  //     },
  //   }
  // }
  // else {
  // const res = await fetch(`https://res.cloudinary.com/lior/raw/upload/noya2022/${locale == 'default' ? 'en' : locale}/nav.json`)
  // const items = await res.json()
  const res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=50&playlistId=PLPoSXtKy5db8jSWp29zRQbPuYYGbNsEbG&key=${process.env.YOUTUBE_API_KEY}`)
  const data = await res.json();

  console.log(data);

  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', [
        'common',
      ])),
      locale,
      locales,
      menuItems: generalSiteProps.menuItems,
      youtubeObj:data
    },
  }
  // }

}


export default Index;

