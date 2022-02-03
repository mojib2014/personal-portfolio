import { useState } from "react";
import _ from "lodash";
import BlogLayout from "@/layouts/blogLayout";
import { getAllFilesFrontMatter } from "@/lib/mdx";
import { paginate } from "@/lib/utils/paginate";

const PAGE_SIZE = 4;

export default function Home({ posts }) {
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  let filetered = posts;

  if (currentPage > Math.ceil(filetered.length / PAGE_SIZE)) setCurrentPage(1);

  if (currentPage < 1) setCurrentPage(1);

  const handleChange = ({ target }) => {
    setQuery(target.value);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    setCurrentPage(currentPage - 1);
  };

  if (query)
    filetered = posts.fileter(
      (p) =>
        p.title +
        p.summary +
        p.tags.join(" ").toLowerCase().includes(query.toLowerCase()),
    );
  const displayPosts = paginate(filetered, currentPage, PAGE_SIZE);
  return (
    <BlogLayout
      posts={displayPosts}
      itemsCount={filetered.length}
      pageSize={PAGE_SIZE}
      currentPage={currentPage}
      onPageChange={handlePageChange}
      onNext={handleNext}
      onPrevious={handlePrevious}
      query={query}
      onQueryChange={handleChange}
    />
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("blog");

  return {
    props: { posts },
  };
}
