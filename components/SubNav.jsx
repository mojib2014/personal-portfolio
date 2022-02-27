import Link from 'next/link'
import {NextRouter} from 'next/router'

const SubNav = ({router}) => {
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
