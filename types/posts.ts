import {FrontMatterTypes} from './frontMatter'

export interface PostType {
  mdxSource: string
  frontMatter: FrontMatterTypes
  toc: {
    depth: number
    fromHeading: number
    toHeading: number
    asDisclosure: boolean
    exclude: string
    value: string
  }
}
