import {useMemo} from 'react'
import {getMDXComponent} from 'mdx-bundler/client'
import Image from './Image'
import CustomLink from './Link'
import TOCInline from './TOCInline'
import Pre from './Pre'
import {BlogNewsLetterForm} from './NewsLetterForm'

interface MDXProps {
  [key: string]: any
}

export const MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  BlogNewsletterForm: BlogNewsLetterForm,
  wrapper: ({components, layout, ...rest}: MDXProps) => {
    const Layout = require(`../layouts/${layout}`).default
    return <Layout {...rest} />
  },
}

interface Props {
  [key: string]: any
}

export const MDXLayoutRenderer = ({layout, mdxSource, ...rest}: Props) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])

  return <MDXLayout layout={layout} components={MDXComponents} {...rest} />
}
