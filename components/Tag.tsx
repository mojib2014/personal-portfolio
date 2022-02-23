import Link from 'next/link'
import kebabCase from '@lib/utils/kebabCase'
import {FC} from 'react'

interface Props {
  tag: string
}

const Tag: FC<Props> = ({tag, ...rest}) => {
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
