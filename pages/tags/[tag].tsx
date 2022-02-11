import fs from 'fs'
import path from 'path'
import {GetStaticPaths, GetStaticProps} from 'next'
import BlogLayout from '@/layouts/BlogLayout'
import generateRss from '@/lib/generate-rss'
import {getAllFilesFrontMatter} from '@/lib/mdx'
import {getAllTags} from '@/lib/tags'
import kebabCase from '@/lib/utils/kebabCase'
import {FrontMatterTypes} from '@/types/index'
import {ParsedUrlQuery} from 'querystring'

const root = process.cwd()

type Props = {
  items: FrontMatterTypes[]
  tag: string
}

const Tag = ({items, tag}: Props) => {
  return <BlogLayout items={items} tag={tag} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const tags = await getAllTags('blog')

  return {
    paths: Object.keys(tags).map(tag => ({
      params: {
        tag,
      },
    })),
    fallback: false,
  }
}

interface Params extends ParsedUrlQuery {
  tag: string
}

export const getStaticProps: GetStaticProps = async context => {
  const {tag} = context.params as Params

  const allPosts = await getAllFilesFrontMatter('blog')
  const filteredPosts = allPosts.filter(
    post =>
      post.draft !== true &&
      post.tags.map((t: string) => kebabCase(t)).includes(tag),
  )

  // rss
  if (filteredPosts.length > 0) {
    const rss = generateRss(filteredPosts, `tags/${tag}/feed.xml`)
    const rssPath = path.join(root, 'public', 'tags', tag)
    fs.mkdirSync(rssPath, {recursive: true})
    fs.writeFileSync(path.join(rssPath, 'feed.xml'), rss)
  }

  return {props: {items: filteredPosts, tag}}
}

export default Tag
