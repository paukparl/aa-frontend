import clsx from "clsx";
import Link from "next/link";
import * as React from "react";

type ButtonCTAProps = { link: string; label: string; className?: string };

export const ButtonCTA = ({ link, label, className }: ButtonCTAProps) => {
  return (
    <Link
      href={link}
      className={clsx(
        className,
        "flex h-[100px] w-[100%] items-center justify-center rounded-[50px] border border-dotted mono hover:border-solid",
      )}
    >
      {label}
    </Link>
  );
};
