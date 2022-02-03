import Link from "next/link";
import kebabCase from "@/lib/utils/kebabCase";

const Tag = ({ tag }) => {
  return (
    <Link href={`/tags/${kebabCase(tag)}`}>
      <a className="mr-3 text-sm font-medium uppercase text-sky-500 hover:text-sky-700 dark:hover:text-sky-400">
        {tag.split(" ").join("-")}
      </a>
    </Link>
  );
};

export default Tag;
