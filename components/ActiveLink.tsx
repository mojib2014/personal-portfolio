import {FC, Children, cloneElement, MouseEventHandler} from 'react'
import Link from 'next/link'
import {withRouter, NextRouter} from 'next/router'

interface WithRouterProps {
  router: NextRouter
  children: any
  [x: string]: any
}

interface MyComponentProps extends WithRouterProps {}

const ActiveLink: FC<MyComponentProps> = ({router, children, ...rest}) => {
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
