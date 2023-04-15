// import classNames from "classnames";
// import { formatDistance } from "date-fns";
import Image, { StaticImageData } from "next/image";
// import linkifyHtml from "linkify-html";
import { FC, useRef, useState } from "react";
import { GeneralSiteProps, YoutubeItem } from "const";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/scrollbar";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import play_yt from '../../public/play_yt.svg'

// import Lightdiv from "yet-another-react-lightdiv";
// import styles from "./video.mobile.module.css";
// import { Carousel } from "react-responsive-carousel";
// import ReactPlayer from 'react-player';
// import "node_modules/react-responsive-carousel/lib/styles/carousel.min.css"
import styles from "./carousel.mobile.module.scss";
// import { div, Center, Heading, SimpleGrid } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import Head from "next/head"
import { type } from "os";
const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};export type CarouselProps={
  images:Array<StaticImageData>;
  generalSiteProps:GeneralSiteProps
}
const Carousel: FC<CarouselProps> = (props) => {
    const [playing, setPlaying] = useState(false);
    return (
        <>
            {/* <Head>
        <title>YouTube Video Player</title>
        <meta name="description" content="A YouTube video player that uses ISG" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
            <div className={styles['video-wrap']}>
             
                    <Swiper
                        key={`${props.generalSiteProps.locale}-swiper}`}
                        dir={props.generalSiteProps.locale == 'en' ? "ltr" : 'rtl'}
                        slidesPerView={1}
                        spaceBetween={2}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className={styles['my-swiper']}
                    >
                        {
                            props.images.map((image,index) => {
                                return (
                                    <SwiperSlide key={index} className={styles['swiper-slide']}>
                                            <Image className={styles['play-button']} alt="" src={image}  />
                                    </SwiperSlide>
                                )
                            })
                        }

                    </Swiper>
                
            </div>
        </>
    )
}

export default Carousel;
