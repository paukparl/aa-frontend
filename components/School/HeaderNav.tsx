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
type HeaderNavProps = {
  className?: string;
  activeRoute: route;
};

export const HeaderNav = ({ className, activeRoute }: HeaderNavProps) => {
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
          href={`/school/${route}`}
          className={clsx(
            activeRoute === route && "bg-school-tint",
            "mt-[-1px] ml-[-1px] block border-[1px] border-school-tint py-[7px] pl-[20px] capitalize hover:bg-school-tint",
          )}
        >
          {route === "calendar" ? (
            <span className="hidden mono md:inline">Academic Calendar</span>
          ) : (
            <div className="mono">{route}</div>
          )}
        </Link>
      ))}
    </div>
  );
};
