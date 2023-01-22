import React, { FC, useRef } from 'react';
import Link from 'next/link'
import styles from '../styles/navbar.mobile.module.css'
import { useRouter } from 'next/router'
import { GeneralSiteProps } from '../const';
import { Chela_One } from '@next/font/google';

const NavbarMobile: FC<GeneralSiteProps> = (props) => {
  const checkboxref = useRef(null);

  const router = useRouter()
  const { pathname, asPath, query } = router
  const listItems = props.menuItems.items.map((item,index) =>
    <li className={styles.item} key={item.key}>
      <Link  
            onClick={() =>{ router.push({ pathname, query }, asPath, { locale: props.locale == 'he' ? 'en' : 'he' });
            const chk=checkboxref.current;
            chk.checked=false;
           }
             }
      key={index}
        href={{
          pathname: '',
          query: { page: item.key },
        }}
        
        
      >
        {item.value}
      </Link>
    </li>
  );
  listItems.push(
    <li className={styles.item}>
    <Link href="#" className={styles.item}
      onClick={() =>{ router.push({ pathname, query }, asPath, { locale: props.locale == 'he' ? 'en' : 'he' });
     const chk=checkboxref.current;
     chk.checked=false;
    }
      }
    >
      {props.locale == 'he' ? 'en' : 'עב'}
    </Link>
  
  </li>
  )
  return (
    <>
   {/* <div className={styles.wrapper}> <ul className={styles.horizontalMenu}>{listItems}</ul></div> */}



  {/* <!-- hamburger --> */}
  <input ref={checkboxref} type="checkbox" id="navi-toggle" className={styles.checkbox} />
  <label  htmlFor="navi-toggle" className={styles.button}>
    <span className={styles.icon}>&nbsp;</span>
  </label>
  <div className={styles.background}>&nbsp;</div>

  {/* <!-- nav --> */}
  <nav className={styles.nav}>

  <ul className={styles.list}>{listItems}</ul>


    {/* <ul className="list">
      <li className="item"> <a className="link"> Link 1 </a> </li>
      <li className="item"> <a className="link"> Link 2 </a> </li>
      <li className="item"> <a className="link"> Link 4 </a> </li>
      <li className="item"> <a className="link"> Link 5 </a> </li>
      <li className="item"> <a className="link"> Link 6 </a> </li>
    </ul> */}
  </nav>
</>
  );
};

export default NavbarMobile;



