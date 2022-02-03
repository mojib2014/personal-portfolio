import Image from "next/image";
import Link from "@/components/Link";
import styles from "../styles/Footer.module.css";
import SectionContainer from "./SectionContainer";

export default function Footer() {
  return (
    <footer className="dark:bg-gray-700 dark:text-gray-400 border-t border-t-gray overflow-hidden w-full py-3 min-h-[400px]">
      <div>
        <SectionContainer>
          <div className="power-by text-center">
            <Link
              className="pb-10 text-anchor"
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            >
              Powered by{" "}
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
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 auto-rows-auto gap-7 content-center justify-items-center mt-8">
            <nav className="w-full md:border-r md:dark:border-r-gray">
              <h4 className="mt-2 mb-5 font-bold text-center md:text-left">
                General resources
              </h4>
              <ul className=" flex flex-col items-center md:items-start">
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
            <div className="w-full md:border-r md:dark:border-r-gray">
              <ul className="p-0 m-0 flex flex-col items-center md:items-start">
                <h4 className="mt-2 mb-5 font-bold text-center md:text-left">
                  Social
                </h4>
                <li className="mb-4">
                  <Link
                    href="https://github.com/mojib2014"
                    title="Github"
                    aria-label="Github"
                    className="text-[#222] flex items-center justify-start"
                  >
                    Github
                    <i className="fab fa-github fa-1x ml-3 text-black"></i>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="https://twitter.com/mojib_mohammad1"
                    title="Twitter"
                    aria-label="Twitter"
                    className="text-anchor flex items-center justify-start"
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
                    className="text-anchor flex items-center justify-start"
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
                    className="text-anchor flex items-center justify-start"
                  >
                    Facebook
                    <i className="fab fa-facebook fa-1x ml-3"></i>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full flex flex-col items-center md:items-start">
              <div className="legal-title">
                <h4 className="mt-2 mb-5 font-bold text-center md:text-left">
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
  );
}
