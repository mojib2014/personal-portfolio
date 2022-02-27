import Banner from '@components/Banner'
import About from '@components/About'
import Skills from '@components/Skills'
import Portfolio from '@components/Portfolio'
import Resume from '@components/Resume'
import Contact from '@components/Contact'
import { PageSEO } from '@components/SEO'
import siteMetadata from '@data/siteMetadata'

const PortfolioLayout = () => {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <Banner />
      <About />
      <Skills />
      <Portfolio />
      <Resume />
      <Contact />
    </>
  )
}
export default PortfolioLayout
