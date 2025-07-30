"use client";

import clsx from "clsx";
import React from "react";

type PaginationProps = {
  totalPages: number;
  className?: string;
  page: number;
  onPageChange: (page: number) => void;
};

export const Pagination = ({
  totalPages,
  className,
  page,
  onPageChange,
}: PaginationProps) => {
  const handleClick = (page: number) => {
    if (page < 1 || page > totalPages || page === page) return;
    onPageChange(page);
  };

  const getPageItems = () => {
    if (totalPages <= 5) {
      return [...Array(totalPages)].map((_, i) => i + 1);
    }

    const pages = [];

    if (page <= 3) {
      pages.push(1, 2, 3);
      pages.push("...");
      pages.push(totalPages);
      return pages;
    }

    if (page >= totalPages - 2) {
      pages.push(1);
      pages.push("...");
      for (let i = totalPages - 2; i <= totalPages; i++) {
        pages.push(i);
      }
      return pages;
    }

    pages.push(1);
    pages.push("...");
    pages.push(page - 1, page, page + 1);
    pages.push("...");
    pages.push(totalPages);
    return pages;
  };

  const pageItems = getPageItems();

  return (
    <nav
      aria-label="Pagination Navigation pt-[20px] 700:pt-[30px]"
      className={clsx(className)}
    >
      <ul className="700:gap-[25px] m-0 flex items-center gap-[10px] p-0">
        <span className="mono">Page:</span>
        {pageItems.map((item, ind) =>
          item === "..." ? (
            <li
              key={`dots-${ind}`}
              style={{ padding: "0 8px", userSelect: "none" }}
            >
              <span className="mono">...</span>
            </li>
          ) : (
            <li key={item}>
              <button
                className={clsx(
                  "cursor-pointer",
                  page === item &&
                    "underline decoration-dotted underline-offset-[3px]",
                )}
                onClick={() => handleClick(item as number)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <span className="mono">{item.toString()}</span>
              </button>
            </li>
          ),
        )}
        <li>
          <button
            disabled={page === 1}
            className="cursor-pointer"
            onClick={() => handleClick(page - 1)}
          >
            <span className="mono">Prev</span>
          </button>
        </li>
        <li>
          <button
            disabled={page === totalPages}
            className="cursor-pointer"
            onClick={() => handleClick(page + 1)}
          >
            <span className="mono">Next</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};
