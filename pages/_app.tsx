import "@/styles/globals.css";
import "@/styles/tailwind.css";
import "@/styles/prism.css";

import "@fontsource/inter/variable-full.css";

import { AppProps } from "next/app";
import Head from "next/head";
import Layout from "@/components/Layout";
import { ThemeProvider } from "next-themes";

import siteMetadata from "@/data/siteMetadata";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
