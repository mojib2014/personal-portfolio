export interface ReadingTimeTypes {
  text?: string
  minutes?: number
  time?: number
  words?: number
}

export interface AuthorTypes {
  name?: string
  avatar?: string
  occupation?: string
  company?: string
  fileName?: string
  email?: string
  twitter?: string
  linkedin?: string
  github?: string
  readingTime?: ReadingTimeTypes
  slug?: [string]
}

export interface TocTypes {
  depth?: number
  url?: string
  value?: string
}

export interface FrontMatterTypes {
  title?: string
  summary?: string
  slug?: string
  fileName?: string
  bibliography?: string
  date: string | number | Date | undefined
  lastmod?: Date
  readingTime?: ReadingTimeTypes
  tags?: [string]
  draft?: boolean
  authors?: AuthorTypes[]
  [key: string]: any
}

export interface LayoutTypes {
  [key: string]: any
}

export interface NextPrevTypes {
  slug?: string
  title?: string
}

export interface PaginationTypes {
  itemsCount?: number | 0
  pageSize?: number | 0
  currentPage?: number | 1
  onPageChange?: (page: number) => void
  onNext?: () => void
  onPrevious?: () => void
}

export interface PostTypes {
  mdxSource?: string
  frontMatter?: FrontMatterTypes
  toc?: {
    depth?: number
    fromHeading?: number
    toHeading?: number
    asDisclosure?: boolean
    exclude?: string
    value?: string
  }
}

export interface TOCTypes {
  tocHeading?: string
}

export interface TagTypes {
  [key: string]: number
}
