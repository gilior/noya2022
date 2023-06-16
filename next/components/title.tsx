import Link from "next/link"
import { FC } from "react"
import Image from 'next/image';
import styles from '../styles/title.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faWikipediaW } from '@fortawesome/free-brands-svg-icons'
import Script from 'next/script'
import { GeneralSiteProps } from "../const";
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

const Title: FC<GeneralSiteProps> = (props) => {
    const { t } = useTranslation('common')

    const router = useRouter()
    const { pathname, asPath, query } = router


    return (
        <div className={styles['title-wrapper']}>
            <div>
            <p>{t('noya schleien')}</p>
            </div>
            <div>
            <Link href="#"
      onClick={() => router.push({ pathname, query }, asPath, { locale: props.locale == 'he' ? 'en' : 'he' })
      }
    >
      {props.locale == 'he' ? 'en' : 'עב'}
    </Link>
            </div>
        </div>


    )
}
export default Title