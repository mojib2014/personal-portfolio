import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Footer.module.css";
import SectionContainer from "./SectionContainer";

export default function Footer() {
  return (
    <footer className="dark:bg-gray-400 dark:text-gray-600 border-t-2 border-t-gray-300 overflow-hidden w-full py-3 min-h-[400px]">
      <div>
        <SectionContainer>
          <div className="power-by text-center">
            <a
              className="pb-10 text-anchor"
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
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
            </a>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 auto-rows-auto gap-7 items-start justify-items-center mt-8">
            <nav className="w-full border-r-2 border-r-gray-200 footer-border-right">
              <h4 className="mt-2 mb-5 font-bold">General resources</h4>
              <ul className=" flex flex-col items-start">
                <li className="pb-4">
                  <Link href="/">
                    <a className="inline-block text-anchor">Home</a>
                  </Link>
                </li>
                <li className="pb-4">
                  <Link href="/#about">
                    <a className="inline-block text-anchor">About</a>
                  </Link>
                </li>
                <li className="pb-4">
                  <Link href="/#skills">
                    <a className="inline-block text-anchor">Skills</a>
                  </Link>
                </li>
                <li className="pb-4">
                  <Link href="/#portfolio">
                    <a className="inline-block text-anchor">Portfolio</a>
                  </Link>
                </li>
                <li className="pb-4">
                  <Link href="/#resume">
                    <a className="inline-block text-anchor">Resume</a>
                  </Link>
                </li>
                <li className="pb-4">
                  <Link href="/blog">
                    <a className="inline-block text-anchor">Blog</a>
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="w-full border-r-2 border-r-gray-200 footer-border-right">
              <ul className="p-0 m-0">
                <h4 className="mt-2 mb-5 font-bold">Social</h4>
                <li className="mb-4">
                  <a
                    href="https://github.com/mojib2014"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Github"
                    aria-label="Github"
                    className="text-[#222] flex items-center justify-start"
                  >
                    Github
                    <i className="fab fa-github fa-1x ml-3 text-black"></i>
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://twitter.com/mojib_mohammad1"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Twitter"
                    aria-label="Twitter"
                    className="text-anchor flex items-center justify-start"
                  >
                    Twitter
                    <i className="fab fa-twitter fa-1x ml-3"></i>
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://www.linkedin.com/in/mojib-mohammad/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Linkedin"
                    aria-label="Linkedin"
                    className="text-anchor flex items-center justify-start"
                  >
                    Linkedin
                    <i className="fab fa-linkedin fa-1x ml-3"></i>
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="#facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Facebook"
                    aria-label="Facebook"
                    className="text-anchor flex items-center justify-start"
                  >
                    Facebook
                    <i className="fab fa-facebook fa-1x ml-3"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-[100%]">
              <div className="legal-title">
                <h4 className="mt-2 mb-5 font-bold">Legal</h4>
                <ul>
                  <li>
                    <a href="#privacy-policy" className="text-anchor">
                      Privacy Policy
                    </a>
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
