import React, { FC } from "react";
import Link from "next/link";

interface LinkProps {
  [key: string]: any;
}

const CustomLink: FC<LinkProps> = (props) => {
  const { href, className, ...rest } = props;
  const internalLink = href && href.toString().startsWith("/");
  const anchorLink = href && href.toString().startsWith("/#");

  if (internalLink)
    return (
      <Link href={href}>
        <a className={className} {...rest} />
      </Link>
    );

  if (anchorLink)
    return <a href={href?.toString()} className={className} {...rest} />;

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href?.toString()}
      className={className}
      {...rest}
    />
  );
};

export default CustomLink;
