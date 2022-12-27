import Link from "next/link"
import { FC } from "react"
import Image from 'next/image';
import styles from '../styles/social.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'



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
        <ul className={styles.horizontalMenu}>
            <a href='ynet.co.il'>
                <FontAwesomeIcon icon={faYoutube} className="hover:text-red-500" />;
            </a>
        </ul>
    )
}
export default Social