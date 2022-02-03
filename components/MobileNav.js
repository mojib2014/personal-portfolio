import Link from "next/link";
import headerNavLinks from "@/data/headerNavLinks";

export default function MobileNav({ show, onClick }) {
  return (
    <nav
      className={`flex flex-col justify-start fixed w-[40vw] bg-gray-800 h-full py-3 top-0 bottom-0 overflow-y-auto z-40 transition-all ease-in-out duration-300 ${
        show ? "ml-0" : "ml-[-100%]"
      }`}
    >
      <ul className="mobile-nav">
        {headerNavLinks.map((link) => (
          <li
            key={link.title}
            className="border-t-[1px] border-t-gray-500 m-0 text-left pl-6"
          >
            <Link href={link.href}>
              <a className="block text-white leading-[60px]" onClick={onClick}>
                {link.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
