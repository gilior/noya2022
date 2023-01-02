import { GetStaticProps } from 'next';
import React, { FC } from 'react';
import Layout from '../components/layout';
import Navbar from '../components/navbar';
import { GeneralSiteProps } from '../const';

const Concerts: FC<GeneralSiteProps> = (props) => {
  return (
    <>
      <h1>Concerts page</h1>
    </>
  )
};

export  const getStaticProps: GetStaticProps<{}> = async ({
  locale,
  locales,
}) => {
  return {
    props: {}, // will be passed to the page component as props
  }
}

export default Concerts;
