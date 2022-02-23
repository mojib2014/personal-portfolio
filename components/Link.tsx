import {FC} from 'react'
import Link, {LinkProps} from 'next/link'

interface Props extends LinkProps {
  children?: React.ReactNode
  className?: string
  title?: string
  rel?: string
}

const CustomLink: FC<Props> = props => {
  const {href, className, ...rest} = props
  const internalLink = href.toString().startsWith('/')
  const anchorLink = href.toString().startsWith('/#')

  if (internalLink)
    return (
      <Link href={href}>
        <a className={className} {...rest} />
      </Link>
    )

  if (anchorLink)
    return <a href={href?.toString()} className={className} {...rest} />

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href?.toString()}
      className={className}
      {...rest}
    />
  )
}

export default CustomLink
