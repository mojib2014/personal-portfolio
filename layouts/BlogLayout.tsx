import {TagSEO} from '@/components/SEO'
import SectionContainer from '@/components/SectionContainer'
import Post from '@/components/Post'
import Search from '@/components/Search'
import PageTitle from '@/components/PageTitle'
import siteMetadata from '@/data/siteMetadata'
import Pagination from '@/components/Pagination'
import {FrontMatterInterface} from 'types/frontMatter'

interface Props {
  posts: FrontMatterInterface[]
  tag?: string
  query?: string
  onQueryChange?: any
  itemsCount: number
  pageSize: number
  currentPage: number
  onPageChange: any
  onNext: any
  onPrevious: any
}

const BlogLayout = ({
  posts,
  tag,
  query,
  onQueryChange,
  itemsCount,
  pageSize,
  currentPage,
  onPageChange,
  onNext,
  onPrevious,
}: Props) => {
  // Capitalize first letter and convert space to dash
  const title = tag && tag[0].toUpperCase() + tag.split(' ').join('-').slice(1)

  return (
    <>
      <TagSEO
        title={`Blog | ${siteMetadata.author} | All Posts`}
        description={`${tag} tags - ${siteMetadata.author}`}
      />
      <div className="divide-y py-section-y">
        <SectionContainer>
          <div className="space-y-2 pt-6 pb-8 md:space-y-5">
            <PageTitle>{title ? title : 'All Posts'}</PageTitle>
            <Search query={query} onChange={onQueryChange} />
          </div>
          <ul>
            {!posts?.length && 'No posts found.'}
            {posts?.map(frontMatter => (
              <Post key={frontMatter?.slug} frontMatter={frontMatter} />
            ))}
          </ul>
          <Pagination
            currentPage={currentPage}
            itemsCount={itemsCount}
            pageSize={pageSize}
            onPageChange={onPageChange}
            onNext={onNext}
            onPrevious={onPrevious}
          />
        </SectionContainer>
      </div>
    </>
  )
}

export default BlogLayout
