export interface FrontMatterTypes {
  title: string
  summary: string
  slug: string
  fileName: string
  date: Date
  tags: string[]
  draft: boolean
  authors: {
    [key: string]: any
  }
  [key: string]: any
}
