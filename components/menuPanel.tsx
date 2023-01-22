import { FC } from "react"
import { GeneralSiteProps } from "../const"
import Navbar from "./navbar";
import Social from "./social";
import styles from "../styles/menu.module.css"
import NavbarMobile from "./navbar.mobile";
import styled from 'styled-components';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import { useEffect, useState } from 'react'


export const DesktopContainer = styled.div`
  @media screen and (min-width: 1024px) {
display: none !important;
  }
`;
export const MobileContainer = styled.div`
  @media screen and (max-width: 1023px) {
display: none !important;
  }
`;
const MenuPanel: FC<GeneralSiteProps> = (props) => {
  const [isMobileDevice, setIsMobileDevice] = useState(false)
  useEffect(() => setIsMobileDevice(isMobile))

  return (
    <>
      {!isMobileDevice &&
        <div className={styles.menuPanel}>
          <Navbar {...props}></Navbar>
          <Social></Social>
        </div>
      }
      {isMobileDevice &&
        <NavbarMobile {...props}></NavbarMobile>
      }
    </>

  )
}


export default MenuPanel;
