import Image from 'next/image'
import Link from '@/components/Link'
import styles from '../styles/Footer.module.css'
import SectionContainer from './SectionContainer'

const Footer = () => {
  return (
    <footer className="border-t-gray min-h-[400px] w-full overflow-hidden border-t py-3 dark:bg-[#111827] dark:text-gray-400">
      <div>
        <SectionContainer>
          <div className="power-by text-center">
            <Link
              className="pb-10 text-anchor"
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            >
              Powered by{' '}
              <span className={styles.logo}>
                <Image
                  src="/vercel.svg"
                  alt="Vercel Logo"
                  width={72}
                  height={16}
                />
              </span>
            </Link>
          </div>
          <div className="mt-8 grid auto-rows-auto content-center justify-items-center gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            <nav className="relative w-full">
              <ul className=" flex flex-col items-center md:items-start md:after:absolute md:after:right-0 md:after:h-full md:after:w-[1px] md:after:bg-gray-500 md:after:content-['']">
                <h4 className="mt-2 mb-5 text-center font-bold md:text-left">
                  General resources
                </h4>
                <li className="pb-4">
                  <Link href="/" className="inline-block text-anchor">
                    Home
                  </Link>
                </li>
                <li className="pb-4">
                  <Link href="/#about" className="inline-block text-anchor">
                    About
                  </Link>
                </li>
                <li className="pb-4">
                  <Link href="/#skills" className="inline-block text-anchor">
                    Skills
                  </Link>
                </li>
                <li className="pb-4">
                  <Link href="/#portfolio" className="inline-block text-anchor">
                    Portfolio
                  </Link>
                </li>
                <li className="pb-4">
                  <Link href="/#resume" className="inline-block text-anchor">
                    Resume
                  </Link>
                </li>
                <li className="pb-4">
                  <Link href="/blog" className="inline-block text-anchor">
                    Blog
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="relative w-full">
              <ul className="m-0 flex flex-col items-center p-0 md:items-start md:after:absolute md:after:right-0 md:after:h-full md:after:w-[1px] md:after:bg-gray-500 md:after:content-['']">
                <h4 className="mt-2 mb-5 text-center font-bold md:text-left">
                  Social
                </h4>
                <li className="mb-4">
                  <Link
                    href="https://github.com/mojib2014"
                    title="Github"
                    aria-label="Github"
                    className="flex items-center justify-start text-anchor"
                  >
                    Github
                    <i className="fab fa-github fa-1x ml-3 text-gray-900"></i>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="https://twitter.com/mojib_mohammad1"
                    title="Twitter"
                    aria-label="Twitter"
                    className="flex items-center justify-start text-anchor"
                  >
                    Twitter
                    <i className="fab fa-twitter fa-1x ml-3"></i>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="https://www.linkedin.com/in/mojib-mohammad/"
                    title="Linkedin"
                    aria-label="Linkedin"
                    className="flex items-center justify-start text-anchor"
                  >
                    Linkedin
                    <i className="fab fa-linkedin fa-1x ml-3"></i>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="#facebook"
                    title="Facebook"
                    aria-label="Facebook"
                    className="flex items-center justify-start text-anchor"
                  >
                    Facebook
                    <i className="fab fa-facebook fa-1x ml-3"></i>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex w-full flex-col items-center md:items-start">
              <div className="legal-title">
                <h4 className="mt-2 mb-5 text-center font-bold md:text-left">
                  Legal
                </h4>
                <ul>
                  <li>
                    <Link href="#privacy-policy" className="text-anchor">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </SectionContainer>
      </div>
    </footer>
  )
}

export default Footer
