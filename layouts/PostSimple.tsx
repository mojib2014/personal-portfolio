import React, { FC } from "react";
import Link from "@/components/Link";
import PageTitle from "@/components/PageTitle";
import SectionContainer from "@/components/SectionContainer";
import Layout from "@/components/Layout";
import siteMetadata from "@/data/siteMetadata";
import formatDate from "@/lib/utils/format-date";
import Comments from "@/components/comments";
import ScrollTopAndComment from "@/components/ScrollTopAndComment";
import { FrontMatterType } from "interfaces/frontMatter";
import { AuthorsType } from "interfaces/authors";
import { NextPrevType } from "interfaces/next-previous";

interface Props {
  frontMatter: FrontMatterType;
  authorDetails: AuthorsType;
  next?: NextPrevType;
  prev?: NextPrevType;
  children?: any;
}

const PostLayout: FC<Props> = ({
  frontMatter,
  authorDetails,
  next,
  prev,
  children,
}) => {
  const { date, title } = frontMatter;

  return (
    <Layout
      url={`${siteMetadata.siteUrl}/blog/${frontMatter.slug}`}
      {...frontMatter}
    >
      <SectionContainer>
        <ScrollTopAndComment />
        <article>
          <div>
            <header>
              <div className="space-y-1 border-b border-gray-200 pb-10 text-center dark:border-gray-700">
                <dl>
                  <div>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      <time dateTime={date.toDateString()}>
                        {formatDate(date)}
                      </time>
                    </dd>
                  </div>
                </dl>
                <div>
                  <PageTitle>{title}</PageTitle>
                </div>
              </div>
            </header>
            <div
              className="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0 "
              style={{ gridTemplateRows: "auto 1fr" }}
            >
              <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
                <div className="prose max-w-none pt-10 pb-8 dark:prose-dark">
                  {children}
                </div>
              </div>
              <Comments frontMatter={frontMatter} />
              <footer>
                <div className="flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base">
                  {prev && (
                    <div className="pt-4 xl:pt-8">
                      <Link
                        href={`/blog/${prev.slug}`}
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      >
                        &larr; {prev.title}
                      </Link>
                    </div>
                  )}
                  {next && (
                    <div className="pt-4 xl:pt-8">
                      <Link
                        href={`/blog/${next.slug}`}
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      >
                        {next.title} &rarr;
                      </Link>
                    </div>
                  )}
                </div>
              </footer>
            </div>
          </div>
        </article>
      </SectionContainer>
    </Layout>
  );
};
