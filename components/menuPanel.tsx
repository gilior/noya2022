import { FC } from "react"
import { GeneralSiteProps } from "../const"
import Navbar from "./navbar";
import Social from "./social";
import styles from "../styles/menu.module.css"

const MenuPanel: FC<GeneralSiteProps> = (props) => {
    return (
        <>
        <div className={styles.menuPanel}>
        <Navbar {...props}></Navbar>
          <Social></Social>
        </div>
         
         
    
        </>
      )
}


  export default MenuPanel;
