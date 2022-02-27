import BlogLayout from '@layouts/BlogLayout'
import { getAllFilesFrontMatter } from '@lib/mdx'

const Home = ({ posts }) => {
  return <BlogLayout items={posts} />
}

export const getStaticProps = async () => {
  const posts = await getAllFilesFrontMatter('blog')
  return {
    props: { posts },
  }
}

export default Home
