import React, { FC } from 'react';
import Link from 'next/link'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { MenuItems, Item, NavBarProps } from '../const';
import styles from '../styles/Navbar.module.css'

const Navbar: FC<NavBarProps> = (props) => {
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

  return (
    <ul className={styles.horizontalMenu}>{listItems}</ul>
  );
};

export default Navbar;



