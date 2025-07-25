import clsx from "clsx";
import * as React from "react";
import { ProgrammeTableInfo } from "@/components/School/Programmes/components/ProgrammeTableInfo";
import { ProgrammeTableUnits } from "@/components/School/Programmes/components/ProgrammeTableUnits";
import { ProgrammeTextCol } from "@/components/School/Programmes/components/ProgrammeTextCol";
import { Body } from "@/components/Typography/Body";
import { H1 } from "@/components/Typography/H1";
import { ButtonWindow } from "@/components/globals/components/ButtonWindow";
import { MediaGallery } from "@/components/globals/components/MediaGallery";
import { TipinHeader } from "@/components/globals/layouts/TipinHeader";

type PageIntermediateProgrammeProps = {
  className?: string;
};

export const PageIntermediateProgramme = ({
  className,
}: PageIntermediateProgrammeProps) => {
  const mockPageData = {
    tableDegreeType: "BA (Hons) in Architecture",
    tableDuration:
      "Three years, full time (years one to three of the five-years course in architecture)",
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
  const mockUnits = [
    {
      thumbnailImgSrc:
        "/storybook/DTA/components/SingleFilter/singlefilter.jpg",
      title: "The Right Model City",
      tutors: "John Palmesino, Ann-Sofi Rönnskog",
    },
    {
      thumbnailImgSrc:
        "/storybook/DTA/components/SingleFilter/singlefilter.jpg",
      title: "Reclaim the Commons: Neighbourhood as Nexus of Political Power",
      tutors: "Miraj Ahmed, Martin Jameson",
    },
    {
      thumbnailImgSrc:
        "/storybook/DTA/components/SingleFilter/singlefilter.jpg",
      title: "The Living Ecology II - Tomorrow Object Today",
      tutors: "",
    },
    {
      thumbnailImgSrc:
        "/storybook/DTA/components/SingleFilter/singlefilter.jpg",
      title: "Climate Peace",
      tutors: "Miraj Ahmed, Martin Jameson",
    },
    {
      thumbnailImgSrc:
        "/storybook/DTA/components/SingleFilter/singlefilter.jpg",
      title: "Living Archives and Material Memories",
      tutors: "John Palmesino, Ann-Sofi Rönnskog",
    },
    {
      thumbnailImgSrc:
        "/storybook/DTA/components/SingleFilter/singlefilter.jpg",
      title: "The Right Model City",
      tutors: "Nick Almond, Torange Khonsari, Mehrdad Seyf",
    },
    {
      thumbnailImgSrc:
        "/storybook/DTA/components/SingleFilter/singlefilter.jpg",
      title: "Exactitude: Architecture and Infrastructure",
      tutors: "John Palmesino, Ann-Sofi Rönnskog",
    },
    {
      thumbnailImgSrc:
        "/storybook/DTA/components/SingleFilter/singlefilter.jpg",
      title: "Climate Peace",
      tutors: "Miraj Ahmed, Martin Jameson",
    },
    {
      thumbnailImgSrc:
        "/storybook/DTA/components/SingleFilter/singlefilter.jpg",
      title: "The Living Ecology II - Tomorrow Object Today",
      tutors: "Nick Almond, Martin Jameson",
    },
    {
      thumbnailImgSrc:
        "/storybook/DTA/components/SingleFilter/singlefilter.jpg",
      title: "The Right Model City",
      tutors: "Nick Almond, Torange Khonsari, Mehrdad Seyf",
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
        pageTitle="Intermediate Programme"
        breadcrumbLinks={[{ title: "Programmes" }]}
      />
      <H1 tipIn>{`Intermediate Programme\nBA (Hons)`}</H1>
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
            The Intermediate Programme (BA(Hons)) leads to a ARB/RIBA Part 1
            qualification and allows students not only to broaden the horizons
            of how architecture is physically manifested in the world, but also
            to holistically consider how cities are designed, to imagine a
            future for the environment and to redefine how we want to live
            together.
            <br />
            <br />
          </Body>
          <H1 tipIn>Programme Structure</H1>
          <Body className="line-clamp-10">
            The programme structure consists of study over three academic years,
            First, Second and Third Years, leading to the award of the AA
            Bachelor of Arts in Architecture (ARB/RIBA Part 1).
            <br />
            <br />
            In First Year, students undertake compulsory courses covering Design
            Studio, two History and Theory Studies courses, two Environmental
            and Technical Studies course, and two Media Studies courses.
            <br />
            <br />
            Second- and Third-Year students join one design unit and remain in
            that Unit for one year. Not all Design Units are offered each year.
            The programme is structured so that a minimum of 50% of the
            students' time is focussed on design activity through the Unit,
            consistent with the requirements for the professional bodies and the
            Subject Benchmark Statement. The study of architecture and design is
            supported by Core Studies comprising History and Theory, Media
            Studies, Environmental and Technical Studies, and Professional
            Practice.
            <br />
            <br />
            In Second Year, students undertake a compulsory one year-long Design
            Unit. In addition, all students undertake two compulsory History and
            Theory Studies courses, three compulsory Environmental and Technical
            Studies courses, two compulsory Media Studies courses - eight
            courses in total.
            <br />
            <br />
            In Third Year, students undertake a compulsory one year-long Design
            Unit; In addition, all students undertake two compulsory History and
            Theory Studies course, one compulsory Environmental and Technical
            Studies course, one summative Technical Design Project and one
            compulsory Professional Practice course - six courses in total.
            <br />
            <br />
            Students must pass all units and courses to progress into the next
            academic year. Only students who achieve a pass in the design unit
            and in all compulsory courses in Third Year are awarded the Bachelor
            of Arts in Architecture (ARB/RIBA Part 1).
          </Body>
        </ProgrammeTextCol>
        <span>TERM BY TERM TABLE</span>
        <MediaGallery
          slides={mockCarouselSlides}
          colorTheme="school-programmes"
        />
        <ProgrammeTableUnits units={mockUnits} colorTheme="intermediate" />
        <ProgrammeTextCol>
          <H1 tipIn>Tutorials</H1>
          <Body className="block pb-[30px] sm:pb-[50px]">
            Directors of studies are available every week for tutorials and
            discussion about candidates' in progress. Candidates are encouraged
            remain in constant contact with their director of studies to ensure
            the continual development of their thesis.
          </Body>
          <H1 tipIn>Seminars</H1>
          <Body>
            In Terms 1 and 2, the directors of studies hold seminars that
            connect the PhD Programme with other postgraduate programmes.
            Alongside these, the programme co-ordinator runs an open seminar on
            Rethinking Doctoral Research, providing candidates with a shared
            platform to discuss methodological issues, as well as continuing the
            multi-year trajectory of the Forms of Care working group - a project
            on the relationship between environmental and social crises,
            connecting candidates' interests with the AA's Climate Matters
            initiative.
          </Body>
        </ProgrammeTextCol>
      </div>
    </div>
  );
};
