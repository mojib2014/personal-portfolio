import { useState, useEffect } from "react";
import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.css";
import ActiveLink from "./common/activeLink";
import styles from "../styles/header.module.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleHeaderScroll = () => {
    if (window.scrollY > 90) setScrolled(true);
    else setScrolled(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleHeaderScroll);

    return () => window.removeEventListener("scroll", handleHeaderScroll);
  });

  const handleAchorClick = ({ target }) => {
    const hash = target.hash;
    document.querySelectorAll("a").forEach((a) => a.classList.remove("active"));
    target.classList.add("active");
    if (target.getAttribute("href") === "/" || hash === "") return;
    if (hash !== "") {
      const section = document.querySelector(hash);
      if (!section) return;
      section.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    }

    setShowMobileMenu(false);
  };

  const openMobileMenu = () => setShowMobileMenu(true);

  const closeMobileMenu = () => setShowMobileMenu(false);

  return (
    <>
      <div
        className={`${styles.mobileMenuOverlay} ${
          showMobileMenu ? styles.overlayShow : ""
        }`}
        onClick={closeMobileMenu}
      >
        <span className={styles.mobileMenuCloseBtn}></span>
      </div>
      <header
        id="header"
        className={`${styles.header}  ${scrolled ? "scrolled" : ""} ${
          styles.scrolled
        }`}
      >
        <div className="container mx-w-xl">
          <div className="flex-header flex justify-between items-center">
            <div
              className={`${styles.socialContainer} d-flex align-items-center justify-content-between`}
            >
              <Link href="#twitter">
                <a
                  referrerPolicy="no-referrer"
                  target="_blank"
                  rel="noopener"
                  className="mr-2 xl:mr-5"
                >
                  <i
                    className={`${
                      scrolled ? "text-blue" : ""
                    } fab fa-twitter fa-lg`}
                  />
                </a>
              </Link>
              <Link href="https://www.linkedin.com/in/mojib-mohammad" passHref>
                <a
                  referrerPolicy="no-referrer"
                  target="_blank"
                  rel="noopener"
                  className="mr-2 xl:mr-5"
                >
                  <i
                    className={`${
                      scrolled ? "text-blue" : ""
                    } fab fa-linkedin fa-lg`}
                  />
                </a>
              </Link>
              <Link href="https://github.com/mojib2014">
                <a
                  referrerPolicy="no-referrer"
                  target="_blank"
                  rel="noopener"
                  className="mr-2 xl:mr-5"
                >
                  <i className="fab fa-github fa-lg text-black" />
                </a>
              </Link>
            </div>
            <div className={`${styles.contentMenu} flex lg ml-auto`}>
              <div className={styles.navWrap}>
                <nav id="main-nav" className="main-nav mr-5">
                  <ul className={`${styles.ul} flex lg list-style-none`}>
                    <li className="pr-12">
                      <ActiveLink href="/">
                        <a className="inline-block" onClick={handleAchorClick}>
                          Home
                        </a>
                      </ActiveLink>
                    </li>
                    <li className="pr-12">
                      <ActiveLink href="/#about">
                        <a className="inline-block" onClick={handleAchorClick}>
                          About
                        </a>
                      </ActiveLink>
                    </li>
                    <li className="pr-12">
                      <ActiveLink href="/#skills">
                        <a className="inline-block" onClick={handleAchorClick}>
                          Skills
                        </a>
                      </ActiveLink>
                    </li>
                    <li className="pr-12">
                      <ActiveLink href="/#portfolio">
                        <a className="inline-block" onClick={handleAchorClick}>
                          Portfolio
                        </a>
                      </ActiveLink>
                    </li>
                    <li className="pr-12">
                      <ActiveLink href="/#resume">
                        <a className="inline-block" onClick={handleAchorClick}>
                          Resume
                        </a>
                      </ActiveLink>
                    </li>
                    <li className="pr-12">
                      <ActiveLink href="/blog">
                        <a className="inline-block" onClick={handleAchorClick}>
                          Blog
                        </a>
                      </ActiveLink>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="btn-primary self-center">
                <Link href="#hire-me">
                  <a
                    style={{ color: "#fff" }}
                    className="bg-dodgerblue hover:bg-blue rounded-md text-white px-2 py-1.5 xl:px-4 xl:py-2.5"
                  >
                    Contact Me
                  </a>
                </Link>
              </div>
            </div>
            <div dir="rtl" className={styles.btnMenu} onClick={openMobileMenu}>
              <div className={`${styles.line} ${styles.line1}`}></div>
              <div className={`${styles.line} ${styles.line2}`}></div>
              <div className={`${styles.line} ${styles.line3}`}></div>
              <div className={`${styles.line} ${styles.line4}`}></div>
            </div>
          </div>
        </div>
      </header>
      <nav
        id="mobile-menu"
        className={`${styles.mobileMenu} ${
          showMobileMenu ? styles.mobileNavShow : ""
        }`}
      >
        <ul>
          <li>
            <ActiveLink href="/">
              <a className="inlin-block" onClick={handleAchorClick}>
                Home
              </a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href="/#about">
              <a className="inlin-block" onClick={handleAchorClick}>
                About
              </a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href="/#skills">
              <a className="inlin-block" onClick={handleAchorClick}>
                Skills
              </a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href="/#portfolio">
              <a className="inlin-block" onClick={handleAchorClick}>
                Portfolio
              </a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href="/#resume">
              <a className="inlin-block" onClick={handleAchorClick}>
                Resume
              </a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href="/blog">
              <a className="inlin-block" onClick={handleAchorClick}>
                Blog
              </a>
            </ActiveLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
