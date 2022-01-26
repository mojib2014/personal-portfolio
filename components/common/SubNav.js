import Link from "next/link";

export default function SubNav({ router }) {
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
