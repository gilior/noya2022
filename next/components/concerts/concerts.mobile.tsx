import React, { FC } from 'react';
import Image from 'next/image'
import styles from 'components/concerts/concerts.mobile.module.scss'
import LinkComponent from 'components/link/link'
import crash from '../../public/crash.jpeg'
import { GeneralSiteProps } from 'const';
import { useTranslation } from 'next-i18next';

const ConcertsMobile: FC<GeneralSiteProps> = (props) => {
    const { t } = useTranslation('common')

    return (
        // <div className={styles.main}>
        <div className={styles['concerts-mobile-wrap']}>
             {t('concerts')}
            <div className={styles['image-wrap']}>
                <Image
                    alt="Mountains"
                    src={crash}
                    fill
                />
            </div>
            <div>
            {t('home_concerts')}
            </div>
            <LinkComponent text='read_more' page={'concerts'} generalSiteProps={props}></LinkComponent>
        </div>


        // </div>
    )
};

export default ConcertsMobile;
