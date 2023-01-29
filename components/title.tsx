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
import { GeneralSiteProps } from "../const";

const Title: FC<GeneralSiteProps> = (props) => {



    return (
        <div>
            {props.title}
        </div>


    )
}
export default Title