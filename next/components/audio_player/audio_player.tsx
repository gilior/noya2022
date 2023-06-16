import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { FC } from "react";
import CustomAudioPlayerHeader from './audio_header';

export type Track = {
    url: string,
    title: string,
    subTitle?: string,
}
export type AudioPlayerProps = {
    track: Track

}
const CustomAudioPlayer: FC<AudioPlayerProps> = (props) => {

    return (
        <div>
           <AudioPlayer
           header={<CustomAudioPlayerHeader title={props.track.title} subTitle={props.track.subTitle}></CustomAudioPlayerHeader>}
    src={props.track.url}
    onPlay={e => console.log("onPlay")}
    // other props here
  />
        </div>
    )
}

export default CustomAudioPlayer;