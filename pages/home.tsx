import { Inter } from '@next/font/google'
import { FC } from 'react'
import { GeneralSiteProps } from '../const'
import HomePageMobile from 'components/pages/home/home.mobile'

const inter = Inter({ subsets: ['latin'] })

const Home: FC<GeneralSiteProps> = (props) => {

console.log(props);

  
  return (
    <> 
     {props.isMobile && <HomePageMobile {...props} ></HomePageMobile>}
     {!props.isMobile && <h1>desktop Home</h1>}
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

