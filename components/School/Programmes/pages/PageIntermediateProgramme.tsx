import clsx from "clsx";
import * as React from "react";
import { ProgrammeTableInfo } from "@/components/School/Programmes/components/ProgrammeTableInfo";
import { ProgrammeTableTerm } from "@/components/School/Programmes/components/ProgrammeTableTerm";
import { ProgrammeTableUnits } from "@/components/School/Programmes/components/ProgrammeTableUnits";
import { ProgrammeTextCol } from "@/components/School/Programmes/components/ProgrammeTextCol";
import { Body } from "@/components/Typography/Body";
import { H1 } from "@/components/Typography/H1";
import { ButtonWindow } from "@/components/globals/components/ButtonWindow";
import { Collapsible } from "@/components/globals/components/Collapsible";
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
  const mockTermTableCreditsData = [
    {
      title: "Diploma Design Unit",
      termYears: [1, 2],
      core: false,
      choose: "1 of 21 units",
      credits: 70,
    },
    {
      title: "History and Theory Studies",
      termYears: [2],
      core: false,
      choose: "1 of 21 units",
      credits: 60,
    },
    {
      title: "Diploma Design Unit",
      termYears: [1],
      core: false,
      choose: "1 of 9 courses",
      credits: 30,
    },
    {
      title: "Diploma Design Unit",
      termYears: [1, 2],
      core: true,
      choose: "1 of 13 units",
      credits: 10,
    },
    {
      title: "Diploma Design Unit",
      termYears: [1, 2],
      core: true,

      credits: 10,
    },
    {
      title: "Diploma Design Unit",
      termYears: [2],
      core: true,
      choose: "1 of 3 courses",
      credits: 40,
    },
  ];
  const mockTermTableLecturersData = [
    {
      title: "Diploma Design Unit",
      lecturers: "Doreen Bernath",
      termYears: [1],
    },
    {
      title: "The Oceanic Feeling",
      lecturers: "Doreen Bernath",
      termYears: [1, 2],
    },
    {
      title: "Diploma Design Unit",
      lecturers: "Doreen Bernath",
      termYears: [2],
    },
    {
      title: "The Oceanic Feeling",
      lecturers: "Doreen Bernath",
      termYears: [1],
    },
  ];
  const mockCollapsibleItems = [
    {
      header: "History and Theory Studies",
      content: (
        <div>
          <ProgrammeTextCol>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </ProgrammeTextCol>
          <ProgrammeTableTerm
            className="mt-[20px]"
            colorTheme="diploma"
            type="lecturers"
            units={mockTermTableLecturersData}
          />
        </div>
      ),
    },
    {
      header: "Environmental and Technical Studies",
      content: (
        <div>
          <ProgrammeTextCol>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </ProgrammeTextCol>
          <ProgrammeTableTerm
            className="mt-[20px]"
            colorTheme="diploma"
            type="lecturers"
            units={mockTermTableLecturersData}
          />
        </div>
      ),
    },
    {
      header: "Architectural Professional Practice",
      content: (
        <div>
          <ProgrammeTextCol>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </ProgrammeTextCol>
          <ProgrammeTableTerm
            className="mt-[20px]"
            colorTheme="diploma"
            type="lecturers"
            units={mockTermTableLecturersData}
          />
        </div>
      ),
    },
    {
      header: "Diploma Electives",
      content: (
        <div>
          <ProgrammeTextCol>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </ProgrammeTextCol>
          <ProgrammeTableTerm
            className="mt-[20px]"
            colorTheme="intermediate"
            type="lecturers"
            units={mockTermTableLecturersData}
          />
        </div>
      ),
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
        <ProgrammeTableTerm
          colorTheme="intermediate"
          type="credits"
          units={mockTermTableCreditsData}
        />
        <MediaGallery
          slides={mockCarouselSlides}
          colorTheme="school-programmes"
        />
        <ProgrammeTableUnits units={mockUnits} colorTheme="intermediate" />
        <div>
          <H1 tipIn className="mb-[20px] block">
            Core Studies
          </H1>
          <Collapsible items={mockCollapsibleItems} />
        </div>
      </div>
    </div>
  );
};
