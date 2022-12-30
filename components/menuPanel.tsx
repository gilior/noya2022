import { FC } from "react"
import { NavBarProps } from "../const"
import Navbar from "./navbar";
import Social from "./social";
import styles from "../styles/menu.module.css"

const MenuPanel: FC<NavBarProps> = (props) => {
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
