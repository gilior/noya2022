import React, { FC } from 'react';
import Image, { StaticImageData } from 'next/image'
import styles from 'components/home_card/home.card.moblie.module.scss'
import LinkComponent from 'components/link/link'
import { GeneralSiteProps } from 'const';
import { useTranslation } from 'next-i18next';

export type HomeCardMobileProps = {
    generalSiteProps:GeneralSiteProps;
    img:StaticImageData;
    title:string;
    description:string;
    link:string;
};
const HomeCardMobile: FC<HomeCardMobileProps> = (props) => {
    const { t } = useTranslation('common')

    return (
        // <div className={styles.main}>
        <div className={styles['home-card-mobile-wrap']}>
             {t(props.title)}
            <div className={styles['image-wrap']}>
                <Image
                    alt="Mountains"
                    src={props.img}
                    fill
                />
            </div>
            <div>
            {t(props.description)}
            </div>
            <LinkComponent text='read_more' page={props.link} generalSiteProps={props}></LinkComponent>
        </div>


        // </div>
    )
};

export default HomeCardMobile;
