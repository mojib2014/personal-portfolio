import { useState, useEffect } from "react";
import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.css";
import styles from "../styles/Header.module.css";

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
        onClick={closeMobileMenu}
        className={`${styles.mobileMenuOverlay}
        ${showMobileMenu && styles.overlayShow}
        `}
      >
        <span className={styles.mobileMenuCloseBtn}></span>
      </div>
      <header
        id="header"
        className={`${styles.header}  ${
          scrolled ? styles.scrolled + " scrolled" : ""
        }`}
      >
        <div className="container mx-w-xl">
          <div className="flex justify-between items-center">
            <div
              className={`${styles.headerSocial} items-center justify-between`}
            >
              <Link href="#twitter">
                <a
                  referrerPolicy="no-referrer"
                  target="_blank"
                  rel="noopener"
                  className="mr-2 xl:mr-5 leading-[90px]"
                  title="Twiiter"
                >
                  <i className="fab fa-twitter fa-lg" />
                </a>
              </Link>
              <Link href="https://www.linkedin.com/in/mojib-mohammad">
                <a
                  referrerPolicy="no-referrer"
                  target="_blank"
                  rel="noopener"
                  className="mr-2 xl:mr-5 leading-[90px]"
                  title="Linkedin"
                >
                  <i className="fab fa-linkedin fa-lg" />
                </a>
              </Link>
              <Link href="https://github.com/mojib2014">
                <a
                  referrerPolicy="no-referrer"
                  target="_blank"
                  rel="noopener"
                  className="mr-2 xl:mr-5 leading-[90px]"
                  title="Github"
                >
                  <i className="fab fa-github fa-lg text-black" />
                </a>
              </Link>
            </div>
            <div className="flex items-center justify-between lg:ml-auto">
              <div className={styles.navWrap}>
                <nav className="mr-5">
                  <ul
                    className={`${styles.ul} flex items-center justify-between`}
                  >
                    <li className="pr-12">
                      <Link href="/">
                        <a className="inline-block" onClick={handleAchorClick}>
                          Home
                        </a>
                      </Link>
                    </li>
                    <li className="pr-12">
                      <Link href="/#about">
                        <a className="inline-block" onClick={handleAchorClick}>
                          About
                        </a>
                      </Link>
                    </li>
                    <li className="pr-12">
                      <Link href="/#skills">
                        <a className="inline-block" onClick={handleAchorClick}>
                          Skills
                        </a>
                      </Link>
                    </li>
                    <li className="pr-12">
                      <Link href="/#portfolio">
                        <a className="inline-block" onClick={handleAchorClick}>
                          Portfolio
                        </a>
                      </Link>
                    </li>
                    <li className="pr-12">
                      <Link href="/#resume">
                        <a className="inline-block" onClick={handleAchorClick}>
                          Resume
                        </a>
                      </Link>
                    </li>
                    <li className="pr-12">
                      <Link href="/blog">
                        <a className="inline-block" onClick={handleAchorClick}>
                          Blog
                        </a>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="self-center">
                <Link href="#contact">
                  <a className={styles.contactBtn}>Contact Me</a>
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
        className={`${styles.mobileMenu} ${
          showMobileMenu ? styles.mobileNavShow : ""
        }`}
      >
        <ul>
          <li>
            <Link href="/">
              <a className="inlin-block" onClick={handleAchorClick}>
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/#about">
              <a className="inlin-block" onClick={handleAchorClick}>
                About
              </a>
            </Link>
          </li>
          <li>
            <Link href="/#skills">
              <a className="inlin-block" onClick={handleAchorClick}>
                Skills
              </a>
            </Link>
          </li>
          <li>
            <Link href="/#portfolio">
              <a className="inlin-block" onClick={handleAchorClick}>
                Portfolio
              </a>
            </Link>
          </li>
          <li>
            <Link href="/#resume">
              <a className="inlin-block" onClick={handleAchorClick}>
                Resume
              </a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a className="inlin-block" onClick={handleAchorClick}>
                Blog
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
