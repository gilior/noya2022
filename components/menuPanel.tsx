import { FC } from "react"
import { GeneralSiteProps } from "../const"
import Navbar from "./navbar";
import Social from "./social";
import styles from "../styles/menu.module.css"
import NavbarMobile from "./navbar.mobile";
import styled from 'styled-components';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import { useEffect, useState } from 'react'
import Title from "./title";

const MenuPanel: FC<GeneralSiteProps> = (props) => {
  const [isMobileDevice, setIsMobileDevice] = useState(false)
  useEffect(() => setIsMobileDevice(isMobile))

  return (
    <>
      {!isMobileDevice &&
      <div className={styles['top-bar']}>
      <Title {...props}></Title>
      <div className={styles.seperator}>
        <hr></hr>
      </div>
       <div className={styles.menuPanel}>
          <Navbar {...props}></Navbar>
          <Social addLang={true} generalSiteProps={props}></Social>
        </div>
      </div>
       
      }
      {isMobileDevice &&
        <NavbarMobile {...props}></NavbarMobile>
      }
    </>

  )
}


export default MenuPanel;
