import clsx from "clsx";
import React, { useState } from "react";
import { Body } from "@/components/Typography/Body";

type CardPublicationProps = {
  title: string;
  author: string;
  className?: string;
  imgSrc: string;
};
export default ({ title, author, className, imgSrc }: CardPublicationProps) => {
  return (
    <div>
      <img src={imgSrc} className="w-ful max-h-[70vh] object-contain" />
      <Body
        children={title}
        className="text-dta-about-foreground block pt-[10px] font-bold"
      />
      <Body children={author} className="text-dta-about-foreground block" />
    </div>
  );
};
