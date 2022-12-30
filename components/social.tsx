import Link from "next/link"
import { FC } from "react"
import Image from 'next/image';
import styles from '../styles/social.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faWikipediaW } from '@fortawesome/free-brands-svg-icons'
import Script from 'next/script'



// ...


const Social: FC<any> = (props) => {
    // const items = props.menuItems.items;
    // const listItems = items.map((item) =>
    //   <li key={item.key}>
    //     <Link
    //       href={{
    //         pathname: '',
    //         query: { page: item.key },
    //       }}
    //     >
    //       {item.value}
    //     </Link>
    //   </li>
    // );


    return (
        <>
            <Script src="https://kit.fontawesome.com/b58762678b.js" crossOrigin="anonymous"></Script>
            <div className={styles.wrapper}>
                <ul className={styles.horizontalMenu}>
                    <li>
                        <a target='_blank' href='https://www.youtube.com/user/noyaschleien'>
                            <i className="fa-brands fa-youtube"></i>
                        </a>
                    </li>
                    <li>
                        <a target='_blank' href='https://www.facebook.com/noya.schleien'>
                            <i className="fa-brands fa-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a target='_blank' href='https://il.linkedin.com/in/noya-schleien-43090352'>
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a target='_blank' href='https://he.wikipedia.org/wiki/%D7%A0%D7%95%D7%99%D7%94_%D7%A9%D7%9C%D7%99%D7%99%D7%9F'>
                            <i className="fa-brands fa-wikipedia-w"></i>
                        </a>
                    </li>

                </ul>
            </div>
        </>


    )
}
export default Social