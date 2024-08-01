import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import CookieNotice from './CookieNotice'

export default function Layout({ children, lang, setLang, t, pageType }) {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>CSSM Group</title>
      {pageType === 'main' ? (
        <link rel="stylesheet" href="/styles/globals.css" />
      ) : (
        <link rel="stylesheet" href="/styles/article.css" />
      )}
    </Head>

    {children}

    <CookieNotice t={t} />
  )
}