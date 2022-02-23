import {FC, cloneElement, Children} from 'react'
import Link from 'next/link'
import {withRouter, NextRouter} from 'next/router'

interface WithRouterProps {
  router: NextRouter
  children: any
  href: string
  as?: string
}

interface MyComponentProps extends WithRouterProps {}

const ActiveLink: FC<MyComponentProps> = ({
  router,
  children,
  href,
  ...rest
}) => {
  return (
    <Link href={href} {...rest}>
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
