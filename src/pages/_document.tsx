import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />

        <GoogleTagManager gtmId="GTM-5S4667XS" />
        <GoogleAnalytics gaId="G-KMM12Q8YPC" />

        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5S4667XS"
          height="0" width="0" style={{display:"none",visibility:"hidden"}}></iframe></noscript>
      </body>
    </Html>
  );
}
