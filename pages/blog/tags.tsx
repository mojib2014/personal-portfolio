import React, {FC} from 'react'
import {GetStaticProps, NextPage} from 'next'
import Link from '@/components/Link'
import {PageSEO} from '@/components/SEO'
import SectionContainer from '@/components/SectionContainer'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import kebabCase from '@/lib/utils/kebabCase'
import {getAllTags} from '@/lib/tags'
import {TagType} from 'types/tags'

export const getStaticProps: GetStaticProps = async () => {
  const tags = await getAllTags('blog')
  return {props: {tags}}
}

type Props = {
  tags: TagType
}

const Tags: FC<NextPage & Props> = ({tags}) => {
  const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a])
  return (
    <>
      <PageSEO
        title={`Blog | Tags - ${siteMetadata.author}`}
        description="Topics I blog about"
      />
      <div className="flex flex-col items-start justify-start divide-y divide-gray-200 py-section-y dark:divide-gray-700 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0">
        <SectionContainer>
          <div className="space-x-2 pt-6 pb-8 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:px-6 md:text-6xl md:leading-14">
              Tags
            </h1>
          </div>
          <div className="flex max-w-lg flex-wrap">
            {Object.keys(tags).length === 0 && 'No tags found.'}
            {sortedTags.map(t => {
              return (
                <div key={t} className="mt-2 mb-2 mr-5">
                  <Tag tag={t} />
                  <Link
                    href={`/tags/${kebabCase(t)}`}
                    className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300"
                  >
                    {` (${tags[t]})`}
                  </Link>
                </div>
              )
            })}
          </div>
        </SectionContainer>
      </div>
    </>
  )
}

export default Tags
