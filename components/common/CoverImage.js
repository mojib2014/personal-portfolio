import Link from "next/link";
import Image from "next/image";
import cn from "classnames";

export default function CoverImage({ item, width, height }) {
  const image = (
    <Image
      src={item.coverImage}
      alt={`Cover Image for ${item.title}`}
      className={cn("shadow-sm", {
        "hover:shadow-md transition-shadow duration-200": item.slug,
      })}
      width={width}
      height={height}
      layout="responsive"
      objectFit="contain"
    />
  );

  return (
    <div className="sm:mx-0">
      {item.slug ? (
        <Link
          as={`/blog/posts/${item.category}/${item.slug}`}
          href="/blog/posts/[category]/[slug]"
        >
          <a aria-label={item.title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
