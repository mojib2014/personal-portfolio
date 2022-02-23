import {FC} from 'react'
import Link, {LinkProps} from 'next/link'
import {NextRouter} from 'next/router'

interface Props extends LinkProps {
  router?: NextRouter
}

const SubNav: FC<Props> = ({router}) => {
  return (
    <div className="sub-header">
      <ul className="flex items-center gap-5">
        <li>
          <Link href="/blog">
            <a className="">Blog</a>
          </Link>
        </li>
        <li>{router && router.asPath}</li>
      </ul>
    </div>
  )
}

export default SubNav
