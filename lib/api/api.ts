import fs from 'fs'
import {join} from 'path'
import matter from 'gray-matter'

const mainDirectory = join(process.cwd(), '_posts')

// Retrieve all categories
export function getAllCategories(mainDirectory: string) {
  return fs
    .readdirSync(mainDirectory, {withFileTypes: true})
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)
}

// Retrieve a single category slugs
export function getCategorySlugs(category: string) {
  return fs.readdirSync(join(mainDirectory, category))
}

// Retrieve all categories slugs
export function getCategoriesSlugs() {
  const categories = getAllCategories(mainDirectory)
  const slugsMap: {[key: string]: any} = {}
  for (const category of categories)
    slugsMap[category] = getCategorySlugs(category)
  return slugsMap
}

// Retrieve a single post by slug
export function getPostBySlug(category: string, slug: string, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(`${mainDirectory}/${category}`, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const {data, content} = matter(fileContents)

  const items: {[key: string]: any} = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach(field => {
    if (field === 'slug') items[field] = realSlug
    if (field === 'category') items[field] = category
    if (field === 'content') items[field] = content
    if (typeof data[field] !== 'undefined') items[field] = data[field]
  })

  return items
}

// Retrieve all posts for a category
export function getCategoryPosts(category: string, fields = []) {
  const slugs = getCategorySlugs(category)
  const posts: {[key: string]: any} = []
  slugs.map(slug => {
    posts.push(getPostBySlug(category, slug, fields))
  })
  // Sort posts by date in descending order
  //@ts-expect-error: Let's ignore a compile error like this unreachable code
  posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1))

  return posts
}

export function getAllPosts(fields = []) {
  const slugsMap = getCategoriesSlugs()
  //@ts-expect-error: Let's ignore a compile error like this unreachable code
  const posts = []
  for (const category in slugsMap) {
    slugsMap[category].map((slug: string) => {
      posts.push(getPostBySlug(category, slug, fields))
    })
  }
  // Sort posts by date in descending order
  //@ts-expect-error: Let's ignore a compile error like this unreachable code
  posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  //@ts-expect-error: Let's ignore a compile error like this unreachable code
  return posts
}
