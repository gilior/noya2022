import Link from "next/link"
import { FC } from "react"
import Image from 'next/image';
import styles from '../styles/social.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faWikipediaW } from '@fortawesome/free-brands-svg-icons'



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
        <div>
             <ul className={styles.horizontalMenu}>
            <li>
            <a href='ynet.co.il'>
                <FontAwesomeIcon icon={faYoutube} />
            </a>
            </li>
           <li>
           <a href='ynet.co.il'>
                <FontAwesomeIcon icon={faFacebook} />
            </a>
           </li>
           <li>
           <a href='ynet.co.il'>
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
           </li>
           <li>
           <a href='ynet.co.il'>
                <FontAwesomeIcon icon={faWikipediaW} />
            </a>
           </li>
           
        </ul>
        </div>
       
    )
}
export default Social