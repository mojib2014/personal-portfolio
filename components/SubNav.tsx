import Link, { LinkProps } from "next/link";
import { NextRouter } from "next/router";

interface Props extends LinkProps {
  router: NextRouter;
}

export default function SubNav({ router }: Props) {
  console.log(router);
  return (
    <div className="sub-header">
      <ul className="flex items-center gap-5">
        <li>
          <Link href="/blog">
            <a className="">Blog</a>
          </Link>
        </li>
        <li>{router.asPath}</li>
      </ul>
    </div>
  );
}
