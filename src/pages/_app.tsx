import '@/styles/modern.scss' // Main stylesheet
import '@/styles/button-fix.css' // Button fixes
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
