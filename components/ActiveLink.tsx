import {Children, cloneElement} from 'react'
import Link from 'next/link'
import {withRouter, NextRouter} from 'next/router'

interface WithRouterProps {
  router: NextRouter
  children: any
  [x: string]: any
}

interface MyComponentProps extends WithRouterProps {}

const ActiveLink = ({router, children, ...rest}: MyComponentProps) => {
  return (
    <Link href={rest.href} {...rest}>
      {cloneElement(Children.only(children), {
        className:
          // @ts-expect-error
          router.pathname === /\// || router.asPath === rest.href
            ? `active ${children.props.className}`
            : children.props.className,
      })}
    </Link>
  )
}

export default withRouter(ActiveLink)
