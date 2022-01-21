import Link from "next/link";
import { withRouter } from "next/router";
import { Children, cloneElement } from "react";

const ActiveLink = withRouter(({ router, children, ...props }) => {
  return (
    <Link {...props}>
      {cloneElement(Children.only(children), {
        className:
          router.pathname === props.href
            ? `active ${children.props.className}`
            : children.props.className,
      })}
    </Link>
  );
});

export default ActiveLink;
