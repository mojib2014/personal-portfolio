import Link from 'next/link'

const CustomLink = props => {
  const {href, ...rest} = props
  const internalLink = href.toString().startsWith('/')
  const anchorLink = href.toString().startsWith('/#')

  if (internalLink)
    return (
      <Link href={href}>
        <a {...rest} />
      </Link>
    )

  if (anchorLink) return <a href={href?.toString()} {...rest} />

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href?.toString()}
      {...rest}
    />
  )
}

export default CustomLink
