// import Player from "@madzadev/audio-player";
// import "@madzadev/audio-player/dist/index.css";
// import { GeneralSiteProps } from "const";
import { FC } from "react";

export type Track = {
    url: string,
    title: string,
    tags: Array<string>,
}
export type AudioPlayerProps = {
    tracks: Array<Track>

}
const AudioPlayer: FC<AudioPlayerProps> = (props) => {
    return (
        <div>
            {/* <Player trackList={props.tracks} /> */}
        </div>
    )
}

export default AudioPlayer;