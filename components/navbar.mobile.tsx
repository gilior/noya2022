import React, { FC, useRef } from 'react';
import Link from 'next/link'
import styles from '../styles/navbar.mobile.module.css'
import { useRouter } from 'next/router'
import { GeneralSiteProps } from '../const';
import Social from './social';
import { useTranslation } from 'next-i18next'

const NavbarMobile: FC<GeneralSiteProps> = (props) => {
  const checkboxref = useRef(null);
  const { t } = useTranslation('common')

  const router = useRouter()
  const { pathname, asPath, query } = router
    const listItems = props.menuItems?.map((menuItem,index) =>
    <li  key={menuItem}>
      <Link  
            onClick={() =>{ router.push({ pathname, query }, asPath, { locale: props.locale == 'he' ? 'en' : 'he' });
            const chk=checkboxref.current;
            chk.checked=false;
           }
             }
      key={index}
        href={{
          pathname: '',
          query: { page: menuItem },
        }}
        
        
      >
        {t(menuItem)}

      </Link>
    </li>
  );
  return (
    <>
 <section class="top-nav">
    <div class="logo-title">
      {props.title}
    </div>
    <div>
      <Social addLang={true} generalSiteProps={props} />
    </div>
    <input ref={checkboxref} id="menu-toggle" type="checkbox" />
    <label class="menu-button-container" for="menu-toggle">
    <div class="menu-button"></div>
  </label>
    <ul class="menu">
      {listItems}
    </ul>
  </section>

</>
  );
};

export default NavbarMobile;



