import React, { FC } from 'react';
import Image from 'next/image'
import styles from 'components/lectures/lectures.mobile.module.scss'
import LinkComponent from 'components/link/link'
import lecture from '../../public/lecture.jpeg'
import { GeneralSiteProps } from 'const';
import { useTranslation } from 'next-i18next';

const LecturesMobile: FC<GeneralSiteProps> = (props) => {
    const { t } = useTranslation('common')

    return (
        // <div className={styles.main}>
        <div className={styles['lectures-mobile-wrap']}>
             {t('lectures')}
            <div className={styles['image-wrap']}>
                <Image
                    alt="Mountains"
                    src={lecture}
                    fill
                />
            </div>
            <div>
            {t('home_lectures')}
            </div>
            <LinkComponent text='read_more' page={'lectures'} generalSiteProps={props}></LinkComponent>
        </div>


        // </div>
    )
};

export default LecturesMobile;
