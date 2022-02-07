import React, { FC } from "react";
import Image from "@/components/Image";
import { PageSEO } from "@/components/SEO";
import Link from "next/link";

interface Props {
  frontMatter: {
    name: string;
    avatar: string;
    occupation: string;
    company: string;
    email: string;
    twitter: string;
    github: string;
    linkedin: string;
  };
  children?: any;
}

const AuthorLayout: FC<Props> = ({ children, frontMatter }) => {
  const {
    name,
    avatar,
    occupation,
    company,
    email,
    twitter,
    linkedin,
    github,
  } = frontMatter;

  return (
    <PageSEO title={`About - ${name}`} description={`About me - ${name}`}>
      <div className="divide-y">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8">
            <Image
              src={avatar}
              alt="avatar"
              width="192px"
              height="192px"
              className="h-48 w-48 rounded-full"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              {name}
            </h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
            <div className="flex space-x-3 pt-6">
              <Link href={`mailto:${email}`}>
                <a>
                  <i className="fab fa-mail fa-lg" />
                </a>
              </Link>
              <Link href={github}>
                <a>
                  <i className="fab fa-github fa-lg" />
                </a>
              </Link>
              <Link href={linkedin}>
                <a>
                  <i className="fab fa-linkedin fa-lg" />
                </a>
              </Link>
              <Link href={twitter}>
                <a>
                  <i className="fab fa-twitter fa-lg" />
                </a>
              </Link>
            </div>
          </div>
          <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">
            {children}
          </div>
        </div>
      </div>
    </PageSEO>
  );
};

export default AuthorLayout;
