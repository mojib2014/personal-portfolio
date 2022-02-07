import React, { ChangeEvent, FC } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useState } from "react";
import fs from "fs";
import path from "path";
import BlogLayout from "@/layouts/BlogLayout";
import generateRss from "@/lib/generate-rss";
import { getAllFilesFrontMatter } from "@/lib/mdx";
import { getAllTags } from "@/lib/tags";
import kebabCase from "@/lib/utils/kebabCase";
import { paginate } from "@/lib/utils/paginate";
import { PostType } from "@/interfaces/posts";
import { TagType } from "@/interfaces/tags";

const root = process.cwd();
const PAGE_SIZE = 5;

type Props = {
  posts: PostType[];
  tag: TagType;
};

const Tag = ({ posts, tag }: Props) => {
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  let filetered = posts;

  if (currentPage > Math.ceil(filetered.length / PAGE_SIZE)) setCurrentPage(1);

  if (currentPage < 1) setCurrentPage(1);

  const handleChange = (event: ChangeEvent) => {
    setQuery((event.target as HTMLInputElement).value);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    setCurrentPage(currentPage - 1);
  };

  if (query)
    filetered = posts.filter(
      ({ frontMatter }) =>
        frontMatter?.title +
        frontMatter?.summary +
        frontMatter.tags.join(" ").toLowerCase().includes(query.toLowerCase())
    );
  const displayPosts = paginate(filetered, currentPage, PAGE_SIZE);

  return (
    <BlogLayout
      posts={displayPosts}
      tag={tag}
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
};

export const getStaticPaths: GetStaticPaths = async () => {
  const tags = await getAllTags("blog");

  return {
    paths: Object.keys(tags).map((tag) => ({
      params: {
        tag,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const allPosts = await getAllFilesFrontMatter("blog");
  const filteredPosts = allPosts.filter(
    (post: PostType[]) =>
      post.draft !== true &&
      post.tags.map((t) => kebabCase(t)).includes(params.tag)
  );

  // rss
  if (filteredPosts.length > 0) {
    const rss = generateRss(filteredPosts, `tags/${params.tag}/feed.xml`);
    const rssPath = path.join(root, "public", "tags", params.tag);
    fs.mkdirSync(rssPath, { recursive: true });
    fs.writeFileSync(path.join(rssPath, "feed.xml"), rss);
  }

  return { props: { posts: filteredPosts, tag: params.tag } };
};

export default Tag;
