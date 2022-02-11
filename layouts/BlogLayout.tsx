import {useState, ChangeEventHandler, ChangeEvent} from 'react'
import {TagSEO} from '@/components/SEO'
import SectionContainer from '@/components/SectionContainer'
import Post from '@/components/Post'
import Search from '@/components/Search'
import PageTitle from '@/components/PageTitle'
import siteMetadata from '@/data/siteMetadata'
import Pagination from '@/components/Pagination'
import {FrontMatterTypes} from '@/types/index'
import {paginate} from '@/lib/utils/paginate'

interface Props {
  items: FrontMatterTypes[]
  tag?: string
}

const PAGE_SIZE = 4

const BlogLayout = ({items, tag}: Props) => {
  const [query, setQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  let filtered = items

  if (currentPage > Math.ceil(filtered.length / PAGE_SIZE)) setCurrentPage(1)

  if (currentPage < 1) setCurrentPage(1)

  const handleChange: ChangeEventHandler = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    setQuery(event.target.value)
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

  if (query) {
    filtered = items.filter(frontMatter => {
      if (frontMatter.title && frontMatter.summary && frontMatter.tags) {
        const searchContent =
          frontMatter?.title +
          frontMatter?.summary +
          frontMatter?.tags.join(' ')
        return searchContent.toLowerCase().includes(query.toLowerCase())
      }
    })
  }

  const displayPosts = paginate(filtered, currentPage, PAGE_SIZE)
  // Capitalize first letter and convert space to dash
  const title = tag && tag[0].toUpperCase() + tag.split(' ').join('-').slice(1)

  return (
    <>
      <TagSEO
        title={`Blog | ${siteMetadata.author} | All Posts`}
        description={`${tag} tags - ${siteMetadata.author}`}
      />
      <div className="divide-y pt-section-pt pb-section-pb">
        <SectionContainer>
          <div className="space-y-2 pt-6 pb-8 md:space-y-5">
            <PageTitle>{title ? title : 'All Posts'}</PageTitle>
            <Search query={query} onChange={handleChange} />
          </div>
          <ul>
            {!displayPosts?.length && 'No posts found.'}
            {displayPosts?.map(frontMatter => (
              <Post key={frontMatter?.title} frontMatter={frontMatter} />
            ))}
          </ul>
          <Pagination
            currentPage={currentPage}
            itemsCount={filtered.length}
            pageSize={PAGE_SIZE}
            onPageChange={handlePageChange}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        </SectionContainer>
      </div>
    </>
  )
}

export default BlogLayout
