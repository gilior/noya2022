// import classNames from "classnames";
// import { formatDistance } from "date-fns";
import Image from "next/image";
// import linkifyHtml from "linkify-html";
import { FC, useRef, useState } from "react";
import { GeneralSiteProps, YoutubeItem } from "const";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import play_yt from '../../public/play_yt.svg'

// import Lightdiv from "yet-another-react-lightdiv";
// import styles from "./video.mobile.module.css";
// import { Carousel } from "react-responsive-carousel";
// import ReactPlayer from 'react-player';
// import "node_modules/react-responsive-carousel/lib/styles/carousel.min.css"
import styles from "./video.mobile.module.css";
// import { div, Center, Heading, SimpleGrid } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import Head from "next/head"
import YoutubeVideoPlayer from "./youtube.player";
const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
const VideoMobile: FC<GeneralSiteProps> = (props) => {
    const [currentVideo, setCurrentVideo] = useState(props.youtubeObj?.items[0]);
    const [playing, setPlaying] = useState(false);
    return (
        <>
            {/* <Head>
        <title>YouTube Video Player</title>
        <meta name="description" content="A YouTube video player that uses ISG" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
            <div className={styles['video-wrap']}>
               {playing&& 
               <>   
               <div className={styles['close-video']} onClick={()=>setPlaying(false)}>
               &#10006;
                    </div>
                    <YoutubeVideoPlayer id={currentVideo?.snippet.resourceId.videoId || ''} playing={playing} />

               </>
                                    }
                {!playing &&
                    <Swiper
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
                            props.youtubeObj?.items.map((video) => {
                                return (
                                    <SwiperSlide className={styles['swiper-slide']}>
                                        <Button className={styles['youtube-image-wrap']} onClick={() => { setCurrentVideo(video); setPlaying(true) }}>
                                            <Image fill={true} alt="" src={video.snippet.thumbnails.medium.url} />
                                            <Image className={styles['play-button']} alt="" src={play_yt}  />
                                        </Button>
                                    </SwiperSlide>
                                )
                            })
                        }

                    </Swiper>
                }
            </div>
        </>
    )
}

export default VideoMobile;
