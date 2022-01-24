import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <div className="container mx-w-xl">
          <div className="power-by text-center">
            <a
              className="pb-10 text-[#0070f3]"
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
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 auto-rows-auto gap-7 justify-center mt-8">
              <nav className="w-[100%] border-r-2 border-r-gray-200 footer-border-right">
                <h4 className="mt-2 mb-5 font-bold">General resources</h4>
                <ul className=" flex flex-col list-style-none items-center">
                  <li className="pb-4">
                    <Link href="/">
                      <a className="inline-block text-[#0070f3]">Home</a>
                    </Link>
                  </li>
                  <li className="pb-4">
                    <Link href="/#about">
                      <a className="inline-block text-[#0070f3]">About</a>
                    </Link>
                  </li>
                  <li className="pb-4">
                    <Link href="/#skills">
                      <a className="inline-block text-[#0070f3]">Skills</a>
                    </Link>
                  </li>
                  <li className="pb-4">
                    <Link href="/#portfolio">
                      <a className="inline-block text-[#0070f3]">Portfolio</a>
                    </Link>
                  </li>
                  <li className="pb-4">
                    <Link href="/#resume">
                      <a className="inline-block text-[#0070f3]">Resume</a>
                    </Link>
                  </li>
                  <li className="pb-4">
                    <Link href="/blog">
                      <a className="inline-block text-[#0070f3]">Blog</a>
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="w-[100%] border-r-2 border-r-gray-200 footer-border-right">
                <ul className="list-style-none p-0 m-0">
                  <h4 className="mt-2 mb-5 font-bold">Social</h4>
                  <li className="mb-4">
                    <a
                      href="#github"
                      className="text-[#222] flex items-center justify-center"
                    >
                      Github
                      <i className="fab fa-github fa-1x ml-3 text-black"></i>
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="#twitter"
                      className="text-[#0070f3] flex items-center justify-center"
                    >
                      Twitter
                      <i className="fab fa-twitter fa-1x ml-3"></i>
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="#linkedin"
                      className="text-[#0070f3] flex items-center justify-center"
                    >
                      Linkedin
                      <i className="fab fa-linkedin fa-1x ml-3"></i>
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="#facebook"
                      className="text-[#0070f3] flex items-center justify-center"
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
                      <a href="#privacy-policy" className="text-[#0070f3]">
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
