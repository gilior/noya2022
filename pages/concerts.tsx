import { GetStaticProps } from 'next';
import React, { FC } from 'react';
import Layout from '../components/layout';
import Navbar from '../components/navbar';
import { NavBarProps } from '../const';

const Concerts: FC<NavBarProps> = (props) => {
  console.log(props);
  return (
    <>
      <Navbar {...props}   />

      <Layout>

      <h1>Concerts page</h1>
      </Layout>

    </>
  )
};

export  const getStaticProps: GetStaticProps<NavBarProps> = async ({
  locale,
  locales,
}) => {
  // const res = await fetch(`./assets/${locale}/nav.json`)
  const res = await fetch(`https://res.cloudinary.com/lior/raw/upload/header/en/nav.json`)
  const menuItems = await res.json()
  return {
    props: {
      locale,
      locales,
      menuItems
    },
  }
}

export default Concerts;
