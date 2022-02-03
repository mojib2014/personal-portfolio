import Link from "next/link";

const CustomLink = ({ href, ...rest }) => {
  const internalLink = href && href.startsWith("/");
  const anchorLink = href && href.startsWith("#");

  if (internalLink)
    return (
      <Link href={href}>
        <a {...rest} />
      </Link>
    );

  if (anchorLink) return <a href={href} {...rest} />;

  return <a target="_blank" rel="noopener noreferrer" href={href} {...rest} />;
};

export default CustomLink;
