import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

interface Props {
  tag: string
  [key: string]: any
}

const Tag = ({tag, ...rest}: Props) => {
  return (
    <Link href={`/tags/${kebabCase(tag)}`}>
      <a
        {...rest}
        className="mr-3 text-sm font-medium uppercase text-sky-500 hover:text-sky-700 dark:hover:text-sky-400"
      >
        {tag.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
