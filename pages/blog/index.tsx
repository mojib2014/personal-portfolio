import {GetStaticProps} from 'next'
import BlogLayout from '@layouts/BlogLayout'
import {getAllFilesFrontMatter} from '@lib/mdx'
import {FrontMatterTypes} from '../../types/index'

interface Props {
  posts: FrontMatterTypes[]
}

const Home = ({posts}: Props) => {
  return <BlogLayout items={posts} />
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllFilesFrontMatter('blog')
  return {
    props: {posts},
  }
}

export default Home
