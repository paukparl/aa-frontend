import clsx from "clsx";
import * as React from "react";
import { ProgrammeTableInfo } from "@/components/School/Programmes/components/ProgrammeTableInfo";
import { ProgrammeTextCol } from "@/components/School/Programmes/components/ProgrammeTextCol";
import { Body } from "@/components/Typography/Body";
import { H1 } from "@/components/Typography/H1";
import { ButtonWindow } from "@/components/globals/components/ButtonWindow";
import { MediaGallery } from "@/components/globals/components/MediaGallery";
import { TipinHeader } from "@/components/globals/layouts/TipinHeader";

type PagePhDProgrammeProps = {
  className?: string;
};

export const PagePhDProgramme = ({ className }: PagePhDProgrammeProps) => {
  const mockPageData = {
    tableDegreeType: "PhD",
    tableDuration: "3 years, full time",
  };
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
        pageTitle="PhD"
        breadcrumbLinks={[{ title: "Programmes" }]}
      />
      <H1 tipIn>PhD Programme</H1>
      <ProgrammeTableInfo
        degreeType={mockPageData.tableDegreeType}
        duration={mockPageData.tableDuration}
      />
      <div className="flex flex-col gap-[50px]">
        <ProgrammeTextCol
          col2content={
            <div className="flex justify-center">
              <ButtonWindow
                links={[
                  { link: "/", displayText: "Apply" },
                  { link: "/", displayText: "Enquire to study" },
                  { link: "/", displayText: "Programme Guides" },
                ]}
                colorTheme="school"
                context="school"
              />
            </div>
          }
        >
          <Body>
            The PhD Programme at the AA is a full-time, three-year course that
            trains scholars and researchers in the fields of architectural
            history and theory, urban studies and technology. Its ambition is to
            learn from architectural knowledge and its history in order to
            understand the built environment at large. The programme is not
            based on the application of one specific research method, but
            instead provides a platform for candidates to develop their own
            methods. Beyond their individual lines of inquiry, however, all
            candidates and staff share an understanding of architectural form as
            the index of sociopolitical processes. This attitude provides a
            springboard for research that engages both with the materiality of
            the built world and with its cultural dimensions. We question the
            traditional separation of theory and design, and see thinking and
            practicing as activities that are intrinsically connected. This
            connection becomes ever more important as we face new social and
            environmental crises.
          </Body>
        </ProgrammeTextCol>
        <MediaGallery
          slides={mockCarouselSlides}
          colorTheme="school-programmes"
        />
        <ProgrammeTextCol>
          <H1 tipIn>Programme Structure</H1>
          <Body className="block pb-[30px] sm:pb-[50px]">
            The PhD Programme comprises a set of activities that run in parallel
            to encourage and stimulate collective discussion among participants.
            These take the form of tutorials, seminars, guest seminars, end of
            term presentations and symposia.
          </Body>
          <H1 tipIn>Tutorials</H1>
          <Body className="block pb-[30px] sm:pb-[50px]">
            {`Directors of studies are available every week for tutorials and
            discussion about candidates' in progress. Candidates are encouraged
            remain in constant contact with their director of studies to ensure
            the continual development of their thesis.`}
          </Body>
          <H1 tipIn>Seminars</H1>
          <Body>
            {`In Terms 1 and 2, the directors of studies hold seminars that
            connect the PhD Programme with other postgraduate programmes.
            Alongside these, the programme co-ordinator runs an open seminar on
            Rethinking Doctoral Research, providing candidates with a shared
            platform to discuss methodological issues, as well as continuing the
            multi-year trajectory of the Forms of Care working group - a project
            on the relationship between environmental and social crises,
            connecting candidates&apos; interests with the AA's Climate Matters
            initiative.`}
          </Body>
        </ProgrammeTextCol>
      </div>
    </div>
  );
};
