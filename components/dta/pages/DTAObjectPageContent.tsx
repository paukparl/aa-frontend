"use client";

import * as React from "react";
import { Body } from "@/components/Typography/Body";
import { H1 } from "@/components/Typography/H1";
import { MediaGallery } from "@/components/globals/components/MediaGalleryNew";
import { cn } from "@/lib/cn";
import { Schema } from "@/lib/schemas";

type DTAObjectPageContentProps = {
  object: Schema<"dtaObjectDetail">;
};

export const DTAObjectPageContent = ({ object }: DTAObjectPageContentProps) => {
  return (
    <div className="flex flex-col gap-[20px] p-24 sm:gap-[30px]">
      <H1 tipIn>{object.title}</H1>
      <Body>{object.additionalDescription}</Body>
      <MediaGallery
        imgs={object.image}
        className={cn("text-dta-collections-foreground")}
      />
      {/* <div className="mt-[20px] flex flex-col gap-[30px] pb-[20px] lg:gap-[50px]">
        <DTARelatedContent gridType="people" colorTheme="collections" />
        <DTARelatedContent gridType="institutions" colorTheme="collections" />
        <DTARelatedContent gridType="practices" colorTheme="collections" />
      </div> */}
    </div>
  );
};
