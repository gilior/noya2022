import { Inter } from '@next/font/google'
import { GetStaticProps } from 'next'
import { FC } from 'react'
import { GeneralSiteProps } from '../const'

const inter = Inter({ subsets: ['latin'] })

const Lectures: FC<GeneralSiteProps> = (props) => {


  
  return (
    <>
      <h1>Lectures page</h1>
    </>
  )
}

export  const getStaticProps: GetStaticProps<{}> = async ({
  locale,
  locales,
}) => {
  // const res = await fetch(`./assets/${locale}/nav.json`)
  return {
    props: {}, // will be passed to the page component as props
  }
}


export default Lectures;

