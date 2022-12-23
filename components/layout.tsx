import React, { FC } from 'react';
import styles from '../styles/Home.module.css'
import Head from 'next/head'

import Navbar from './navbar'
import Footer from './footer'
const Layout: FC<any> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
      
      <main>{children}</main>
       </main>
      <Footer />

    
    </>
  )
};

export default Layout;
