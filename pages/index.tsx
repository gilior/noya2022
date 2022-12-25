import { Inter } from '@next/font/google'
import { GetStaticProps } from 'next'
import { FC } from 'react'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import { NavBarProps } from '../const'

const inter = Inter({ subsets: ['latin'] })

const Home: FC<NavBarProps> = (props) => {
  return (
    <>
    <Navbar {...props}></Navbar>
      <Layout>
      <h1>Home page</h1>

      </Layout>

    </>
  )
}

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


export default Home;

