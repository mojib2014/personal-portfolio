import React, { cloneElement, Children } from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'

const ActiveLink = ({ router, children, href, ...rest }) => {
  return (
    <Link href={href} {...rest}>
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
