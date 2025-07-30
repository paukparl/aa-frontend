import clsx from "clsx";
import Link from "next/link";
import { routes } from "@/lib/routes";

type DTAMapNavProps = {
  className?: string;
};

export const DTAMapNav = ({ className }: DTAMapNavProps) => {
  return (
    <div className={clsx(className)}>
      <div className="flex w-[100%] border-y border-dotted border-white py-[10px]">
        <h1>Department of Tropical Architecture Archivee</h1>
      </div>
      {/* DESKTOP NAV ITEMS */}
      <div className="700:flex hidden h-[70px] w-[100%] items-center justify-between border-b border-dotted border-white">
        <div className="flex gap-[50px]">
          <Link
            href={routes.ground("dta")}
            className="decoration-dotted underline-offset-5 hover:underline"
            scroll={false}
          >
            <span className="body">Map</span>
          </Link>
          <Link
            href={routes.tipin1("dta", "people")}
            className="decoration-dotted underline-offset-5 hover:underline"
            scroll={false}
          >
            <span className="body">People</span>
          </Link>
          <Link
            href={routes.tipin1("dta", "practices")}
            className="decoration-dotted underline-offset-5 hover:underline"
            scroll={false}
          >
            <span className="body">Practices</span>
          </Link>
          <Link
            href={routes.tipin1("dta", "institutions")}
            className="decoration-dotted underline-offset-5 hover:underline"
            scroll={false}
          >
            <span className="body">Institutions</span>
          </Link>
          <Link
            href={routes.tipin1("dta", "collections")}
            className="decoration-dotted underline-offset-5 hover:underline"
            scroll={false}
          >
            <span className="body">Collections</span>
          </Link>
          <Link
            href={routes.tipin1("dta", "about")}
            className="decoration-dotted underline-offset-5 hover:underline"
            scroll={false}
          >
            <span className="body">About</span>
          </Link>
        </div>
        <img src="/icons/search.svg" />
      </div>
      {/* MOBILE DROPDOWN */}
      <div className="700:hidden flex w-[100%] items-center justify-between border-b border-dotted border-white py-[7px]">
        <span className="body !text-20">Map</span>
        <img src="/icons/dropdown.svg" />
      </div>
    </div>
  );
};
