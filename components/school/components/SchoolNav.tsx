"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { cn } from "@/lib/cn";
import { parseRoute, routes } from "@/lib/routes";

const links = [
  {
    title: "Programmes",
    href: routes.schoolProgrammes,
    match: (pathname: string) =>
      parseRoute(pathname)?.ground === "schoolProgrammes",
  },
  {
    title: "Apply",
    href: routes.schoolApply,
    match: (pathname: string) => parseRoute(pathname)?.ground === "schoolApply",
  },
  {
    title: "Facilities",
    href: routes.schoolFacilities,
    match: (pathname: string) =>
      parseRoute(pathname)?.ground === "schoolFacilities",
  },
  {
    title: "Academic Calendar",
    href: routes.schoolCalendar,
    match: (pathname: string) =>
      parseRoute(pathname)?.ground === "schoolCalendar",
  },
  {
    title: "Locations",
    href: routes.schoolLocations,
    match: (pathname: string) =>
      parseRoute(pathname)?.ground === "schoolLocations",
  },
  {
    title: "People",
    href: routes.schoolPeople,
    match: (pathname: string) =>
      parseRoute(pathname)?.ground === "schoolPeople",
  },
  {
    title: "About",
    href: routes.schoolPage("about"),
    match: (pathname: string) => parseRoute(pathname)?.ground === "schoolAbout",
  },
  {
    title: "Governance",
    href: routes.schoolGovernance,
    match: (pathname: string) =>
      parseRoute(pathname)?.ground === "schoolGovernance",
  },
  {
    title: "Documents",
    href: routes.schoolDocuments,
    match: (pathname: string) =>
      parseRoute(pathname)?.ground === "schoolDocuments",
  },
];

export const SchoolNav = ({ className }: { className?: string }) => {
  const pathname = usePathname();
  return (
    <div
      className={cn(
        "mb-[50px] grid grid-cols-2 md:mb-[100px] md:grid-cols-3",
        className,
      )}
    >
      {links.map(({ title, href, match }, index) => (
        <Link
          key={index}
          href={href}
          className={cn(
            "mt-[-1px] ml-[-1px] block border-[1px] border-school-tint py-[7px] pl-[20px] capitalize hover:bg-school-tint",
            match(pathname) && "bg-school-tint",
          )}
        >
          <span className="mono">{title}</span>
        </Link>
      ))}
    </div>
  );
};
