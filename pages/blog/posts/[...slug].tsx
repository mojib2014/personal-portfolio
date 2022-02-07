import { FC } from "react";
import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import fs from "fs";
import PageTitle from "@/components/PageTitle";
import generateRss from "@/lib/generate-rss";
import { MDXLayoutRenderer } from "@/components/MDXComponents";
import {
  formatSlug,
  getAllFilesFrontMatter,
  getFileBySlug,
  getFiles,
} from "@/lib/mdx";
import { PostType } from "@/interfaces/posts";
import { AuthorType } from "@/interfaces/authors";
import { NextPrevType } from "@/interfaces/next-previous";

const DEFAULT_LAYOUT = "PostLayout";

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getFiles("blog");
  return {
    paths: posts.map((p) => ({
      params: {
        slug: formatSlug(p).split("/"),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const allPosts = await getAllFilesFrontMatter("blog");
  const postIndex = allPosts.findIndex(
    (post) => formatSlug(post.slug) === params?.slug?.join("/")
  );
  const prev = allPosts[postIndex + 1] || null;
  const next = allPosts[postIndex - 1] || null;
  const post = await getFileBySlug("blog", params.slug.join("/"));
  const authorList = post.frontMatter.authors || ["default"];
  const authorPromise = authorList.map(async (author) => {
    const authorResults = await getFileBySlug("authors", [author]);
    return authorResults.frontMatter;
  });
  const authorDetails = await Promise.all(authorPromise);

  // rss
  if (allPosts.length > 0) {
    const rss = generateRss(allPosts);
    fs.writeFileSync("./public/feed.xml", rss);
  }

  return { props: { post, authorDetails, prev, next } };
};

type Props = {
  post: PostType;
  authorDetails: AuthorType[];
  prev: NextPrevType;
  next: NextPrevType;
};

const Blog: FC<NextPage & Props> = ({ post, authorDetails, prev, next }) => {
  const { mdxSource, toc, frontMatter } = post;

  return (
    <>
      {frontMatter.draft !== true ? (
        <MDXLayoutRenderer
          layout={frontMatter.layout || DEFAULT_LAYOUT}
          toc={toc}
          mdxSource={mdxSource}
          frontMatter={frontMatter}
          authorDetails={authorDetails}
          prev={prev}
          next={next}
        />
      ) : (
        <div className="mt-24 text-center">
          <PageTitle>
            Under Construction{" "}
            <span role="img" aria-label="roadwork sign">
              🚧
            </span>
          </PageTitle>
        </div>
      )}
    </>
  );
};

export default Blog;
