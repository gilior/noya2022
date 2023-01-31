import React, { FC } from 'react';
import Link from 'next/link'
import styles from '../styles/navbar.module.css'
import { useRouter } from 'next/router'
import { GeneralSiteProps } from '../const';

const Navbar: FC<GeneralSiteProps> = (props) => {

  const router = useRouter()
  const { pathname, asPath, query } = router
  const listItems = props.menuItems.items.map((item,index) =>
    <li key={item.key}>
      <Link
      key={index}
        href={{
          pathname: '',
          query: { page: item.key },
        }}
      >
        {item.value}
      </Link>
    </li>
  );
  return (
    <div className={styles.wrapper}> <ul className={styles.horizontalMenu}>{listItems}</ul></div>
  );
};

export default Navbar;



