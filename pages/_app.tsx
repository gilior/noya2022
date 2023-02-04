import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React, { useEffect } from 'react';
import { appWithTranslation } from 'next-i18next'

 const App=({ Component, pageProps }: AppProps)=> {
  useEffect(() => {
    document.body.style.direction=`${pageProps.locale == 'en' ? "ltr" : 'rtl'}`;
  });
  return (
    <>
      <Component {...pageProps} />
    </>

  )
}
export default appWithTranslation(App)
