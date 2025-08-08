import clsx from "clsx";
import Link from "next/link";
import * as React from "react";

type route =
  | "programmes"
  | "apply"
  | "facilities"
  | "calendar"
  | "locations"
  | "people"
  | "about"
  | "governance"
  | "documents";
type SchoolNavProps = {
  className?: string;
  activeRoute?: route;
};

export const SchoolNav = ({ className, activeRoute }: SchoolNavProps) => {
  const routes = [
    "programmes",
    "apply",
    "facilities",
    "calendar",
    "locations",
    "people",
    "about",
    "governance",
    "documents",
  ];
  return (
    <div
      className={clsx(
        className,
        "mb-[50px] grid grid-cols-2 md:mb-[100px] md:grid-cols-3",
      )}
    >
      {routes.map((route, index) => (
        <Link
          key={index}
          href={`/school-${route}`}
          className={clsx(
            activeRoute === route && "bg-school-tint",
            "mt-[-1px] ml-[-1px] block border-[1px] border-school-tint py-[7px] pl-[20px] capitalize hover:bg-school-tint",
          )}
        >
          {route === "calendar" ? (
            <span className="mono">
              <span className="hidden 700:inline">Academic </span>Calendar
            </span>
          ) : (
            <span className="mono">{route}</span>
          )}
        </Link>
      ))}
    </div>
  );
};
