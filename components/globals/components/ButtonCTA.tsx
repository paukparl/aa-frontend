import Link from "next/link";
import * as React from "react";

type ButtonCTAProps = { link: string; label: string; className?: string };

export const ButtonCTA = ({ link, label, className }: ButtonCTAProps) => {
  return (
    <div className={className}>
      <Link
        href={link}
        className="flex h-fit w-[100%] items-center justify-center rounded-[50px] border border-dotted px-30 py-20 text-center mono hover:border-solid 700:h-100 700:px-50 700:py-0"
      >
        {label}
      </Link>
    </div>
  );
};
