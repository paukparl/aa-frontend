import clsx from "clsx";
import React, { useState } from "react";
import { Mono } from "@/components/Typography/Mono";

type PaginationProps = {
  totalPages: number;
  className?: string;
};

export const FooterPagination = ({
  totalPages,
  className,
}: PaginationProps) => {
  const [activePage, setActivePage] = useState(1);

  const handleClick = (page: number) => {
    if (page < 1 || page > totalPages || page === activePage) return;
    setActivePage(page);
  };

  const getPageItems = () => {
    if (totalPages <= 5) {
      return [...Array(totalPages)].map((_, i) => i + 1);
    }

    const pages = [];

    if (activePage <= 3) {
      pages.push(1, 2, 3);
      pages.push("...");
      pages.push(totalPages);
      return pages;
    }

    if (activePage >= totalPages - 2) {
      pages.push(1);
      pages.push("...");
      for (let i = totalPages - 2; i <= totalPages; i++) {
        pages.push(i);
      }
      return pages;
    }

    pages.push(1);
    pages.push("...");
    pages.push(activePage - 1, activePage, activePage + 1);
    pages.push("...");
    pages.push(totalPages);
    return pages;
  };

  const pageItems = getPageItems();

  return (
    <nav
      aria-label="Pagination Navigation pt-[20px] sm:pt-[30px]"
      className={clsx(className)}
    >
      <ul className="m-0 flex items-center gap-[10px] p-0 sm:gap-[25px]">
        <Mono>Page:</Mono>
        {pageItems.map((item, ind) =>
          item === "..." ? (
            <li
              key={`dots-${ind}`}
              style={{ padding: "0 8px", userSelect: "none" }}
            >
              <Mono>...</Mono>
            </li>
          ) : (
            <li key={item}>
              <button
                className={clsx(
                  "cursor-pointer",
                  activePage === item &&
                    "underline decoration-dotted underline-offset-[3px]",
                )}
                onClick={() => handleClick(item as number)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <Mono>{item.toString()}</Mono>
              </button>
            </li>
          ),
        )}
        <li>
          <button
            disabled={activePage === 1}
            className="cursor-pointer"
            onClick={() => handleClick(activePage - 1)}
          >
            <Mono>Prev</Mono>
          </button>
        </li>
        <li>
          <button
            disabled={activePage === totalPages}
            className="cursor-pointer"
            onClick={() => handleClick(activePage + 1)}
          >
            <Mono>Next</Mono>
          </button>
        </li>
      </ul>
    </nav>
  );
};
