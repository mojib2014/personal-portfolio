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
        className="mr-3 text-sm font-medium uppercase text-blue-500 hover:text-blue-700"
      >
        {tag && tag.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
