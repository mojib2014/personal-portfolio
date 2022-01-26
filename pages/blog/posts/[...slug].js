import { useRouter } from "next/router";
import ErrorPage from "next/error";
import markdownToHtml from "lib/markdownToHtml";
import Layout from "components/Layout";
import { getPostBySlug, getAllPosts } from "lib/api/api";
import { CMS_NAME } from "lib/api/constants";
import SubNav from "components/common/SubNav";
import Image from "next/image";

export default function Post({ post, morePosts, preview }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) return <ErrorPage statusCod={404} />;

  return (
    <Layout
      title={post.title}
      author={post.author.name}
      description={post.excerpt}
    >
      <div className="">
        <div className="py-[120px]">
          <div className="container mx-w-xl">
            {/* <SubNav router={router} /> */}
            <h1 className="text-center font-bold text-5xl mt-6 mb-16">
              {post.title}
            </h1>
            <div className="w-[700px] h-[auto] max-h-[500px] my-5 mx-auto">
              <Image
                src={post.coverImage}
                alt={post.title}
                width={700}
                height={300}
                layout="responsive"
                objectFit="cover"
              />
            </div>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug[0], params.slug[1], [
    "title",
    "date",
    "slug",
    "category",
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
  const posts = getAllPosts(["slug", "category"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: [post.category, post.slug],
        },
      };
    }),
    fallback: false,
  };
}
