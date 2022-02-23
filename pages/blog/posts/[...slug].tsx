import {GetStaticProps, GetStaticPaths} from 'next'
import fs from 'fs'
import PageTitle from '@components/PageTitle'
import generateRss from '@lib/generate-rss'
import {MDXLayoutRenderer} from '@components/MDXComponents'
import {
  formatSlug,
  getAllFilesFrontMatter,
  getFileBySlug,
  getFiles,
} from '@lib/mdx'
import {ParsedUrlQuery} from 'querystring'
import {
  AuthorTypes,
  FrontMatterTypes,
  NextPrevTypes,
  PostTypes,
} from '../../../types/index'

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
  const authorPromise = authorList.map(async author => {
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
  post: PostTypes
  authorDetails: AuthorTypes
  prev: NextPrevTypes
  next: NextPrevTypes
}

const Blog = ({post, authorDetails, prev, next}: Props) => {
  const {mdxSource, toc, frontMatter} = post

  return (
    <>
      {frontMatter?.draft !== true ? (
        <MDXLayoutRenderer
          layout={frontMatter?.layout || DEFAULT_LAYOUT}
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
