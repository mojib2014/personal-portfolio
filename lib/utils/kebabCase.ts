import BananaSlug from 'github-slugger'

const kebabCase = (str: string) => BananaSlug.slug(str)

export default kebabCase
