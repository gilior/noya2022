import React, { FC } from 'react';
import Link from 'next/link'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { MenuItem } from '../const';

const Navbar: FC<Props> = (props) => {
  console.log(props);
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/concerts">Concerts</Link>
      </li>
    </ul>
  )
};

type Props = {
  locale?: string
  locales?: string[]
  menuItems?: MenuItem[]
}

export const getStaticProps: GetStaticProps<Props> = async ({
  locale,
  locales,
}) => {
  const res = await fetch(`assets/${locale}/nav.json`)
  const menuItems = await res.json()
  return {
    props: {
      locale,
      locales,
      menuItems
    },
  }
}

export default Navbar;
