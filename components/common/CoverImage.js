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
    />
  );

  return <div className="w-full m-auto text-center">{image}</div>;
}
