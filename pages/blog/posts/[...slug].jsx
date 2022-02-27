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

const DEFAULT_LAYOUT = 'PostLayout'

export const getStaticPaths = async () => {
  const posts = getFiles('blog')
  return {
    paths: posts.map(p => ({
      params: {
        slug: formatSlug(p).split('/'),
      },
    })),
    fallback: false,
  }
}

export const getStaticProps = async context => {
  const {slug} = context.params
  const allPosts = await getAllFilesFrontMatter('blog')

  const post = await getFileBySlug('blog', slug.join('/'))
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

const Blog = ({post, authorDetails, prev, next}) => {
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
