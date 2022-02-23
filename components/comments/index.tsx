import {FC} from 'react'
import dynamic from 'next/dynamic'
import siteMetadata from '@data/siteMetadata'
import {FrontMatterTypes} from '../../types/index'

const UtterancesComponent = dynamic(
  () => {
    return import('@components/comments/Utterances')
  },
  {ssr: false},
)
const GiscusComponent = dynamic(
  () => {
    return import('@components/comments/Giscus')
  },
  {ssr: false},
)
const DisqusComponent = dynamic(
  () => {
    return import('@components/comments/Disqus')
  },
  {ssr: false},
)

type Props = {
  frontMatter: FrontMatterTypes
}
const Comments: FC<Props> = ({frontMatter}) => {
  let term
  switch (
    siteMetadata.comment.giscusConfig.mapping ||
    siteMetadata.comment.utterancesConfig.issueTerm
  ) {
    case 'pathname':
      term = frontMatter.slug
      break
    case 'url':
      term = window.location.href
      break
    case 'title':
      term = frontMatter.title
      break
  }
  return (
    <div id="comment">
      {siteMetadata.comment && siteMetadata.comment.provider === 'giscus' && (
        <GiscusComponent mapping={term} />
      )}
      {siteMetadata.comment &&
        siteMetadata.comment.provider === 'utterances' && (
          <UtterancesComponent issueTerm={term} />
        )}
      {siteMetadata.comment && siteMetadata.comment.provider === 'disqus' && (
        <DisqusComponent frontMatter={frontMatter} />
      )}
    </div>
  )
}

export default Comments
