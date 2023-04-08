import { Inter } from '@next/font/google'
import { GetStaticProps } from 'next'
import { FC } from 'react'
import { GeneralSiteProps } from '../const'
import BioPageMobile from 'components/pages/bio/bio.mobile'

const inter = Inter({ subsets: ['latin'] })

const Bio: FC<GeneralSiteProps> = (props) => {


  
  return (
    <> 
     {props.isMobile && <BioPageMobile {...props} ></BioPageMobile>}
     {!props.isMobile && <h1>desktop</h1>}
    </>
 
  )
}
export default Bio;

