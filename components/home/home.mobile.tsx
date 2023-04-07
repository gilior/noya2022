import React, { FC } from 'react';
import Image from 'next/image'
import styles from 'components/home/home.mobile.module.css'
import mic from '../../public/1.jpg'
import { Inter } from '@next/font/google'
import { GetStaticProps } from 'next'
import { GeneralSiteProps } from 'const'
import { useRouter } from 'next/router'
import IntroMobile from 'components/intro/into.mobile'
import LittleGirlMobile from 'components/littleGirl/littleGirl.mobile'
import VideoMobile from 'components/video/video.mobile'
import AudioMobile from 'components/audio/audio.mobile'
import ConcertsMobile from 'components/concerts/concerts.mobile'
import LecturesMobile from 'components/lectures/lectures.mobile'
import lecture from 'public/lecture.jpeg'
import crash from 'public/crash.jpeg'
import book from 'public/book.jpg'
import workshops from 'public/workshops.jpg'
import HomeCardMobile from 'components/home_card/home.card'
import ContactMobile from 'components/contact/contact.mobile'
const HomeMobile: FC<GeneralSiteProps> = (props) => {
  return (
    // <div className={styles.main}>
    <>
             <div className={styles['image-wrap']}>
      <Image
        alt="Mountains"
        src={mic}
       fill

      />
    </div>
    <IntroMobile {...props}></IntroMobile>
   <LittleGirlMobile {...props}></LittleGirlMobile>
   <VideoMobile  {...props}></VideoMobile>
   <AudioMobile  {...props}></AudioMobile>
   <HomeCardMobile description='home_concerts' generalSiteProps={props} img={crash} link='concerts' title='concerts'></HomeCardMobile>
   <HomeCardMobile description='home_lectures' generalSiteProps={props} img={lecture} link='lectures' title='lectures'></HomeCardMobile>
   <HomeCardMobile description='home_workshops' generalSiteProps={props} img={workshops} link='workshops' title='workshops'></HomeCardMobile>
   <HomeCardMobile description='home_book' generalSiteProps={props} img={book} link='book' title='book'></HomeCardMobile>
   <ContactMobile {...props}></ContactMobile>
    </>

    

    // </div>
  )
};

export default HomeMobile;
