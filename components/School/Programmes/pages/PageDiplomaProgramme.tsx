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

type PageDiplomaProgrammeProps = {
  className?: string;
};

export const PageDiplomaProgramme = ({
  className,
}: PageDiplomaProgrammeProps) => {
  const mockPageData = {
    tableDegreeType: "Master of Architecture (MArch) ",
    tableDuration:
      "Two years, full time (years four and five of the five-years course in architecture)",
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
            colorTheme="diploma"
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
        pageTitle="PhD"
        breadcrumbLinks={[{ title: "Programmes" }]}
      />
      <H1 tipIn>Diploma Programme</H1>
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
            The two-year Diploma Programme (MArch) leads to the AA Final
            Examination (ARB/RIBA Part 2) and introduces successful AA students
            from the Intermediate Programme (BA(Hons)), as well as eligible new
            students to the school who may have studied elsewhere, to the study
            of advanced forms of research, design practices and speculative
            thinking. Long acknowledged as a global innovator in architectural
            education, the programme has throughout its history fostered some of
            the most innovative, challenging and experimental thinking in
            architecture.
            <br />
            <br />
            Offering learning opportunities across a broad spectrum of interests
            and agendas through a variety of different teaching methods, it aims
            to deploy progressive strategies of representation within a diverse
            range of media, in parallel with the development of technical
            proficiencies and critical agendas.
            <br />
            <br />
            Lively, informed debate permeates life in the Diploma Programme
            (MArch). As students hone their research skills in developing
            proposals into high-level design portfolios, they begin to refine
            not only their voices as designers, but also ways of individually
            articulating their own academic agendas that they will carry with
            them into their future professional careers.
          </Body>
        </ProgrammeTextCol>
        <MediaGallery
          slides={mockCarouselSlides}
          colorTheme="school-programmes"
        />
        <ProgrammeTextCol>
          <H1 tipIn>Programme Structure</H1>
          <Body className="line-clamp-10">
            The programme structure consists of study over two academic years,
            Fourth Year and Fifth Year, leading to the awards of the MArch
            (ARB/RIBA Part 2) and the AA Diploma. Fourth- and Fifth-Year
            students join one Design Unit and remain in that Unit for one year.
            Not all Design Units are offered each year. The programme is
            structured so that a minimum of 50% of the students' time is focused
            on design activity through the Unit. The study of architecture and
            design is supported by Core Studies comprising History and Theory,
            Environmental and Technical Studies and Professional Practice. In
            Fourth Year, students undertake a one year-long Design Unit. In
            addition, all students undertake a compulsory History and Theory
            Studies course and two compulsory Environmental and Technical
            Studies courses and one elective. Elective courses extend the range
            of Core Studies into broader domains of creative and radical
            practices in the arts, sciences, social politics, philosophy, and
            new technology. These courses deepen students' understanding of
            interdisciplinary processes and provide a mechanism for integrating
            self-selected knowledge into their individual development in
            architecture. In Fifth Year, students undertake a one year-long
            Design Unit; students may choose the same Design Unit in two
            consecutive years. In addition, all students undertake one
            compulsory History and Theory course, one compulsory Environmental
            and Technical Studies Design Thesis course with a choice of two
            submission dates, and one compulsory Professional Practice Studies
            course: Architectural Professional Practice - four courses in total.
            Students must pass all units and courses to progress into the next
            year. Only students who achieve a pass in the design units and in
            all compulsory courses in Fifth Year are awarded the Master of
            Architecture (ARB/RIBA Part 2) and the AA Diploma.
          </Body>
        </ProgrammeTextCol>
        <ProgrammeTableTerm
          colorTheme="diploma"
          type="credits"
          units={mockTermTableCreditsData}
        />
        <MediaGallery
          slides={mockCarouselSlides}
          colorTheme="school-programmes"
        />
        <ProgrammeTableUnits units={mockUnits} colorTheme="diploma" />
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
