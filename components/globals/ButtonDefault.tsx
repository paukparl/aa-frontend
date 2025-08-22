import Link from "next/link";
import * as React from "react";
import { cn } from "@/lib/cn";

type ButtonViewMoreProps = {
  className?: string;
  children: string;
  href: string;
};

export const ButtonViewMore = ({
  className,
  children,
  href,
}: ButtonViewMoreProps) => {
  return (
    <Link
      href={href}
      className={cn(
        className,
        "block w-fit border border-dotted px-10 py-5 mono hover:border-solid",
      )}
    >
      {children}
    </Link>
  );
};
