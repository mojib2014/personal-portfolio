import BananaSlug from 'github-slugger'

const kebabCase = str => BananaSlug.slug(str)

export default kebabCase
