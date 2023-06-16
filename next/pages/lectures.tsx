import HomeCardMobile from 'components/home_card/home.card'
import { Inter } from '@next/font/google'
import { GetStaticProps } from 'next'
import { FC } from 'react'
import { GeneralSiteProps } from 'const'
import LecturesPageMobile from 'components/pages/lectures/lectures'

const inter = Inter({ subsets: ['latin'] })

const Lectures: FC<GeneralSiteProps> = (props) => {


  
  return (
    <> 
     {props.isMobile && <LecturesPageMobile {...props} ></LecturesPageMobile>}
     {!props.isMobile && <h1>desktop Lectures</h1>}
    </>
 
  )
}
export default Lectures;

