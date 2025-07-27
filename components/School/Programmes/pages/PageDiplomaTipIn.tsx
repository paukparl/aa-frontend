import clsx from "clsx";
import * as React from "react";
import { H1 } from "@/components/Typography/H1";
import { MediaGallery } from "@/components/globals/components/MediaGallery";

type PageDiplomaTipInProps = {
  className?: string;
};

export const PageDiplomaTipIn = ({ className }: PageDiplomaTipInProps) => {
  return (
    <div
      className={clsx(
        className,
        "bg-programmes-diploma-accent flex min-h-[100vh] w-full flex-col bg-[rgba(255,255,255,.9)] p-[10px] backdrop-blur-lg sm:p-[30px] lg:w-[75%]",
      )}
    >
      <H1 tipIn className="mb-[20px] block leading-[1.1]">
        Diploma Design Unit 1:
        <br />
        The Right Model City
      </H1>
      <MediaGallery
        slides={[
          {
            src: "/storybook/Globals/components/mediagallery/slide1.jpg",
            caption:
              "Miller J Frampton K, Health Centre Iraq, 1955, Otto Koenigsberger Collection",
          },
        ]}
        colorTheme="school-programmes"
      />
    </div>
  );
};
