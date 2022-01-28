import { useState } from "react";
import BlogLanding from "components/BlogLanding";
import { getAllFilesFrontMatter } from "@/lib/api/mdx";
import BlogLayout from "@/layouts/blogLayout";

const POSTS_PER_PAGE = 5;

export default function Home({ posts, initialDisplayPosts, pagination }) {
  const [query, setQuery] = useState("");

  const handleChange = ({ target }) => {
    setQuery(target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(query);
  };

  return (
    <BlogLayout
      posts={posts}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      query={query}
      title="Blog"
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
    // <BlogLanding
    //   posts={posts}
    //   initialDisplayPosts={initialDisplayPosts}
    //   pagination={pagination}
    //   title="All posts"
    //   query={query}
    //   onChange={handleChange}
    //   onSubmit={handleSubmit}
    // />
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("blog");
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE);
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  };

  return {
    props: { posts, initialDisplayPosts, pagination },
  };
}
