import classNames from "classnames";
import { formatDistance } from "date-fns";
import Image from "next/image";
import linkifyHtml from "linkify-html";
import { FC, useRef, useState } from "react";
import { GeneralSiteProps, YoutubeItem } from "const";
import Lightbox from "yet-another-react-lightbox";
import styles from "./video.mobile.module.css";
import { Carousel } from "react-responsive-carousel";
import ReactPlayer from 'react-player';
import "node_modules/react-responsive-carousel/lib/styles/carousel.min.css"
const VideoMobile: FC<GeneralSiteProps> = (props) => {
    return (
        <div className={styles['video-wrap']}>
            <Carousel showArrows={true}>
            {
                props.youtubeObj?.items?.map((item: YoutubeItem, index: number) => {
                    return (
                        <div>
                            <img src={item.snippet.thumbnails.high.url} />
                        </div>
                    )
                }
                )}

        </Carousel>
        </div>
        
    );
}

export default VideoMobile;
