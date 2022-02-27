import fs from 'fs'
import path from 'path'
import BlogLayout from '@layouts/BlogLayout'
import generateRss from '@lib/generate-rss'
import { getAllFilesFrontMatter } from '@lib/mdx'
import { getAllTags } from '@lib/tags'
import kebabCase from '@lib/utils/kebabCase'

const root = process.cwd()

const Tag = ({ items, tag }) => {
  return <BlogLayout items={items} tag={tag} />
}

export const getStaticPaths = async () => {
  const tags = await getAllTags('blog')

  return {
    paths: Object.keys(tags).map((tag) => ({
      params: {
        tag,
      },
    })),
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const { tag } = params

  const allPosts = await getAllFilesFrontMatter('blog')
  const filteredPosts = allPosts.filter(
    (post) => post.draft !== true && post.tags.map((t) => kebabCase(t)).includes(tag)
  )

  // rss
  if (filteredPosts.length > 0) {
    const rss = generateRss(filteredPosts, `tags/${tag}/feed.xml`)
    const rssPath = path.join(root, 'public', 'tags', tag)
    fs.mkdirSync(rssPath, { recursive: true })
    fs.writeFileSync(path.join(rssPath, 'feed.xml'), rss)
  }

  return { props: { items: filteredPosts, tag } }
}

export default Tag
