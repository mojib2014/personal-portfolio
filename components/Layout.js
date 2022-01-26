import { useEffect } from "react";
import { highlightAll } from "prismjs";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

export default function Layout({
  title,
  description,
  author,
  ogType,
  postTitle,
  ogImage,
  permaLink,
  siteName,
  children,
}) {
  useEffect(() => {
    highlightAll();
  }, []);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content={author} />
        <meta name="description" content={description} />
        <meta property="og:type" content={ogType} />
        <meta property="og:title" content={postTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={permaLink} />
        <meta property="og:site_name" content={siteName} />
      </Head>
      <Header />
      <main className="main-content">{children}</main>
      <Footer />
    </>
  );
}
