import Link from "next/link";
import * as React from "react";
import { cn } from "@/lib/cn";
import { routes, schoolGroundSlugs } from "@/lib/routes";

const links = [
  { title: "Programmes", slug: "school-programmes" },
  { title: "Apply", slug: "school-apply" },
  { title: "Facilities", slug: "school-facilities" },
  { title: "Academic Calendar", slug: "school-calendar" },
  { title: "Locations", slug: "school-locations" },
  { title: "People", slug: "school-people" },
  { title: "About", slug: "school-about" },
  { title: "Governance", slug: "school-governance" },
  { title: "Documents", slug: "school-documents" },
] satisfies { title: string; slug: (typeof schoolGroundSlugs)[number] }[];

type SchoolNavProps = {
  className?: string;
  activeSlug: (typeof schoolGroundSlugs)[number];
};

export const SchoolNav = ({ className, activeSlug }: SchoolNavProps) => {
  return (
    <div
      className={cn(
        "mb-[50px] grid grid-cols-2 md:mb-[100px] md:grid-cols-3",
        className,
      )}
    >
      {links.map(({ title, slug }, index) => (
        <Link
          key={index}
          href={routes.ground(slug)}
          className={cn(
            "mt-[-1px] ml-[-1px] block border-[1px] border-school-tint py-[7px] pl-[20px] capitalize hover:bg-school-tint",
            slug === activeSlug && "bg-school-tint",
          )}
        >
          <span className="mono">{title}</span>
        </Link>
      ))}
    </div>
  );
};
