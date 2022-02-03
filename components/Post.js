import Link from "next/link";
import Tag from "@/components/Tag";
import Avatar from "./common/Avatar";
import formatDate from "@/lib/utils/format-date";

export default function Post({ item }) {
  return (
    <div className="border border-gray p-2 w-full mb-4">
      <ul className="meta flex items-center justify-between mb-3">
        <Avatar picture={item.author.picture} name={item.author.name} />
        <li className="text-gray-300">
          <dl>
            <dt className="sr-only">Published on</dt>
            <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
              <time dateTime={item.date}>{formatDate(item.date)}</time>
            </dd>
          </dl>
        </li>
      </ul>
      <Link as={`/blog/posts/${item.slug}`} href="/blog/posts/[...slug]">
        <a>
          <div className="card-body">
            <h2 className="font-bold text-1xl md:text-2xl">{item.title}</h2>
            <p className="text-[1.1rem] tracking-wide py-3">{item.excerpt}</p>
          </div>
        </a>
      </Link>
      {item.tags && item.tags.map((tag) => <Tag key={tag} tag={tag} />)}
    </div>
  );
}
