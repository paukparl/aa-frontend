import clsx from "clsx";
import Link from "next/link";
import * as React from "react";
import { Mono } from "@/components/Typography/Mono";

type routes =
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
  activeRoute: routes;
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
            "border-school-tint hover:bg-school-tint mt-[-1px] ml-[-1px] block border-[1px] py-[7px] pl-[20px] capitalize",
          )}
        >
          {route === "calendar" ? (
            <Mono>
              <span className="hidden md:inline">Academic </span>Calendar
            </Mono>
          ) : (
            <Mono>{route}</Mono>
          )}
        </Link>
      ))}
    </div>
  );
};
