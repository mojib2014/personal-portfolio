import { useState, useEffect } from "react";
import Link from "next/link";
import headerNavLinks from "@/data/headerNavLinks";
import MobileOverlay from "./MobileOverlay";
import SectionContainer from "./SectionContainer";
import Image from "next/image";
import MobileNav from "./MobileNav";
import ThemeSwitch from "./ThemeSwitch";
import "@fortawesome/fontawesome-free/css/all.css";

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
      <MobileOverlay show={showMobileMenu} onClose={closeMobileMenu} />
      <header
        id="header"
        className={`fixed w-full z-10 transition-all duration-300 ease-in-out text-gray-900  ${
          scrolled ? "bg-gray-100 shadow-lg text-gray-800 dark:bg-gray-800" : ""
        }`}
      >
        <SectionContainer>
          <div className="header flex items-center">
            <Link href="/">
              <a
                className={`mr-auto leading-[60px] ${
                  !scrolled ? "text-gray-700" : "text-gray-800"
                } dark:text-gray-100`}
              >
                Mojib
              </a>
            </Link>
            <nav className="hidden md:block lg:ml-auto">
              <ul className="flex items-center justify-end">
                {headerNavLinks.map((link) => (
                  <li className="xl:pl-10 pl-6" key={link.title}>
                    <Link href={link.href}>
                      <a
                        className={`${
                          scrolled && "scrolled"
                        } inline-block tracking-wide leading-[60px] dark:text-gray-100`}
                        onClick={handleAchorClick}
                      >
                        {link.title}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <ThemeSwitch />
            <div
              dir="rtl"
              className="cursor-pointer line-container xl:pl-10 pl-6 block md:hidden"
              onClick={openMobileMenu}
            >
              <div
                className={`line bg-gray-700 dark:bg-gray-100 h-[2px] my-1 mx-0 transition-all duration-300 ease-in-out w-[30px]`}
              ></div>
              <div
                className={`line bg-gray-700 dark:bg-gray-100 h-[2px] my-1 mx-0 transition-all duration-300 ease-in-out w-[36px]`}
              ></div>
              <div
                className={`line bg-gray-700 dark:bg-gray-100 h-[2px] my-1 mx-0 transition-all duration-300 ease-in-out w-[28px]`}
              ></div>
              <div
                className={`line bg-gray-700 dark:bg-gray-100 h-[2px] my-1 mx-0 transition-all duration-300 ease-in-out w-[32px]`}
              ></div>
            </div>
          </div>
        </SectionContainer>
      </header>
      <MobileNav show={showMobileMenu} onClick={closeMobileMenu} />
    </>
  );
}
