"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";
import { cn } from "@/lib/cn";
import { Schema } from "@/lib/schemas";
import { addSearchParamsEntries, composeUrl } from "@/lib/urlUtils";

type PaginationProps = {
  className?: string;
  searchParamKey: "0_page" | "1_page" | "2_page";
  pagination: Schema<"pagination">;
};

export const Pagination = ({
  className,
  searchParamKey,
  pagination,
}: PaginationProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { page, pageCount } = pagination;

  const getPageItems = () => {
    if (pageCount <= 5) {
      return [...Array(pageCount)].map((_, i) => i + 1);
    }

    const pages = [];

    if (page <= 3) {
      pages.push(1, 2, 3);
      pages.push("...");
      pages.push(pageCount);
      return pages;
    }

    if (page >= pageCount - 2) {
      pages.push(1);
      pages.push("...");
      for (let i = pageCount - 2; i <= pageCount; i++) {
        pages.push(i);
      }
      return pages;
    }

    pages.push(1);
    pages.push("...");
    pages.push(page - 1, page, page + 1);
    pages.push("...");
    pages.push(pageCount);
    return pages;
  };

  const pageItems = getPageItems();

  return (
    <nav
      aria-label="Pagination Navigation pt-[20px] 700:pt-[30px]"
      className={className}
    >
      <ul className="m-0 flex items-center gap-[10px] p-0 700:gap-[25px]">
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
              <Link
                className={cn(
                  "cursor-pointer",
                  page === item &&
                    "underline decoration-dotted underline-offset-[3px]",
                )}
                href={composeUrl({
                  path: pathname,
                  params: addSearchParamsEntries(searchParams, {
                    [searchParamKey]: item,
                  }),
                })}
                scroll={false}
              >
                <span className="mono">{item.toString()}</span>
              </Link>
            </li>
          ),
        )}
        <li>
          <LinkOrDisabled
            href={
              page === 1
                ? undefined
                : composeUrl({
                    path: pathname,
                    params: addSearchParamsEntries(searchParams, {
                      [searchParamKey]: page - 1,
                    }),
                  })
            }
          >
            <span className="mono">Prev</span>
          </LinkOrDisabled>
        </li>
        <li>
          <LinkOrDisabled
            href={
              page === pageCount
                ? undefined
                : composeUrl({
                    path: pathname,
                    params: addSearchParamsEntries(searchParams, {
                      [searchParamKey]: page + 1,
                    }),
                  })
            }
          >
            <span className="mono">Next</span>
          </LinkOrDisabled>
        </li>
      </ul>
    </nav>
  );
};

function LinkOrDisabled({
  href,
  children,
}: {
  href?: string;
  children: React.ReactNode;
}) {
  if (href) {
    return (
      <Link href={href} scroll={false}>
        {children}
      </Link>
    );
  }
  return <button disabled>{children}</button>;
}
