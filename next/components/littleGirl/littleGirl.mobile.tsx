import React, { FC } from 'react';
import styles from 'components/littleGirl/littleGirl.mobile.module.css'
import { useTranslation } from 'next-i18next'
import { GeneralSiteProps } from 'const';

const LittleGirlMobile: FC<GeneralSiteProps> = (props) => {
    const { t } = useTranslation('common')

    return (
        <div className={styles['little-wrap']}>
            <div>{t('welcome')} !</div>
            <div>{t('littleGirl')}</div>
            <div>{t('enjoy')}</div>
        </div>
    )
};

export default LittleGirlMobile;
