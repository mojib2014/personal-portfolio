import { useRouter } from "next/router";
import Layout from "components/Layout";
import ErrorPage from "next/error";
import { getPostBySlug, getAllPosts } from "lib/api/api";
import markdownToHtml from "lib/markdownToHtml";
import { CMS_NAME } from "lib/api/constants";

export default function Post({ post, morePosts, preview }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) return <ErrorPage statusCod={404} />;

  return (
    <Layout title={post.title} author={post.author} description={post.excerpt}>
      <div className="">
        <div className="py-[120px]">
          <div className="container">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
