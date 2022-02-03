import _ from "lodash";

export default function Pagination({
  itemsCount,
  pageSize,
  currentPage,
  onPageChange,
  onNext,
  onPrevious,
}) {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);
  return (
    <div className="pt-6 pb-8 space-y-2 md:space-y-5">
      <nav className="">
        <ul className="flex items-center gap-3">
          <li>
            <button
              disabled={currentPage === 1}
              className="bg-sky-400 px-4 py-2 rounded-md text-gray-50 font-semibold cursor-pointer disabled:bg-sky-200 disabled:cursor-not-allowed"
              onClick={onPrevious}
            >
              Previous
            </button>
          </li>
          {pages.map((page) => (
            <li key={page}>
              <a
                onClick={() => onPageChange(page)}
                className={`${
                  page === currentPage
                    ? "bg-primary-500"
                    : "bg-primary-200 overflow-x-hidden"
                } text-gray-50 px-2 py-1 visited:bg-primary-100 rounded-md cursor-pointer font-semibold overflow-x-hidden`}
              >
                {page}
              </a>
            </li>
          ))}
          <li>
            <button
              disabled={currentPage === pagesCount}
              className="bg-sky-400 px-4 py-2 rounded-md text-gray-50 font-semibold cursor-pointer disabled:bg-sky-200 disabled:cursor-not-allowed"
              onClick={onNext}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
