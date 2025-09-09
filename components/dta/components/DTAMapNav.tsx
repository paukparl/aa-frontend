import Link from "next/link";
import { routes } from "@/lib/routes";

type DTAMapNavProps = {
  className?: string;
};

export const DTAMapNav = ({ className }: DTAMapNavProps) => {
  return (
    <div className={className}>
      <div className="flex w-[100%] border-y border-dotted border-white py-[10px]">
        <h1 className="h1">Department of Tropical Architecture Archive</h1>
      </div>
      {/* DESKTOP NAV ITEMS */}
      <div className="hidden h-[70px] w-[100%] items-center justify-between border-b border-dotted border-white 700:flex">
        <div className="flex gap-[50px]">
          <Link
            href={routes.dta}
            className="decoration-dotted underline-offset-5 hover:underline"
            scroll={false}
          >
            <span className="body">Map</span>
          </Link>
          <Link
            href={routes.dtaPeople}
            className="decoration-dotted underline-offset-5 hover:underline"
            scroll={false}
          >
            <span className="body">People</span>
          </Link>
          <Link
            href={routes.dtaPractices}
            className="decoration-dotted underline-offset-5 hover:underline"
            scroll={false}
          >
            <span className="body">Practices</span>
          </Link>
          <Link
            href={routes.dtaInstitutions}
            className="decoration-dotted underline-offset-5 hover:underline"
            scroll={false}
          >
            <span className="body">Institutions</span>
          </Link>
          <Link
            href={routes.dtaCollections}
            className="decoration-dotted underline-offset-5 hover:underline"
            scroll={false}
          >
            <span className="body">Collections</span>
          </Link>
          <Link
            href={routes.dtaPage("about")}
            className="decoration-dotted underline-offset-5 hover:underline"
            scroll={false}
          >
            <span className="body">About</span>
          </Link>
        </div>
        <img src="/icons/search.svg" />
      </div>
      {/* MOBILE DROPDOWN */}
      <div className="flex w-[100%] items-center justify-between border-b border-dotted border-white py-[7px] 700:hidden">
        <span className="body !text-20">Map</span>
        <img src="/icons/dropdown.svg" />
      </div>
    </div>
  );
};
