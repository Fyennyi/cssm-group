import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  if (router.pathname === '/article') {
    import('../../styles/article.css')
  } else {
    import('../styles/globals.css')
  }

  return <Component {...pageProps} />
}

export default MyApp