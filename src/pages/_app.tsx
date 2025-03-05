import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'


export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Component {...pageProps} />
    <GoogleTagManager gtmId="GTM-5S4667XS" />
    <GoogleAnalytics gaId="G-D0833WSE5N" />
  </>
}
