import clsx from "clsx";
import Link from "next/link";
import { Body } from "@/components/Typography/Body";
import { H1 } from "@/components/Typography/H1";

type DTAMapNavProps = {
  className?: string;
};

export const DTAMapNav = ({ className }: DTAMapNavProps) => {
  return (
    <div
      className={clsx(
        className,
        "text-dta-map-foreground bg-dta-map-background",
      )}
    >
      <div className="flex w-[100%] border-y border-dotted border-white py-[10px]">
        <H1 children="Department of Tropical Architecture Archive" />
      </div>
      {/* DESKTOP NAV ITEMS */}
      <div className="hidden h-[70px] w-[100%] items-center justify-between border-b border-dotted border-white sm:flex">
        <div className="flex gap-[50px]">
          <Link
            href=""
            className="decoration-dotted underline-offset-5 hover:underline"
          >
            <Body children="Map" />
          </Link>
          <Link
            href=""
            className="decoration-dotted underline-offset-5 hover:underline"
          >
            <Body children="People" />
          </Link>
          <Link
            href=""
            className="decoration-dotted underline-offset-5 hover:underline"
          >
            <Body children="Practices" />
          </Link>
          <Link
            href=""
            className="decoration-dotted underline-offset-5 hover:underline"
          >
            <Body children="Institutions" />
          </Link>
          <Link
            href=""
            className="decoration-dotted underline-offset-5 hover:underline"
          >
            <Body children="Collections" />
          </Link>
          <Link
            href=""
            className="decoration-dotted underline-offset-5 hover:underline"
          >
            <Body children="About" />
          </Link>
        </div>
        <img src="/icons/search.svg" />
      </div>
      {/* MOBILE DROPDOWN */}
      <div className="flex w-[100%] items-center justify-between border-b border-dotted border-white py-[7px] sm:hidden">
        <Body children="Map" className="!text-[20px]" />
        <img src="/icons/dropdown.svg" />
      </div>
    </div>
  );
};
