import Head from 'next/head'
import CookieNotice from './CookieNotice'

export default function Layout({ children, t }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {children}

      <CookieNotice t={t} />
    </>
  )
}