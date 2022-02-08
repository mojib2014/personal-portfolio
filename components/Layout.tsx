import React, {FC} from 'react'
import {useRouter} from 'next/router'
import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'
import siteMetadata from '@/data/siteMetadata'
import {LayoutType} from 'types/layout'

const Layout: FC<LayoutType> = ({
  title,
  description,
  author,
  date,
  lastmod,
  ogType,
  postTitle,
  ogImage,
  permaLink,
  siteName,
  twImage,
  children,
}) => {
  const router = useRouter()
  const publishedAt = date && new Date(date).toISOString()
  const modifiedAt =
    lastmod || (date && new Date(lastmod || date).toISOString())
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': siteMetadata.siteUrl,
    },
    headline: title,
    image: siteMetadata.socialBanner,
    datePublished: publishedAt,
    dateModified: modifiedAt,
    author: author,
    publisher: {
      '@type': 'Organization',
      name: siteMetadata.author,
      logo: {
        '@type': 'ImageObject',
        url: `${siteMetadata.siteUrl}${siteMetadata.siteLogo}`,
      },
    },
    description: description,
  }
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="robots" content="follow, index" />
        <meta name="author" content={author} />
        <meta name="description" content={description} />
        <meta property="og:type" content={ogType} />
        <meta property="og:title" content={postTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={permaLink} />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:image" content={ogImage} key={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={siteMetadata.twitter} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={twImage} />
        {date && (
          <meta property="article:published_time" content={publishedAt} />
        )}
        {lastmod && (
          <meta property="article:modified_time" content={modifiedAt} />
        )}
        <link
          rel="canonical"
          href={`${siteMetadata.siteUrl}${router.asPath}`}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData, null, 2),
          }}
        />
      </Head>
      <Header />
      <main className="mb-auto h-full w-full">{children}</main>
      <Footer />
    </>
  )
}
export default Layout
