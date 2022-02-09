import {FC} from 'react'
import {GetStaticProps, GetStaticPaths, NextPage} from 'next'
import fs from 'fs'
import PageTitle from '@/components/PageTitle'
import generateRss from '@/lib/generate-rss'
import {MDXLayoutRenderer} from '@/components/MDXComponents'
import {
  formatSlug,
  getAllFilesFrontMatter,
  getFileBySlug,
  getFiles,
} from '@/lib/mdx'
import {ParsedUrlQuery} from 'querystring'
import {FrontMatterTypes} from '@/types/index'

const DEFAULT_LAYOUT = 'PostLayout'

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getFiles('blog')
  return {
    paths: posts.map((p: string) => ({
      params: {
        slug: formatSlug(p).split('/'),
      },
    })),
    fallback: false,
  }
}

interface Params extends ParsedUrlQuery {
  slug: string[]
}

export const getStaticProps: GetStaticProps = async context => {
  const {slug} = context.params as Params
  const allPosts = await getAllFilesFrontMatter('blog')

  const post: FrontMatterTypes = await getFileBySlug('blog', slug.join('/'))
  const authorList = post.frontMatter.authors || ['default']
  //@ts-expect-error: Let's ignore a compile error like this unreachable code
  const authorPromise = authorList.map(async author => {
    //@ts-expect-error: Let's ignore a compile error like this unreachable code
    const authorResults = await getFileBySlug('authors', [author])
    return authorResults.frontMatter
  })
  const authorDetails = await Promise.all(authorPromise)

  // rss
  if (allPosts.length > 0) {
    const rss = generateRss(allPosts)
    fs.writeFileSync('./public/feed.xml', rss)
  }

  return {props: {post, authorDetails}}
}

interface Props {
  [key: string]: any
}

const Blog: FC<NextPage & Props> = ({post, authorDetails, prev, next}) => {
  const {mdxSource, toc, frontMatter} = post

  return (
    <>
      {frontMatter.draft !== true ? (
        <MDXLayoutRenderer
          layout={frontMatter.layout || DEFAULT_LAYOUT}
          toc={toc}
          mdxSource={mdxSource}
          frontMatter={frontMatter}
          authorDetails={authorDetails}
          prev={prev}
          next={next}
        />
      ) : (
        <div className="mt-24 text-center">
          <PageTitle>
            Under Construction{' '}
            <span role="img" aria-label="roadwork sign">
              🚧
            </span>
          </PageTitle>
        </div>
      )}
    </>
  )
}

export default Blog
