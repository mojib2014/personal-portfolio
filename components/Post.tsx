import Link from 'next/link'
import Tag from '@/components/Tag'
import formatDate from '@/lib/utils/format-date'
import {FrontMatterTypes} from 'types/index'

interface Props {
  frontMatter: FrontMatterTypes
}

const Post = ({frontMatter}: Props) => {
  const {title, slug, summary, date, tags} = frontMatter
  return (
    <div className="border-gray mb-4 w-full border p-2">
      <ul className="meta mb-3 flex items-center justify-between">
        <li className="text-gray-300">
          <dl>
            <dt className="sr-only">Published on</dt>
            <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
              {date && (
                <time dateTime={date.toDateString()}>
                  {date && formatDate(date)}
                </time>
              )}
            </dd>
          </dl>
        </li>
      </ul>
      <Link as={`/blog/posts/${slug}`} href="/blog/posts/[...slug]">
        <a>
          <div className="card-body">
            <h2 className="text-1xl font-bold md:text-2xl">{title}</h2>
            <p className="py-3 text-[1.1rem] tracking-wide">{summary}</p>
          </div>
        </a>
      </Link>
      {tags && tags.map(tag => <Tag key={tag} tag={tag} />)}
    </div>
  )
}

export default Post
