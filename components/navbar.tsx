import React, { FC } from 'react';
import Link from 'next/link'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { MenuItems, Item, NavBarProps } from '../const';

const Navbar: FC<NavBarProps> = (props) => {
  console.log(props);
  const items = props.menuItems.items;
  const listItems = items.map((item) =>
    <li>
      <Link href={item.key}>{item.value}</Link>
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
};

export default Navbar;



