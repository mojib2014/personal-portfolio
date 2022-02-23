import * as React from 'react'

import siteMetadata from '@data/siteMetadata'
import {FrontMatterTypes} from '../../types/index'

type Props = {
  frontMatter: FrontMatterTypes
}

const Disqus = ({frontMatter}: Props) => {
  const [enableLoadComments, setEnabledLoadComments] = React.useState(true)

  const COMMENTS_ID = 'disqus_thread'

  function LoadComments() {
    setEnabledLoadComments(false)

    // @ts-ignore: Unreachable code error
    window.disqus_config = function () {
      // @ts-ignore: Unreachable code error
      this.page.url = window.location.href
      // @ts-expect-error: Let's ignore a compile error like this unreachable code
      this.page.identifier = frontMatter.slug
    }
    // @ts-expect-error: Let's ignore a compile error like this unreachable code
    if (window.DISQUS === undefined) {
      const script = document.createElement('script')
      script.src =
        'https://' +
        siteMetadata.comment.disqusConfig.shortname +
        '.disqus.com/embed.js'
      // @ts-expect-error: Let's ignore a compile error like this unreachable code
      script.setAttribute('data-timestamp', +new Date())
      script.setAttribute('crossorigin', 'anonymous')
      script.async = true
      document.body.appendChild(script)
    } else {
      // @ts-expect-error: Let's ignore a compile error like this unreachable code
      window.DISQUS.reset({reload: true})
    }
  }

  return (
    <div className="pt-6 pb-6 text-center text-gray-700 dark:text-gray-300">
      {enableLoadComments && (
        <button onClick={LoadComments}>Load Comments</button>
      )}
      <div className="disqus-frame" id={COMMENTS_ID} />
    </div>
  )
}

export default Disqus
