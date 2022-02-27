import Link from 'next/link'

const SubNav = ({ router }) => {
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
