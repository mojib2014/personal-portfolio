import Link from "next/link";
import headerNavLinks from "@/data/headerNavLinks";

interface Props {
  show?: boolean;
  onClick?: () => void;
}

const MobileNav = ({ show, onClick }: Props) => {
  return (
    <nav
      className={`fixed top-0 bottom-0 z-40 flex h-full w-[40vw] flex-col justify-start overflow-y-auto bg-gray-800 py-3 transition-all duration-300 ease-in-out ${
        show ? "ml-0" : "ml-[-100%]"
      }`}
    >
      <ul className="mobile-nav">
        {headerNavLinks.map((link) => (
          <li
            key={link.title}
            className="m-0 border-t-[1px] border-t-gray-500 pl-6 text-left"
          >
            <Link href={link.href}>
              <a className="block leading-[60px] text-white" onClick={onClick}>
                {link.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileNav;
