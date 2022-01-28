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
  const filteredBlogPosts = posts.filter((frontMatter) => {
    const searchContent =
      frontMatter.title + frontMatter.summary + frontMatter.tags.join(" ");
    return searchContent.toLowerCase().includes(query.toLowerCase());
  });

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && !query
      ? initialDisplayPosts
      : filteredBlogPosts;

  return (
    <Layout>
      <SectionContainer>
        <article className="divide-y pt-90 mt-90">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            All Posts
          </h1>
          <div className="space-x-2 md:space-x-5 space-y-2 md:space-y-5 lg:grid lg:grid-cols-4 lg:space-y-0 lg:items-baseline">
            <div className="space-y-3 xl:col-span-3">
              {displayPosts.map((post) => (
                <Card key={post.title} item={post} />
              ))}
            </div>
            <dl className="flex flex-col items-center border border-gray p-4">
              <Search value={query} onChange={onChange} onSubmit={onSubmit} />
            </dl>
          </div>
        </article>
      </SectionContainer>
    </Layout>
  );
}
