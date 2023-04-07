import React, { FC } from 'react';
import Image, { StaticImageData } from 'next/image'
import styles from 'components/home_card/home.card.moblie.module.scss'
import LinkComponent from 'components/link/link'
import { GeneralSiteProps } from 'const';
import { useTranslation } from 'next-i18next';

export type HomeCardMobileProps = {
    generalSiteProps:GeneralSiteProps;
    img?:StaticImageData;
    img2?:StaticImageData;
    title?:string;
    description?:string;
    link?:string;
    children?: React.ReactNode;

};
const HomeCardMobile: FC<HomeCardMobileProps> = (props) => {
    const { t } = useTranslation('common')

    return (
        // <div className={styles.main}>
        <div className={styles['home-card-mobile-wrap']}>
             {props.title && t(props.title)}
             <div>
            {props.description && t(props.description)}
            </div>
          { props.img && <div className={styles['image-wrap']}>
                <Image
                    alt="Mountains"
                    src={props.img}
                    fill
                />
            </div>}

            { props.img2 && <div className={styles['image-wrap']}>
                <Image
                    alt="Mountains"
                    src={props.img2}
                    fill
                />
            </div>}
           
           { props.link &&  <LinkComponent text='read_more' page={props.link} generalSiteProps={props.generalSiteProps}></LinkComponent>}

           {props.children}
        </div>


        // </div>
    )
};

export default HomeCardMobile;
