import { useState, useEffect } from "react";
import Link from "next/link";
import ActiveLink from "./common/activeLink";
import styles from "../styles/header.module.css";

export default function Header() {
  const [scrolled, setScrolled] = useState("");
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleHeaderScroll = () => {
    if (window.scrollY > 90) setScrolled("scrolled");
    else setScrolled("");
  };
  useEffect(() => {
    window.addEventListener("scroll", handleHeaderScroll);

    return () => window.removeEventListener("scroll", handleHeaderScroll);
  });

  const handleAchorClick = ({ target }) => {
    const hash = target.hash;
    document.querySelectorAll("a").forEach((a) => a.classList.remove("active"));
    target.classList.add("active");
    if (target.getAttribute("href") === "/" || hash !== "") return;
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
      <header id="header" className={`${styles.header} ${scrolled}`}>
        <div className="container mx-w-xl">
          <div className="flex-header flex justify-between items-center">
            <div
              className={`${styles.socialContainer} d-flex align-items-center justify-content-between`}
            >
              <Link href="#twitter">
                <a className="light-black mr-5">Twitter</a>
              </Link>
              <Link href="#linkedin">
                <a className="light-black mr-5">LinkedIn</a>
              </Link>
              <Link href="#github">
                <a className="light-black mr-5">Github</a>
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
                      <ActiveLink href="/#services">
                        <a className="inline-block" onClick={handleAchorClick}>
                          Services
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
                  <a className="bg-light-purple hover:bg-purple rounded-md text-white px-4 py-2.5">
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
            <ActiveLink href="/#services">
              <a className="inlin-block" onClick={handleAchorClick}>
                Services
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
