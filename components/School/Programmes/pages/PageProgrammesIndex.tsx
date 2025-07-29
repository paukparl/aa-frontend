import clsx from "clsx";
import * as React from "react";
import { HeaderNav } from "@/components/School/HeaderNav";
import { ProgrammePreviewCard } from "@/components/School/Programmes/components/ProgrammePreviewCard";
import { Footer } from "@/components/globals/components/Footer";

type PagesProgrammesIndexProps = {
  className?: string;
};
const mockProgrammePreviewCardData = [
  {
    title: "Foundation Course",
    uid: "foundation-course",
    degreeType: "AA Foundation Award in Architecture",
    duration: "One year, full time",
    durationFrac: 0.2,
    fullTime: true,
    durationStart: true,
    description:
      "The Foundation Course is a one-year introduction to an art and design education. Students are encouraged to develop their conceptual ideas through experiments with a wide range of media in an intimate, studio-based environment. Through exposure to the wealth of academic offerings and intellectual resources at the AA, Foundation students are given access to the tools, strategies and methodologies that are developed within the school.",
  },
  {
    title: "Intermediate Programme",
    uid: "intermediate-programme",
    degreeType: "BA (Hons) Architecture",
    duration:
      "Three years, full time (years one to three of the five-years course in architecture)",
    durationFrac: 0.6,
    fullTime: true,
    durationStart: true,
    description:
      "The Intermediate Programme empowers students to question how architecture manifests in the world. The First Year focuses on learning through making within a shared, open studio, and provides students with the academic and technical tools to develop their interest in architecture. Students are encouraged to focus on the challenges of the 21st century, while interrogating the foundational principles of architecture. They create an end-of-year portfolio comprising work in a range of media that is informed by various modes of argumentation and representation.",
  },
  {
    title: "Diploma Programme",
    uid: "diploma-programme",
    degreeType: "Master of Architecture (MArch) and AA Diploma",
    duration:
      "Two years, full time (years four and five of the five-years course in architecture)",
    durationFrac: 0.4,
    fullTime: true,
    durationStart: false,
    description:
      "The Diploma Programme introduces students to the study of advanced research and design methods, and new approaches to practice. Throughout its history, the Diploma Programme has fostered some of the most innovative, challenging and progressive thinking in architecture.",
  },
  {
    title: "Taught Postgraduate",
    uid: "taught-postgraduate",
    degreeType: "MA, MSc, MArch, MFA, Taught MPhil",
    duration: "12 or 18 months, full-time",
    durationFrac: 0.3,
    fullTime: true,
    durationStart: true,
    description:
      "The AA offers nine full-time Taught Postgraduate Programmes - advanced studies for students with prior academic and professional experience:\n\nArchitecture and Urbanism (DRL) \nDesign and Make\nEmergent Technologies and Design\nHistory and Critical Thinking\nHousing and Urbanism\nLandscape Urbanism\nSpatial Performance and Design (AAIS)\nSustainable Environmental Design\nArchitecture and Urban Design (Projective Cities)",
  },
  {
    title: "PhD Programme",
    uid: "phd-programme",
    degreeType: "PhD",
    duration: "3 years, full-time",
    durationFrac: 0.75,
    fullTime: true,
    durationStart: true,
    description:
      "The PhD Programme at the AA trains scholars and researchers in the fields of architectural history and theory, urban studies and technology. We encourage rigorous and speculative dissertations that question architecture itself and its history, as well as its professional and disciplinary mandate. The programme is not based on the application of one specific research method, but instead provides a platform for candidates to develop their own approach. ",
  },
  {
    title: "Professional Practice",
    uid: "professional-practice",
    degreeType: "Certificate",
    duration: "2 weeks full time or\n10 weeks part time",
    durationFrac: 0.15,
    fullTime: false,
    durationStart: true,
    description:
      "Professional Practice Part 3 is a seminar course and examination that allows successful candidates to register as an architect with the Architects Registration Board (ARB). The course is also available to registered professionals who wish to refresh their knowledge through Continuing Professional Development (CPD). ",
  },
  {
    title: "AA Visiting School",
    uid: "visiting-school",
    degreeType: null,
    duration: "1 to 3 weeks",
    durationFrac: 0.2,
    fullTime: true,
    durationStart: true,
    description:
      "Courses and symposia within the Visiting School encompass myriad forms and agendas, and are built around project briefs pursued and shaped by small groups of participants. These programmes are driven by the idea that experimental, new and provocative forms of architecture are best learned by doing. The school promotes, tests and challenges contemporary global interests and issues in architectural learning by embedding a diverse group of creative participants and tutors in an array of rural and urban international contexts. The Visiting School offers new and unexpected learning opportunities in the UK, continental Europe, the Middle East, Asia, Africa, Australia and the Americas. Places on each course are limited, and anybody who would like to further their architectural knowledge and skills can apply. Transferable study credits are available. ",
  },
];

export const PageProgrammesIndex = ({
  className,
}: PagesProgrammesIndexProps) => {
  return (
    <div
      className={clsx(className, "bg-school-background p-[10px] sm:p-[30px]")}
    >
      <HeaderNav activeRoute="programmes" />
      <div className="mt-[50px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {mockProgrammePreviewCardData.map((programme, index) => (
          <ProgrammePreviewCard
            key={index}
            title={programme.title}
            degreeType={programme.degreeType}
            duration={programme.duration}
            durationFrac={programme.durationFrac}
            fullTime={programme.fullTime}
            durationStart={programme.durationStart}
            description={programme.description}
          />
        ))}
      </div>
      <Footer colorTheme="school" />
    </div>
  );
};
