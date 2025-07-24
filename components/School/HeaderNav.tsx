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
  const routeDict = [
    {
      programmes: {
        desktopAltLabel: null,
        active: activeRoute === "programmes",
      },
    },
    {
      apply: {
        desktopAltLabel: null,
        active: activeRoute === "apply",
      },
    },
    {
      facilities: {
        desktopAltLabel: null,
        active: activeRoute === "facilities",
      },
    },
    {
      calendar: {
        desktopAltLabel: "Academic Calendar",
        active: activeRoute === "calendar",
      },
    },
    {
      locations: {
        desktopAltLabel: null,
        active: activeRoute === "locations",
      },
    },
    {
      people: {
        desktopAltLabel: null,
        active: activeRoute === "people",
      },
    },
    {
      about: {
        desktopAltLabel: null,
        active: activeRoute === "about",
      },
    },
    {
      governance: {
        desktopAltLabel: null,
        active: activeRoute === "governance",
      },
    },
    {
      documents: {
        desktopAltLabel: null,
        active: activeRoute === "documents",
      },
    },
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
