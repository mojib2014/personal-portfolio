import { useRouter } from "next/router";
import Layout from "./Layout";
import Card from "./common/Card";
import Search from "./Search";
import Categories from "./Categories";
import SubNav from "./common/SubNav";

export default function BlogLanding({
  posts,
  categories,
  query,
  onChange,
  onSubmit,
}) {
  const router = useRouter();
  return (
    <Layout
      title="Mojib | Blog"
      description="This is my personal blog for my learning journey"
    >
      <main>
        <div className="py-[120px]">
          <div className="container mx-w-xl">
            {/* <SubNav router={router} /> */}
            <h1 className="font-bold text-5xl text-center mt-8 mb-16">
              Trending Posts
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-[800px_minmax(200px,_1fr)] auto-rows-auto items-start gap-8 w-[100%]">
              <div className="right-col w-[100%]">
                {posts.map((post) => (
                  <Card key={post.title} item={post} />
                ))}
              </div>
              <div className="left-col flex flex-col items-center border border-gray p-4 w-[100%]">
                <Search value={query} onChange={onChange} onSubmit={onSubmit} />
                <Categories categories={categories} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
