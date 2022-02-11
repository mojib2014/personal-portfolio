import React, {useState, useEffect, MouseEventHandler} from 'react'
import ActiveLink from './ActiveLink'
import headerNavLinks from '@/data/headerNavLinks'
import MobileOverlay from './MobileOverlay'
import SectionContainer from './SectionContainer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import smoothscroll from 'smoothscroll-polyfill'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const handleHeaderScroll = () => {
    if (window.scrollY > 90) setScrolled(true)
    else setScrolled(false)
  }
  useEffect(() => {
    smoothscroll.polyfill()
    window.addEventListener('scroll', handleHeaderScroll)

    return () => window.removeEventListener('scroll', handleHeaderScroll)
  })

  const handleAchorClick: MouseEventHandler = () => {
    setShowMobileMenu(false)
  }

  const openMobileMenu = () => setShowMobileMenu(true)

  const closeMobileMenu = () => setShowMobileMenu(false)

  return (
    <>
      <MobileOverlay show={showMobileMenu} onClose={closeMobileMenu} />
      <header
        id="header"
        className={`fixed z-10 w-full text-gray-900 transition-all duration-300 ease-in-out  ${
          scrolled
            ? 'bg-gray-100 text-gray-900 shadow-lg dark:bg-[#111827]'
            : ''
        }`}
      >
        <SectionContainer>
          <div className="header flex items-center">
            <ActiveLink href="/">
              <a
                className={`mr-auto leading-[60px] ${
                  !scrolled ? 'text-gray-700' : 'text-gray-800'
                } dark:text-gray-100`}
              >
                Mojib
              </a>
            </ActiveLink>
            <nav className="hidden md:block lg:ml-auto">
              <ul className="flex items-center justify-end">
                {headerNavLinks.map(link => (
                  <li className="relative pl-6 xl:pl-10" key={link.title}>
                    <ActiveLink href={link.href} as={link.href}>
                      <a
                        onClick={handleAchorClick}
                        className={`${
                          scrolled && 'scrolled'
                        } inline-block leading-[60px] tracking-wide before:absolute before:left-5 before:top-[25%] before:h-[50%] before:w-[1px] before:bg-gray-500 before:content-[''] dark:text-gray-100`}
                      >
                        {link.title}
                      </a>
                    </ActiveLink>
                  </li>
                ))}
              </ul>
            </nav>
            <ThemeSwitch />
            <div
              dir="rtl"
              className="line-container block cursor-pointer pl-6 md:hidden xl:pl-10"
              onClick={openMobileMenu}
            >
              <div className="line my-1 mx-0 h-[2px] w-[30px] bg-gray-700 transition-all duration-300 ease-in-out dark:bg-gray-100"></div>
              <div className="line my-1 mx-0 h-[2px] w-[36px] bg-gray-700 transition-all duration-300 ease-in-out dark:bg-gray-100"></div>
              <div className="line my-1 mx-0 h-[2px] w-[28px] bg-gray-700 transition-all duration-300 ease-in-out dark:bg-gray-100"></div>
              <div className="line my-1 mx-0 h-[2px] w-[32px] bg-gray-700 transition-all duration-300 ease-in-out dark:bg-gray-100"></div>
            </div>
          </div>
        </SectionContainer>
      </header>
      <MobileNav show={showMobileMenu} onClick={closeMobileMenu} />
    </>
  )
}

export default Header
