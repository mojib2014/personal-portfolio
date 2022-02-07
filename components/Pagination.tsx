import { PaginationInterface } from "@/interfaces/pagination";
import _ from "lodash";

const Pagination = ({
  itemsCount,
  pageSize,
  currentPage,
  onPageChange,
  onNext,
  onPrevious,
}: PaginationInterface) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);
  return (
    <div className="space-y-2 pt-6 pb-8 md:space-y-5">
      <nav className="">
        <ul className="flex items-center gap-3">
          <li>
            <button
              disabled={currentPage === 1}
              className="cursor-pointer rounded-md bg-sky-400 px-3 py-2 font-semibold text-gray-50 disabled:cursor-not-allowed disabled:bg-sky-200"
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
                    : "overflow-x-hidden bg-primary-200"
                } cursor-pointer overflow-x-hidden rounded-md px-2 py-1 font-semibold text-gray-50 visited:bg-primary-100`}
              >
                {page}
              </a>
            </li>
          ))}
          <li>
            <button
              disabled={currentPage === pagesCount}
              className="cursor-pointer rounded-md bg-sky-400 px-3 py-2 font-semibold text-gray-50 disabled:cursor-not-allowed disabled:bg-sky-200"
              onClick={onNext}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
