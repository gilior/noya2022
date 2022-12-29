import { FC } from "react"
import { NavBarProps } from "../const"
import Navbar from "./navbar";
import Social from "./social";

const MenuPanel: FC<NavBarProps> = (props) => {
    return (
        <>
        <div className="menu-panel">
        <Navbar {...props}></Navbar>
          <Social></Social>
        </div>
         
         
    
        </>
      )
}


  export default MenuPanel;
