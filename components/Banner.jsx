import Link from './Link'
import SectionContainer from './SectionContainer'
import PageTitle from './PageTitle'

const Banner = () => {
  return (
    <section id="banner" className="mb-[-50px] text-gray-100">
      <div
        className="h-screen bg-cover bg-fixed bg-no-repeat bg-origin-content pt-44 md:bg-center"
        style={{ backgroundImage: 'url(/bg-images/01.png)' }}
      >
        <SectionContainer>
          <div className="max-w-3xl text-left">
            <PageTitle banner={true}>
              Hi There,
              <br />
              I&apos;m Mojib Mohammad
            </PageTitle>
            <p>Junior full stack developer</p>
            <div className="mt-8 transition-all duration-300 ease-in-out">
              <Link
                href="/Mojib-Mohammad-resume.pdf"
                title="Resumt"
                aria-label="Resume"
                className="inline-block bg-banner-gradient py-5 px-10 shadow-md shadow-current transition-all duration-300 ease-in-out hover:rounded-full sm:py-7 sm:px-16"
              >
                Download Resume
              </Link>
            </div>
          </div>
        </SectionContainer>
      </div>
    </section>
  )
}

export default Banner
