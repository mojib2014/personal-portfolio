import {FC} from 'react'
import Image from 'next/image'
import Link from 'components/Link'
import SectionContainer from './SectionContainer'
import headerNavLinks from 'data/headerNavLinks'
import icons from 'data/icons'
import styles from 'styles/Footer.module.css'

const Footer: FC = () => {
  return (
    <footer className="w-full border-y border-y-gray-300 py-3 text-gray-500 dark:bg-[#111827]">
      <div>
        <SectionContainer>
          <div className="power-by text-center">
            <Link
              className="pb-10 text-blue-700"
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
          <div className="flex flex-col items-stretch justify-between space-y-3 space-x-2 py-8 sm:flex-row sm:space-y-1 sm:space-x-3">
            <nav className="relative w-full">
              <div className="h-full w-full p-3 md:after:absolute md:after:right-0 md:after:top-0 md:after:h-full md:after:w-[1px] md:after:bg-gray-300 md:after:content-['']">
                <ul className="flex flex-col items-center md:items-start">
                  <h4 className="mt-2 mb-5 text-center text-2xl font-bold md:text-left lg:text-3xl">
                    General resources
                  </h4>
                  {headerNavLinks.map(link => (
                    <li
                      key={link.href}
                      className="rounded-md p-2 duration-500 ease-in-out hover:bg-gray-100 hover:transition-all"
                    >
                      <Link
                        href={link.href}
                        className="inline-block text-blue-700"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
            <div className="relative w-full">
              <div className="h-full w-full p-3 md:after:absolute md:after:right-0 md:after:top-0 md:after:h-full md:after:w-[1px] md:after:bg-gray-300 md:after:content-['']">
                <h4 className="mt-2 mb-5 text-center text-2xl font-bold md:text-left lg:text-3xl">
                  Social
                </h4>
                <ul className="m-0 flex flex-wrap items-center justify-between p-0">
                  {icons.map(icon => (
                    <li key={icon.title}>
                      <Link
                        href={icon.href}
                        title={icon.title}
                        aria-label={icon.title}
                        className="flex items-center hover:scale-150 dark:rounded-full dark:bg-gray-200 dark:p-2"
                      >
                        <Image
                          src={icon.icon}
                          width={30}
                          height={30}
                          alt={icon.title}
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex w-full flex-col items-center md:items-start">
              <div className="legal-title p-3">
                <h4 className="mt-2 mb-5 text-center text-2xl font-bold md:text-left lg:text-3xl">
                  Legal
                </h4>
                <ul>
                  <li>
                    <Link
                      href="/privacy-policy"
                      className="rounded-md p-2 text-blue-700 duration-500 ease-in-out hover:bg-gray-100 hover:transition-all"
                    >
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
