import Link from '@/components/Link'
import SectionContainer from './SectionContainer'

const About = () => {
  return (
    <section
      id="about"
      className="pt-section-pt pb-section-pb dark:text-gray-100"
    >
      <SectionContainer>
        <div className="text-left">
          <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl xl:text-5xl">
            I&apos;m a junior full-stack developer
          </h2>
          <p>
            I have an associate degree in medicine. I&apos;m really interested
            in technology & solving technical problems. I create responsive and
            interactive web apps, With focus on back-end. In my free times I
            play volleball and enjoy family time with my lovely dauther, watch
            movies and learn new stuff. You can know more about me by reading my{' '}
            <Link href="/blog" className="p-3 text-blue-700 hover:underline">
              articles.
            </Link>
          </p>
        </div>
      </SectionContainer>
    </section>
  )
}

export default About
