import React, { FC } from 'react';
import Image from 'next/image'
import styles from 'components/link/link.module.scss'
import { GeneralSiteProps } from 'const';
import { useTranslation } from 'next-i18next';
import Link from 'next/link'

export type ConcertsMobileProps = {
    generalSiteProps:GeneralSiteProps,
    page:string,
    text:string
}
const LinkMobile: FC<ConcertsMobileProps> = (props) => {
    const { t } = useTranslation('common')

    return (
        // <div className={styles.main}>
        <div className={styles['link-wrap']}>
      <Link
        href={{
          pathname: '',
          query: { page: props.page },
        }}
      >
        {t(props.text)} {'>'}{'>'}
      </Link>
        </div>


        // </div>
    )
};

export default LinkMobile;
