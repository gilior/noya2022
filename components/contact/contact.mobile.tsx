import React, { FC } from 'react';
import Image from 'next/image'
import styles from 'components/concerts/concerts.mobile.module.scss'
import LinkComponent from 'components/link/link'
import crash from '../../public/crash.jpeg'
import { GeneralSiteProps } from 'const';
import { useTranslation } from 'next-i18next';

const ContactMobile: FC<GeneralSiteProps> = (props) => {
    const { t } = useTranslation('common')

    return (
        // <div className={styles.main}>
        <div className={styles['concerts-mobile-wrap']}>
            <textarea placeholder={t('contact_place_holder')} />
            <br />
            <button>{t('contact_send')}</button>
                   </div>


        // </div>
    )
};

export default ContactMobile;
