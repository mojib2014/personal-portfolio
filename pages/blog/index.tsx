import {FC} from 'react'
import {useState} from 'react'
import {GetStaticProps, NextPage} from 'next'
import _ from 'lodash'
import BlogLayout from '@/layouts/BlogLayout'
import {getAllFilesFrontMatter} from '@/lib/mdx'
import {paginate} from '@/lib/utils/paginate'
import {FrontMatterInterface} from 'types/frontMatter'

const PAGE_SIZE = 4

interface Props {
  posts: FrontMatterInterface[]
}

const Home: FC<NextPage & Props> = ({posts}) => {
  const [query, setQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  let filtered = posts

  if (currentPage > Math.ceil(filtered!.length / PAGE_SIZE)) setCurrentPage(1)

  if (currentPage < 1) setCurrentPage(1)

  const handleChange = (event: any) => {
    setQuery(event?.target?.value)
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const handleNext = () => {
    setCurrentPage(currentPage + 1)
  }

  const handlePrevious = () => {
    setCurrentPage(currentPage - 1)
  }

  if (query)
    filtered = posts?.filter(
      ({title, summary, tags}) =>
        title +
        summary +
        tags.join(' ').toLowerCase().includes(query.toLowerCase()),
    )
  const displayPosts = paginate(filtered, currentPage, PAGE_SIZE)

  return (
    <BlogLayout
      posts={displayPosts}
      itemsCount={filtered.length}
      pageSize={PAGE_SIZE}
      currentPage={currentPage}
      onPageChange={handlePageChange}
      onNext={handleNext}
      onPrevious={handlePrevious}
      query={query}
      onQueryChange={handleChange}
    />
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllFilesFrontMatter('blog')
  return {
    props: {posts},
  }
}

export default Home
