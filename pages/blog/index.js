import { useState } from "react";
import BlogLanding from "components/BlogLanding";
import { getAllCategories, getAllPosts } from "lib/api/api";

export default function Home({ posts, categories }) {
  const [query, setQuery] = useState("");

  const handleChange = ({ target }) => {
    setQuery(target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(query);
  };

  return (
    <BlogLanding
      posts={posts}
      categories={categories}
      query={query}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}

export async function getStaticProps() {
  const categories = getAllCategories();
  const posts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
    "category",
  ]);

  return {
    props: { posts, categories },
  };
}
