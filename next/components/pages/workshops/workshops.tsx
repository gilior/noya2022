import { FC } from 'react'
import { GeneralSiteProps } from 'const'
import CustomImage from 'components/image/image'
import HomeCardMobile from 'components/home_card/home.card'
import bongo from 'public/bongo.jpg'
import smile from 'public/smile.jpg'
import darbuka from 'public/darbuka.jpg'


const WorkshopsPageMobile: FC<GeneralSiteProps> = (props) => {


  
  return (
    <>
             <CustomImage img={bongo} generalSiteProps={props} ></CustomImage>
           <HomeCardMobile description='workshops_desc' generalSiteProps={props} title='workshops'></HomeCardMobile>
           <HomeCardMobile description='percwork_desc' generalSiteProps={props} img={smile} title='percwork_title'></HomeCardMobile>
           <HomeCardMobile description='rythm_desc' generalSiteProps={props} img={darbuka} title='rythm_title'></HomeCardMobile>

    </>
  )
}
export default WorkshopsPageMobile;

