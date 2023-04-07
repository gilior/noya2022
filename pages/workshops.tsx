import { FC } from 'react'
import { GeneralSiteProps } from '../const'
import WorkshopsPageMobile from 'components/pages/workshops/workshops'


const Workshops: FC<GeneralSiteProps> = (props) => {


  
  return (
    <> 
     {props.isMobile && <WorkshopsPageMobile {...props} ></WorkshopsPageMobile>}
     {!props.isMobile && <h1>desktop Workshops</h1>}
    </>
 
  )
}
export default Workshops;

