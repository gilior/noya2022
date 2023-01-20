import { FC } from "react"
import { GeneralSiteProps } from "../const"
import Navbar from "./navbar";
import Social from "./social";
import styles from "../styles/menu.module.css"
import { DesktopContainer, MobileContainer } from "../layout";
import NavbarMobile from "./navbar.mobile";

const MenuPanel: FC<GeneralSiteProps> = (props) => {
    return (
      <>
      <DesktopContainer>

<div className={styles.menuPanel}>
<Navbar {...props}></Navbar>
  <Social></Social>
</div>       
</DesktopContainer>
<MobileContainer>
<NavbarMobile {...props}></NavbarMobile>

</MobileContainer>
      </>

      )
}


  export default MenuPanel;
