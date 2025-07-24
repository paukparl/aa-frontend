import clsx from "clsx";
import React from "react";
import { Body } from "@/components/Typography/Body";

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
      className={clsx(className, "flex w-full justify-start sm:justify-center")}
    >
      <div className="w-[50%] sm:w-fit">
        <img src={imgSrc} className="max-h-[70vh] w-full object-contain" />
        <Body className="text-dta-about-foreground block pt-[10px] font-bold">
          {title}
        </Body>
        <Body className="text-dta-about-foreground block">{author}</Body>
      </div>
    </div>
  );
};
