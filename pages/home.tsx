import { Inter } from '@next/font/google'
import { GetStaticProps } from 'next'
import { FC } from 'react'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import { GeneralSiteProps } from '../const'
import Concerts from './concerts';
import { useRouter } from 'next/router'
import HomeMobile from '../components/home/home.mobile'
import IntroMobile from '@/components/intro/into.mobile'

const inter = Inter({ subsets: ['latin'] })

const Home: FC<GeneralSiteProps> = (props) => {


  
  return (
    <> 
     <HomeMobile></HomeMobile>
   <IntroMobile></IntroMobile>
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

