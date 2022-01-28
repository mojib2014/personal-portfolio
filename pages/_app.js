import "@/styles/tailwind.css";
import "@/styles/globals.css";
import "@/styles/prism.css";

import { useEffect } from "react";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import smoothScroll from "smoothscroll-polyfill";
import siteMetadata from "@/data/siteMetadata";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    smoothScroll.polyfill();
  }, []);
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
