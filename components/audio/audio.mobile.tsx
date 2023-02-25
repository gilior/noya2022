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

// import Lightdiv from "yet-another-react-lightdiv";
// import styles from "./video.mobile.module.css";
// import { Carousel } from "react-responsive-carousel";
// import ReactPlayer from 'react-player';
// import "node_modules/react-responsive-carousel/lib/styles/carousel.min.css"
import styles from "./audio.mobile.module.css";
// import { div, Center, Heading, SimpleGrid } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import Head from "next/head"
import ocean from '../../public/2.jpg'

const AudioMobile: FC<GeneralSiteProps> = (props) => {
    const [currentVideo, setCurrentVideo] = useState(props.youtubeObj?.items[0]);
    const [playing, setPlaying] = useState(false);
    return (
        <div className={styles['audio-wrap']}>
           <Image
        alt="Mountains"
        src={ocean}

      />
          <audio controls>
            <source src="/piazola.mp3" type="audio/mpeg" />
            Your browser does not support the
          </audio>
        </div>
    )
}

export default AudioMobile;
