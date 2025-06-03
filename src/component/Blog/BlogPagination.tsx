import React from "react";
import type { BlogPaginationProps } from "../../types/type";

const BlogPagination: React.FC<BlogPaginationProps> = ({
  pagination,
  currentPage,
  onPageChange,
  onNextPage,
  onPrevPage,
  loading = false,
}) => {
  if (!pagination || pagination.lastPage <= 1) return null;

  const generatePageNumbers = (): (number | string)[] => {
    const pages: (number | string)[] = [];
    const maxVisiblePages = 5;
    const { lastPage } = pagination;

    if (lastPage <= maxVisiblePages) {
      for (let i = 1; i <= lastPage; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (currentPage > 3) {
        pages.push("...");
      }

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(lastPage - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        if (i !== 1 && i !== lastPage) {
          pages.push(i);
        }
      }

      if (currentPage < lastPage - 2) {
        pages.push("...");
      }

      if (lastPage > 1) {
        pages.push(lastPage);
      }
    }

    return pages;
  };

  return (
    <section id="blog-pagination" className="py-10">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <ul className="flex items-center space-x-2">
            {/* Prev button */}
            <li>
              <button
                onClick={onPrevPage}
                disabled={!pagination.hasPrev || loading}
                className={`w-10 h-10 rounded-full border text-gray-600 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-200 flex items-center justify-center ${
                  !pagination.hasPrev || loading
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                aria-label="Previous page"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            </li>

            {/* Page numbers */}
            {generatePageNumbers().map((page, index) => (
              <li key={index}>
                {page === "..." ? (
                  <span className="w-10 h-10 flex items-center justify-center text-gray-400 select-none">
                    ...
                  </span>
                ) : (
                  <button
                    onClick={() => onPageChange(page as number)}
                    disabled={loading}
                    aria-label={`Go to page ${page}`}
                    aria-current={currentPage === page ? "page" : undefined}
                    className={`w-10 h-10 rounded-full border transition-all duration-200 flex items-center justify-center font-medium ${
                      currentPage === page
                        ? "bg-orange-500 text-white border-orange-500"
                        : "text-gray-700 hover:bg-orange-500 hover:text-white hover:border-orange-500"
                    } ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                  >
                    {page}
                  </button>
                )}
              </li>
            ))}

            {/* Next button */}
            <li>
              <button
                onClick={onNextPage}
                disabled={!pagination.hasNext || loading}
                className={`w-10 h-10 rounded-full border text-gray-600 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-200 flex items-center justify-center ${
                  !pagination.hasNext || loading
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                aria-label="Next page"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BlogPagination;
