// import classNames from "classnames";
// import { formatDistance } from "date-fns";
import Image from "next/image";
// import linkifyHtml from "linkify-html";
import { FC, useEffect, useRef, useState } from "react";
import { GeneralSiteProps, YoutubeItem } from "const";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
//import lottieWeb from "lottie-react";
import lottieWeb from 'lottie-web';
import ocean from '../../public/ocean.jpg'

// import Lightdiv from "yet-another-react-lightdiv";
// import styles from "./video.mobile.module.css";
// import { Carousel } from "react-responsive-carousel";
// import ReactPlayer from 'react-player';
// import "node_modules/react-responsive-carousel/lib/styles/carousel.min.css"
import styles from "./audio.mobile.module.css";
// import { div, Center, Heading, SimpleGrid } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import Head from "next/head"
import { audioPlayerPath } from "../../util/audioPlayer-bundle-info";
import Script from "next/script";
import { useTranslation } from 'next-i18next'

//import lottieWeb from 'https://cdn.skypack.dev/lottie-web';
const AudioMobile: FC<GeneralSiteProps> = (props) => {
    /* Implementation of the presentation of the audio player */
    const { t } = useTranslation('common')

 useEffect(() => {
    const playIconContainer = document.getElementById('play-icon');
    const audioPlayerContainer = document.getElementById('audio-player-container');
    const seekSlider = document.getElementById('seek-slider') as HTMLInputElement;
    const volumeSlider = document.getElementById('volume-slider');
    const muteIconContainer = document.getElementById('mute-icon');
    let playState = 'play';
    let muteState = 'unmute';

    const playAnimation = lottieWeb.loadAnimation({
        container: playIconContainer,
        path: 'https://maxst.icons8.com/vue-static/landings/animated-icons/icons/pause/pause.json',
        renderer: 'svg',
        loop: false,
        autoplay: false,
        name: "Play Animation",
    });

    const muteAnimation = lottieWeb.loadAnimation({
        container: muteIconContainer,
        path: 'https://maxst.icons8.com/vue-static/landings/animated-icons/icons/mute/mute.json',
        renderer: 'svg',
        loop: false,
        autoplay: false,
        name: "Mute Animation",
    });

    playAnimation.goToAndStop(14, true);

    playIconContainer.addEventListener('click', () => {
        if (playState === 'play') {
            audio.play();
            playAnimation.playSegments([14, 27], true);
            requestAnimationFrame(whilePlaying);
            playState = 'pause';
        } else {
            audio.pause();
            playAnimation.playSegments([0, 14], true);
            cancelAnimationFrame(raf);
            playState = 'play';
        }
    });

    muteIconContainer.addEventListener('click', () => {
        if (muteState === 'unmute') {
            muteAnimation.playSegments([0, 15], true);
            audio.muted = true;
            muteState = 'mute';
        } else {
            muteAnimation.playSegments([15, 25], true);
            audio.muted = false;
            muteState = 'unmute';
        }
    });

    const showRangeProgress = (rangeInput) => {
        if (rangeInput === seekSlider) audioPlayerContainer.style.setProperty('--seek-before-width', rangeInput.value / rangeInput.max * 100 + '%');
        else audioPlayerContainer.style.setProperty('--volume-before-width', rangeInput.value / rangeInput.max * 100 + '%');
    }

    seekSlider.addEventListener('input', (e) => {
        showRangeProgress(e.target);
    });
    volumeSlider.addEventListener('input', (e) => {
        showRangeProgress(e.target);
    });





    /* Implementation of the functionality of the audio player */

    const audio = document.querySelector('audio');
    const durationContainer = document.getElementById('duration');
    const currentTimeContainer = document.getElementById('current-time');
    const outputContainer = document.getElementById('volume-output');
    let raf = null;

    const calculateTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${minutes}:${returnedSeconds}`;
    }

    const displayDuration = () => {
        durationContainer.textContent = calculateTime(audio.duration);
    }

    const setSliderMax = () => {
        seekSlider.max = Math.floor(audio.duration).toString();
    }

    const displayBufferedAmount = () => {
        const bufferedAmount = Math.floor(audio.buffered.end(audio.buffered.length - 1));
        audioPlayerContainer.style.setProperty('--buffered-width', `${(bufferedAmount / +seekSlider.max) * 100}%`);
    }

    const whilePlaying = () => {
        seekSlider.value = Math.floor(audio.currentTime).toString();
        currentTimeContainer.textContent = calculateTime(seekSlider.value);
        audioPlayerContainer.style.setProperty('--seek-before-width', `${+seekSlider.value / +seekSlider.max * 100}%`);
        raf = requestAnimationFrame(whilePlaying);
    }

    if (audio.readyState > 0) {
        displayDuration();
        setSliderMax();
        displayBufferedAmount();
    } else {
        audio.addEventListener('loadedmetadata', () => {
            displayDuration();
            setSliderMax();
            displayBufferedAmount();
        });
    }

    audio.addEventListener('progress', displayBufferedAmount);

    seekSlider.addEventListener('input', () => {
        currentTimeContainer.textContent = calculateTime(seekSlider.value);
        if (!audio.paused) {
            cancelAnimationFrame(raf);
        }
    });

    seekSlider.addEventListener('change', () => {
        audio.currentTime = +seekSlider.value;
        if (!audio.paused) {
            requestAnimationFrame(whilePlaying);
        }
    });

    volumeSlider.addEventListener('input', (e) => {
        const target = e.target as HTMLInputElement;

        const value = target.value;

        outputContainer.textContent = value;
        audio.volume = +value / 100;
    });




    /* Implementation of the Media Session API */
    if ('mediaSession' in navigator) {
        navigator.mediaSession.metadata = new MediaMetadata({
            title: 'Komorebi',
            artist: 'Anitek',
            album: 'MainStay',
            artwork: [
                { src: 'https://assets.codepen.io/4358584/1.300.jpg', sizes: '96x96', type: 'image/png' },
                { src: 'https://assets.codepen.io/4358584/1.300.jpg', sizes: '128x128', type: 'image/png' },
                { src: 'https://assets.codepen.io/4358584/1.300.jpg', sizes: '192x192', type: 'image/png' },
                { src: 'https://assets.codepen.io/4358584/1.300.jpg', sizes: '256x256', type: 'image/png' },
                { src: 'https://assets.codepen.io/4358584/1.300.jpg', sizes: '384x384', type: 'image/png' },
                { src: 'https://assets.codepen.io/4358584/1.300.jpg', sizes: '512x512', type: 'image/png' }
            ]
        });
        navigator.mediaSession.setActionHandler('play', () => {
            if (playState === 'play') {
                audio.play();
                playAnimation.playSegments([14, 27], true);
                requestAnimationFrame(whilePlaying);
                playState = 'pause';
            } else {
                audio.pause();
                playAnimation.playSegments([0, 14], true);
                cancelAnimationFrame(raf);
                playState = 'play';
            }
        });
        navigator.mediaSession.setActionHandler('pause', () => {
            if (playState === 'play') {
                audio.play();
                playAnimation.playSegments([14, 27], true);
                requestAnimationFrame(whilePlaying);
                playState = 'pause';
            } else {
                audio.pause();
                playAnimation.playSegments([0, 14], true);
                cancelAnimationFrame(raf);
                playState = 'play';
            }
        });
        navigator.mediaSession.setActionHandler('seekbackward', (details) => {
            audio.currentTime = audio.currentTime - (details.seekOffset || 10);
        });
        navigator.mediaSession.setActionHandler('seekforward', (details) => {
            audio.currentTime = audio.currentTime + (details.seekOffset || 10);
        });
        navigator.mediaSession.setActionHandler('seekto', (details) => {
            if (details.fastSeek && 'fastSeek' in audio) {
                audio.fastSeek(details.seekTime);
                return;
            }
            audio.currentTime = details.seekTime;
        });
        navigator.mediaSession.setActionHandler('stop', () => {
            audio.currentTime = 0;
            seekSlider.value = '0';
            audioPlayerContainer.style.setProperty('--seek-before-width', '0%');
            currentTimeContainer.textContent = '0:00';
            if (playState === 'pause') {
                playAnimation.playSegments([0, 14], true);
                cancelAnimationFrame(raf);
                playState = 'play';
            }
        });
    }
 }, []);
   
    return (
        <div class="audio-wrap">
                     <div className={styles['image-wrap']}>
                     <Image
        alt="Mountains"
        src={ocean}
       fill

      />
                     </div>


            <div id="audio-player-container">
                <audio src="/piazola.mp3" preload="metadata" loop></audio>
                <p>{t('astorPiazzolla')}</p>
                <button id="play-icon"></button>
                <span id="current-time" class="time">0:00</span>
                <input type="range" id="seek-slider" max="100" defaultValue="0"></input>
                <span id="duration" class="time">0:00</span>
                <output id="volume-output">100</output>
                <input type="range" id="volume-slider" max="100" defaultValue="100"></input>
                <button id="mute-icon"></button>
            </div>
        </div>
    )
}

export default AudioMobile;
