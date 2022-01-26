import { useState } from "react";
import BlogLanding from "components/BlogLanding";
import { getAllCategories, getAllPosts, getCategoryPosts } from "lib/api/api";

export default function Category({ posts, categories }) {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState(posts);

  const handleChange = ({ target }) => {
    setQuery(target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFiltered(posts.filter((p) => p.slug.includes(query)));
  };

  return (
    <BlogLanding
      posts={filtered}
      categories={categories}
      query={query}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}

export async function getStaticProps({ params }) {
  const categories = getAllCategories();
  const posts = getCategoryPosts(params.category, [
    "title",
    "date",
    "slug",
    "category",
    "author",
    "ogImage",
    "coverImage",
  ]);

  return {
    props: { posts, categories },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["category"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          category: post.category,
        },
      };
    }),
    fallback: false,
  };
}
