import { useTranslation } from "next-i18next";
import { FC } from "react";

export type TrackHeaderProps = {
    title: string,
    subTitle: string,
}
const CustomAudioPlayerHeader: FC<TrackHeaderProps> = (props) => {
    const { t } = useTranslation('common');

    return (
       <div>
        <h1>{t(props.title)}</h1>
        <p>{t(props.subTitle)}</p>
       </div>
    )
}

export default CustomAudioPlayerHeader;