import { cloneElement, Children } from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'

const ActiveLink = ({ router, children, ...rest }) => {
  return (
    <Link {...rest}>
      {cloneElement(Children.only(children), {
        className:
          router.pathname === /\// || router.asPath === rest.href
            ? `active ${children.props.className}`
            : children.props.className,
      })}
    </Link>
  )
}

export default withRouter(ActiveLink)
