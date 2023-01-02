import { Html, Head, Main, NextScript } from 'next/document'

export default function Document(props:any) {
  return (
    <Html lang="en">
      <Head />
      <body style={{ direction: props.locale == 'en' ? "ltr" : 'rtl' }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
