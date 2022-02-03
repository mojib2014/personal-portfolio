import Layout from "@/components/Layout";
import SectionContainer from "@/components/SectionContainer";
import Post from "@/components/Post";
import Search from "@/components/Search";
import PageTitle from "@/components/PageTitle";
import siteMetadata from "@/data/siteMetadata";
import Pagination from "@/components/Pagination";

export default function BlogLayout({
  posts,
  tag,
  query,
  onQueryChange,
  itemsCount,
  pageSize,
  currentPage,
  onPageChange,
  onNext,
  onPrevious,
}) {
  // Capitalize first letter and convert space to dash
  const title = tag && tag[0].toUpperCase() + tag.split(" ").join("-").slice(1);

  return (
    <Layout
      title={`${title || "Blog"} - ${siteMetadata.author}`}
      description={`${tag} tags - ${siteMetadata.author}`}
      ogImage="/profile_pic.png"
    >
      <SectionContainer>
        <div className="divide-y py-section-y">
          <div className="pt-6 pb-8 space-y-2 md:space-y-5">
            <PageTitle>{title ? title : "All Posts"}</PageTitle>
            <Search query={query} onChange={onQueryChange} />
          </div>
          <ul>
            {!posts.length && "No posts found."}
            {posts.map((frontMatter) => (
              <Post key={frontMatter.slug} item={frontMatter} />
            ))}
          </ul>
          <Pagination
            currentPage={currentPage}
            itemsCount={itemsCount}
            pageSize={pageSize}
            onPageChange={onPageChange}
            onNext={onNext}
            onPrevious={onPrevious}
          />
        </div>
      </SectionContainer>
    </Layout>
  );
}
