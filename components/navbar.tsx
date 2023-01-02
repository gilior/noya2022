import React, { FC } from 'react';
import Link from 'next/link'
import styles from '../styles/navbar.module.css'
import { useRouter } from 'next/router'
import { GeneralSiteProps } from '../const';

const Navbar: FC<GeneralSiteProps> = (props) => {
  const router = useRouter()
  const { pathname, asPath, query } = router
  const listItems = props.menuItems.map((item) =>
    <li key={item.key}>
      <Link
        href={{
          pathname: '',
          query: { page: item.key },
        }}
      >
        {item.value}
      </Link>
    </li>
  );
  listItems.push(
    <Link href="javascript:void(0)"
      onClick={() => router.push({ pathname, query }, asPath, { locale: props.locale == 'he' ? 'en' : 'he' })
      }
    >
      {props.locale == 'he' ? 'en' : 'עב'}
    </Link>
  )
  return (
    <div className={styles.wrapper}> <ul className={styles.horizontalMenu}>{listItems}</ul></div>
  );
};

export default Navbar;



