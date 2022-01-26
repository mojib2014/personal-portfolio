import Link from "next/link";

export default function Categories({ categories }) {
  return (
    <div className="categories w-[100%]">
      <div className="border border-gray my-4 p-2">
        <h3 className="text-[1.6rem] font-bold">Categories</h3>
        <ul className="list-square ml-5">
          {categories.map((category) => (
            <li key={category} className="my-3">
              <Link
                as={`/blog/categories/${category}`}
                href="/blog/categories/[category]"
              >
                <a className="text-[1.2rem] block hover:text-[#0070f3] hover:underline">
                  {category}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
