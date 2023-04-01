import React, { FC, useState } from 'react';
import Image, { StaticImageData } from 'next/image'
import styles from 'components/video_with_image/video_with_image.module.scss'
import LinkComponent from 'components/link/link'
import { GeneralSiteProps } from 'const';
import { useTranslation } from 'next-i18next';
import YoutubeVideoPlayer from '../youtube_player/youtube.player';
import { Button } from '@chakra-ui/button';
import play_yt from '../../public/play_yt.svg'

export type VideoWithImageProps = {
    generalSiteProps:GeneralSiteProps;
    img:StaticImageData;
    videoId:string;
};
const VideoWithImage: FC<VideoWithImageProps> = (props) => {
    const { t } = useTranslation('common')
    const [playing, setPlaying] = useState(false);

    return (
        <div className={styles['video-with-image-wrap']}>
   {playing&& 
               <>   
               <div className={styles['close-video']} onClick={()=>setPlaying(false)}>
               &#10006;
                    </div>
                    <YoutubeVideoPlayer id={props.videoId || ''} playing={playing} />

               </>
                                    }
                                      {!playing &&<Button className={styles['youtube-image-wrap']} onClick={() => {setPlaying(true) }}>
                                            <Image fill={true} alt="" src={props.img} />
                                            <Image className={styles['play-button']} alt="" src={play_yt}  />
                                        </Button>}
        </div>

    )
};

export default VideoWithImage;
