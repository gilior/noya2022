import React, { FC } from 'react';
import Link from 'next/link'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { MenuItems, Item, NavBarProps } from '../const';
import styles from '../styles/navbar.module.css'
import { useRouter } from 'next/router'

const Navbar: FC<NavBarProps> = (props) => {
  const router = useRouter()
const { pathname, asPath, query } = router
  const items = props.menuItems.items;
  const listItems = items.map((item) =>
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
    onClick={()=>router.push({ pathname, query }, asPath, { locale: 'he' })
  }
  >
    'עב'
  </Link>
  )
  return (
    <div className={styles.wrapper}> <ul className={styles.horizontalMenu}>{listItems}</ul></div>
  );
};

export default Navbar;



