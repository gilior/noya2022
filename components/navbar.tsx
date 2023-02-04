import React, { FC } from 'react';
import Link from 'next/link'
import styles from '../styles/navbar.module.css'
import { useRouter } from 'next/router'
import { GeneralSiteProps } from '../const';
import { useTranslation } from 'next-i18next'

const Navbar: FC<GeneralSiteProps> = (props) => {
  const { t } = useTranslation('common')

  const router = useRouter()
  const { pathname, asPath, query } = router
  const listItems = props.menuItems?.map((menuItem,index) =>
    <li key={menuItem}>
      <Link
      key={index}
        href={{
          pathname: '',
          query: { page: menuItem },
        }}
      >
        {t(menuItem)}
      </Link>
    </li>
  );
  return (
    <div className={styles.wrapper}> <ul className={styles.horizontalMenu}>{listItems}</ul></div>
  );
};

export default Navbar;



