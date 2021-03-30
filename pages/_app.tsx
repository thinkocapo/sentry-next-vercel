import '../styles/global.css'
import { AppProps } from 'next/app'

/*
https://nextjs.org/learn/basics/assets-metadata-css/global-styles
This App component is the top-level component which will be common across all the different pages.
You can use this App component to keep state when navigating between pages, for example.
*/

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}