import React, { FC } from 'react';
import styles from 'components/intro/intro.mobile.module.css'
import { useTranslation } from 'next-i18next'
import { GeneralSiteProps } from 'const';

const IntroMobile: FC<GeneralSiteProps> = (props) => {
    const { t } = useTranslation('common')

    return (
        <div className={styles['intro-wrap']}>
            <div>{t('noya schleien')}</div>
            <div>{t('proffesion')}</div>
        </div>
    )
};

export default IntroMobile;
