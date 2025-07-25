import clsx from "clsx";
import * as React from "react";
import { ProgrammeTextCol } from "@/components/School/Programmes/components/ProgrammeTextCol";
import { Body } from "@/components/Typography/Body";
import { H1 } from "@/components/Typography/H1";
import { ButtonWindow } from "@/components/globals/components/ButtonWindow";
import { MediaGallery } from "@/components/globals/components/MediaGallery";
import { TipinHeader } from "@/components/globals/layouts/TipinHeader";

type PageVisitingSchoolProps = {
  className?: string;
};

export const PageVisitingSchool = ({ className }: PageVisitingSchoolProps) => {
  const mockCarouselSlides = [
    {
      src: "/storybook/Globals/components/mediagallery/slide1.jpg",
      caption:
        "Miller J Frampton K, Health Centre Iraq, 1955, Otto Koenigsberger Collection",
    },
    {
      src: "/storybook/Globals/components/mediagallery/slide2.jpg",
      caption:
        "Miller K Frampton, Health Centre Iraq, 1955, Otto Koenigsberger Collection",
    },
    {
      src: "/storybook/Globals/components/mediagallery/slide3.jpg",
      caption:
        "Hal J Lawson, Health Centre Iraq, 1955, Otto Koenigsberger Collection",
    },
    {
      src: "/storybook/Globals/components/mediagallery/slide4.jpg",
      caption:
        "Miller J Frampton K, Health Centre Iraq, 1955, Otto Koenigsberger Collection",
    },
    {
      src: "/storybook/Globals/components/mediagallery/slide5.jpg",
      caption:
        "Miller J Frampton K, Health Centre Iraq, 1955, Otto Koenigsberger Collection",
    },
  ];
  return (
    <div
      className={clsx(
        className,
        "min-h-[100vh] bg-[rgba(255,255,255,.9)] p-[10px] sm:p-[30px]",
      )}
    >
      <TipinHeader
        colorTheme="school-programmes"
        pageTitle="AA Visiting School"
        breadcrumbLinks={[{ title: "Programmes" }]}
      />
      <H1 tipIn>AA Visiting School</H1>
      <div className="flex flex-col gap-[50px]">
        <ProgrammeTextCol
          col2content={
            <div className="flex justify-center">
              <ButtonWindow
                links={[
                  { link: "/", displayText: "Enquire to study" },
                  { link: "/", displayText: "Newsletter" },
                ]}
                colorTheme="school"
                context="school"
              />
            </div>
          }
        >
          <Body>
            Encompassing myriad forms and agendas, AA Visiting School courses,
            competitions and workshops are built around agenda driven project
            briefs that are pursued and shaped by participants working
            intensively in small groups, and are led by AA tutors and other
            international experts. Central to each is the idea that
            experimental, new and provocative forms of architecture are best
            learned by doing. The school promotes, tests and challenges
            contemporary global interests and issues in architectural learning
            and exchange by embedding a diverse group of creative participants
            and tutors in an array of unique rural, urban, international and
            online contexts. Places on each course are limited, and anybody who
            would like to further their architectural knowledge and skills can
            apply.
          </Body>
        </ProgrammeTextCol>
        <div>MAP HERE</div>
        <MediaGallery
          slides={mockCarouselSlides}
          colorTheme="school-programmes"
        />
        <div>VISITING SCHOOL TABLE HERE</div>
      </div>
    </div>
  );
};
