import clsx from "clsx";
import React from "react";

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
      className={clsx(
        className,
        "700:justify-center flex w-full justify-start",
      )}
    >
      <div className="700:w-fit w-[50%]">
        <img src={imgSrc} className="max-h-[70vh] w-full object-contain" />
        <span className="body text-dta-about-foreground font-700 block pt-[10px]">
          {title}
        </span>
        <span className="body text-dta-about-foreground block">{author}</span>
      </div>
    </div>
  );
};
