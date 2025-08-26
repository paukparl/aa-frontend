import Image from "next/image";
import React from "react";
import { cn } from "@/lib/cn";

type CardPublicationProps = {
  title: string;
  author: string;
  className?: string;
  imgSrc: string;
};
export const CardPublication = ({
  title,
  author,
  className,
  imgSrc,
}: CardPublicationProps) => {
  return (
    <div
      className={cn("flex w-full justify-start 700:justify-center", className)}
    >
      <div className="relative w-[50%] 700:w-fit">
        <Image
          src={imgSrc}
          alt=""
          width="1200"
          height="1000"
          className="max-h-[70vh] w-full object-contain"
        />
        <span className="block pt-[10px] body font-700 text-dta-about-foreground">
          {title}
        </span>
        <span className="block body text-dta-about-foreground">{author}</span>
      </div>
    </div>
  );
};
