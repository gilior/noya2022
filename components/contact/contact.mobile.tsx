import React, { FC } from 'react';
import Image from 'next/image'
import styles from 'components/contact/contact.mobile.module.scss'
import LinkComponent from 'components/link/link'
import crash from '../../public/crash.jpeg'
import { GeneralSiteProps } from 'const';
import { useTranslation } from 'next-i18next';

const ContactMobile: FC<GeneralSiteProps> = (props) => {
    const { t } = useTranslation('common')
    const handleSubmit = async (event) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault()
    
        // Get data from the form.
        const data = {
            msg: event.target.msg.value,
        }
    
        // Send the data to the server in JSON format.
        const JSONdata = JSON.stringify(data)
    
        // API endpoint where we send form data.
        const endpoint = '/api/form'
    
        // Form the request for sending data to the server.
        const options = {
          // The method is POST because we are sending data.
          method: 'POST',
          // Tell the server we're sending JSON.
          headers: {
            'Content-Type': 'application/json',
          },
          // Body of the request is the JSON data we created above.
          body: JSONdata,
        }
    
        // Send the form data to our forms API on Vercel and get a response.
        const response = await fetch(endpoint, options)
    
        // Get the response data from server as JSON.
        // If server returns the name submitted, that means the form works.
        const result = await response.json()
        alert(`Is this your full name: ${result.data}`)
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
