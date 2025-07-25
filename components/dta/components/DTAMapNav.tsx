import clsx from "clsx";
import Link from "next/link";
import { Body } from "@/components/Typography/Body";
import { H1 } from "@/components/Typography/H1";
import { routes } from "@/lib/routes";

type DTAMapNavProps = {
  className?: string;
};

export const DTAMapNav = ({ className }: DTAMapNavProps) => {
  return (
    <div className={clsx(className)}>
      <div className="flex w-[100%] border-y border-dotted border-white py-[10px]">
        <H1>Department of Tropical Architecture Archive</H1>
      </div>
      {/* DESKTOP NAV ITEMS */}
      <div className="hidden h-[70px] w-[100%] items-center justify-between border-b border-dotted border-white sm:flex">
        <div className="flex gap-[50px]">
          <Link
            href={routes.ground("dta")}
            className="decoration-dotted underline-offset-5 hover:underline"
            scroll={false}
          >
            <Body>Map</Body>
          </Link>
          <Link
            href={routes.tipin1("dta", "people")}
            className="decoration-dotted underline-offset-5 hover:underline"
            scroll={false}
          >
            <Body>People</Body>
          </Link>
          <Link
            href={routes.tipin1("dta", "practices")}
            className="decoration-dotted underline-offset-5 hover:underline"
            scroll={false}
          >
            <Body>Practices</Body>
          </Link>
          <Link
            href={routes.tipin1("dta", "institutions")}
            className="decoration-dotted underline-offset-5 hover:underline"
            scroll={false}
          >
            <Body>Institutions</Body>
          </Link>
          <Link
            href={routes.tipin1("dta", "collections")}
            className="decoration-dotted underline-offset-5 hover:underline"
            scroll={false}
          >
            <Body>Collections</Body>
          </Link>
          <Link
            href={routes.tipin1("dta", "about")}
            className="decoration-dotted underline-offset-5 hover:underline"
            scroll={false}
          >
            <Body>About</Body>
          </Link>
        </div>
        <img src="/icons/search.svg" />
      </div>
      {/* MOBILE DROPDOWN */}
      <div className="flex w-[100%] items-center justify-between border-b border-dotted border-white py-[7px] sm:hidden">
        <Body className="!text-[20px]">Map</Body>
        <img src="/icons/dropdown.svg" />
      </div>
    </div>
  );
};
