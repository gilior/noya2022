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
import ConcertsPageMobile from '@/components/pages/concert/concerts.mobile';

const Concerts: FC<GeneralSiteProps> = (props) => {
  return (
    <> 
     {props.isMobile && <ConcertsPageMobile {...props} ></ConcertsPageMobile>}
     {!props.isMobile && <h1>desktop  Concerts</h1>}
    </>
 
  )
};
export default Concerts;
