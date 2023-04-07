import HomeCardMobile from 'components/home_card/home.card'
import { GetStaticProps } from 'next'
import { FC } from 'react'
import { GeneralSiteProps } from 'const'
import pace from 'public/pace.jpg'
import bal from 'public/bal.jpg'
import blue from 'public/blue.png'
import CustomImage from 'components/image/image'
import crash from 'public/crash.jpeg'


const LecturesPageMobile: FC<GeneralSiteProps> = (props) => {


  
  return (
    <>
         <CustomImage img={crash} generalSiteProps={props} ></CustomImage>

           <HomeCardMobile description='lectures_page_desc' generalSiteProps={props} title='lectures'></HomeCardMobile>
           <HomeCardMobile description='pace_desc' generalSiteProps={props} title='pace_title' img={pace}></HomeCardMobile>
           <HomeCardMobile description='artbuis_desc' generalSiteProps={props} title='artbuis_title' img={blue}></HomeCardMobile>
           <HomeCardMobile description='perc_desc' generalSiteProps={props} title='perc_title' img={bal}></HomeCardMobile>
    </>
  )
}
export default LecturesPageMobile;

