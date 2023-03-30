import HomeCardMobile from 'components/home_card/home.card';
import { GetStaticProps } from 'next';
import React, { FC } from 'react';
import Layout from '../components/layout';
import Navbar from '../components/navbar';
import { GeneralSiteProps } from '../const';
import teva_cellcom from '../public/teva_cellcom.jpg'
import trio from '../public/trio.jpg'
import carpet from '../public/carpet.jpeg'
import bitbit from '../public/bitbit.jpg'
import menifa from '../public/menifa.jpg'
import gong from '../public/gong.jpg'
import crash from '../public/crash.jpeg'
import YoutubeVideoPlayer from 'components/youtube_player/youtube.player';
import PressCardMobile from 'components/press_card/press_card.mobile';
import Image from 'next/image'
import CustomImage from 'components/image/image';

const Concerts: FC<GeneralSiteProps> = (props) => {
  return (
   <div >
     <CustomImage img={crash} generalSiteProps={props} ></CustomImage>
       <HomeCardMobile description='concerts_page_Desc' generalSiteProps={props} title='concerts'></HomeCardMobile>
       <HomeCardMobile description='the_show_desc' generalSiteProps={props} img={teva_cellcom} title='the_show_title'></HomeCardMobile>
       <HomeCardMobile description='kelim_shluvim_desc' generalSiteProps={props} img={trio} title='kelim_shluvim_title'></HomeCardMobile>
       <HomeCardMobile description='drums_desc' generalSiteProps={props} img={carpet} title='drums_title'></HomeCardMobile>
       <HomeCardMobile description='bit_desc' generalSiteProps={props} img={bitbit} title='bit_title'></HomeCardMobile>
       <HomeCardMobile description='drumdance_desc' generalSiteProps={props} img={menifa} title='drumdance_title'></HomeCardMobile>
       <HomeCardMobile description='magic_desc' generalSiteProps={props} img={gong} title='magic_title'></HomeCardMobile>
       <YoutubeVideoPlayer id={'9iyh6SF7wfY'} playing={false} />
       <PressCardMobile generalSiteProps={props} reviewer='slonim' review='slonim_rev'></PressCardMobile>
       <PressCardMobile generalSiteProps={props} reviewer='slonim' review='slonim_rev_2'></PressCardMobile>
       <PressCardMobile generalSiteProps={props} reviewer='shomroni' review='shomromi_rev'></PressCardMobile>

   </div>
  )
};

export  const getStaticProps: GetStaticProps<{}> = async ({
  locale,
  locales,
}) => {
  return {
    props: {}, // will be passed to the page component as props
  }
}

export default Concerts;
