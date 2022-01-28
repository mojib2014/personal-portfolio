import Link from "next/link";
import Layout from "@/components/Layout";
import SectionContainer from "@/components/SectionContainer";
import Card from "@/components/common/Card";
import Search from "@/components/Search";

export default function BlogLayout({
  posts,
  query,
  initialDisplayPosts,
  pagination,
  title,
  onChange,
  onSubmit,
}) {
  return (
    <Layout>
      <article className="divide-y pt-90">
        <SectionContainer>
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            All Posts
          </h1>
          <div className="space-x-2 md:space-x-5">
            <div className="max-w-">
              {posts.map((post) => (
                <Card key={post.title} item={post} />
              ))}
            </div>
            <div className="max-w-md flex flex-col items-center border border-gray p-4">
              <Search value={query} onChange={onChange} onSubmit={onSubmit} />
            </div>
          </div>
        </SectionContainer>
      </article>
    </Layout>
  );
}
