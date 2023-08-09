import Script from 'next/script'
import '../styles/globals.css'
import React from 'react'

type AppLayoutProps = {
  Component: React.FC
  pageProps: any
}

function MyApp({ Component, pageProps }: AppLayoutProps) {
  return (
    <>
      <Component {...pageProps} />
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-LBN817RPZP" />
      <Script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-LBN817RPZP');
        `}
      </Script>
    </>
  )
}

export default MyApp