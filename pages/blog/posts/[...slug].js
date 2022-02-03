import fs from "fs";
import { useRouter } from "next/router";
import Image from "next/image";
import ErrorPage from "next/error";
import Layout from "components/Layout";
import {
  formatSlug,
  getAllFilesFrontMatter,
  getFileBySlug,
  getFiles,
} from "@/lib/mdx";
import generateRss from "@/lib/generate-rss";

const DEFAULT_LAYOUT = "PostLayout";

export default function Post({ post }) {
  const { mdxSource, toc, frontMatter } = post;
  const router = useRouter();
  if (!router.isFallback && !post?.slug) return <ErrorPage statusCod={404} />;

  return (
    <>
      {frontMatter.draft !== true ? (
        <MDXLayoutRenderer
          layout={frontMatter.layout || DEFAULT_LAYOUT}
          toc={toc}
          mdxSource={mdxSource}
          frontMatter={frontMatter}
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
}

export async function getStaticPaths() {
  const posts = getFiles("blog");
  return {
    paths: posts.map((p) => ({
      params: {
        slug: formatSlug(p).split("/"),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const allPosts = await getAllFilesFrontMatter("blog");
  const post = await getFileBySlug("blog", params.slug.join("/"));
  // rss
  if (allPosts.length > 0) {
    const rss = generateRss(allPosts);
    fs.writeFileSync("./public/feed.xml", rss);
  }

  return { props: { post } };
}
