import React, { FC } from 'react';
import Image from 'next/image'
import styles from 'components/contact/contact.mobile.module.scss'
import LinkComponent from 'components/link/link'
import crash from '../../public/crash.jpeg'
import { GeneralSiteProps } from 'const';
import { useTranslation } from 'next-i18next';
import { BrowserDetails } from './contact.const';

const ContactMobile: FC<GeneralSiteProps> = (props) => {
  const { t } = useTranslation('common');
  async function getBrowserIP() {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    const ip = data.ip;
    return ip;
  }

  function getBrowserDetails(): BrowserDetails {
    let platform = navigator?.userAgentData?.platform || navigator?.platform || 'unknown';

    const { userAgent, appName, appVersion, language } = navigator;
    return {
      userAgent,
      appName,
      appVersion,
      platform,
      language,
    };
  }

  const handleSubmit = async (e) => {
    // Stop the form from submitting and refreshing the page.

    e.preventDefault();

    try {
      const ip = await getBrowserIP();
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        body: JSON.stringify({
          msg: e.target.msg.value, browserDetails: getBrowserDetails(),
          timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          time: new Date().toLocaleString(),
          ip
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={styles['contact-wrap']}>
      <form onSubmit={handleSubmit}>
        <textarea name='msg' required placeholder={t('contact_place_holder')} />
        <br />
        <button type="submit">{t('contact_send')}</button>
      </form>
    </div>


  )
};

export default ContactMobile;
