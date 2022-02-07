import Image, { ImageProps } from "next/image";
import cn from "classnames";

interface Props {
  width?: number;
  height?: number;
  [key: string]: any;
}

export default function CoverImage({ item, width, height, ...rest }: Props) {
  const image = (
    <Image
      {...rest}
      alt={`Cover Image for ${item?.title}`}
      className={cn("shadow-sm", {
        "transition-shadow duration-200 hover:shadow-md": item?.slug,
      })}
      width={width}
      height={height}
    />
  );

  return <div className="m-auto w-full text-center">{image}</div>;
}