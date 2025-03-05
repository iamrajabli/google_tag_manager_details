import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'


export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Component {...pageProps} />
    <GoogleTagManager gtmId="GTM-5S4667XS" />
    <GoogleAnalytics gaId="G-KMM12Q8YPC" />

    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5S4667XS"
          height="0" width="0" style={{display:"none",visibility:"hidden"}}></iframe></noscript>
  </>
}
