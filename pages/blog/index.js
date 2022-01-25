import { useState } from "react";
import Layout from "../../components/Layout";
import { getAllPosts } from "lib/api/api";
import Card from "components/common/Card";
import Link from "next/link";
import Search from "components/Search";

export default function Home({ posts }) {
  const [query, setQuery] = useState("");

  const handleChange = ({ target }) => {
    setQuery(target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(query);
  };
  return (
    <Layout
      title="Mojib | Blog"
      description="This is my personal blog for my learning journey"
    >
      <main>
        <div className="py-[120px]">
          <div className="container mx-w-xl">
            <h1 className="font-bold text-5xl text-center mt-8 mb-16">
              Trending Posts
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-auto items-start gap-8 w-[100%]">
              <div className="right-col">
                {posts.map((post) => (
                  <Card key={post.title} item={post} />
                ))}
              </div>
              <div className="left-col flex flex-col items-center border border-gray p-4">
                <div className="border border-gray mb-4 p-3">
                  <h3 className="font-bold text-[1.4rem]">Search for posts</h3>
                </div>
                <Search
                  value={query}
                  onChange={handleChange}
                  onSubmit={handleSubmit}
                />
                <div className="categories">
                  <div className="border border-gray my-4 p-3">
                    <ul>
                      {posts.map((post) => (
                        <li key={post.title}>{post.slug}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { posts },
  };
}
