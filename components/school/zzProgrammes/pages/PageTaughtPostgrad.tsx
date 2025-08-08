// import clsx from "clsx";
// import * as React from "react";
// import { Body } from "@/components/Typography/Body";
// import { H1 } from "@/components/Typography/H1";
// import { ButtonWindow } from "@/components/globals/components/ButtonWindow";
// import { MediaGallery } from "@/components/globals/components/MediaGallery";
// import { TipinHeader } from "@/components/globals/layouts/TipinHeader";
// import { ProgrammeTableInfo } from "@/components/school/components/ProgrammeTableInfo";
// import { ProgrammeTableProgrammes } from "@/components/school/components/ProgrammeTableProgrammes";
// import { ProgrammeTextCol } from "@/components/school/components/ProgrammeTextCol";

// type PageTaughtPostgradProps = {
//   className?: string;
// };

// export const PageTaughtPostgrad = ({ className }: PageTaughtPostgradProps) => {
//   const mockPageData = {
//     tableDegreeType: "MA, MSc, MArch, MFA, Taught MPhil",
//     tableDuration: "12 or 18 months, full-time",
//   };
//   const mockCarouselSlides = [
//     {
//       src: "/storybook/Globals/components/mediagallery/slide1.jpg",
//       caption:
//         "Miller J Frampton K, Health Centre Iraq, 1955, Otto Koenigsberger Collection",
//     },
//     {
//       src: "/storybook/Globals/components/mediagallery/slide2.jpg",
//       caption:
//         "Miller K Frampton, Health Centre Iraq, 1955, Otto Koenigsberger Collection",
//     },
//     {
//       src: "/storybook/Globals/components/mediagallery/slide3.jpg",
//       caption:
//         "Hal J Lawson, Health Centre Iraq, 1955, Otto Koenigsberger Collection",
//     },
//     {
//       src: "/storybook/Globals/components/mediagallery/slide4.jpg",
//       caption:
//         "Miller J Frampton K, Health Centre Iraq, 1955, Otto Koenigsberger Collection",
//     },
//     {
//       src: "/storybook/Globals/components/mediagallery/slide5.jpg",
//       caption:
//         "Miller J Frampton K, Health Centre Iraq, 1955, Otto Koenigsberger Collection",
//     },
//   ];
//   const mockProgrammeTableData = [
//     { title: "Architecture and Urbanism (DRL)", degree: "MArch" },
//     { title: "Conservation and Reuse", degree: "MA/PGDip" },
//     { title: "Design and Make", degree: "MSc/MArch" },
//     { title: "Emergent Technologies and Design (EmTech)", degree: "MSc/MArch" },
//     { title: "History and Critical Thinking in Architecture", degree: "MA" },
//     { title: "Housing and Urbanism", degree: "MA/MArch" },
//     { title: "Landscape Urbanism", degree: "MSc/MArch" },
//     { title: "PhD Programme", degree: "PhD" },
//     { title: "Spatial Performance and Design (AAIS)", degree: "MA/MFA" },
//     { title: "Sustainable Environmental Design", degree: "MSc/MArch" },
//     {
//       title:
//         "Taught MPhil in Architecture and Urban Design (Projective Cities)",
//       degree: "Taught MPhil",
//     },
//   ];
//   return (
//     <div
//       className={clsx(
//         className,
//         "min-h-[100vh] bg-[rgba(255,255,255,.9)] p-[10px] sm:p-[30px]",
//       )}
//     >
//       <TipinHeader
//         colorTheme="school-programmes"
//         pageTitle="Taught Postgraduate"
//         breadcrumbLinks={[{ title: "Programmes" }]}
//       />
//       <H1 tipIn>Taught Postgraduate</H1>
//       <ProgrammeTableInfo
//         degreeType={mockPageData.tableDegreeType}
//         duration={mockPageData.tableDuration}
//       />
//       <div className="flex flex-col gap-[50px]">
//         <ProgrammeTextCol
//           col2content={
//             <div className="flex justify-center">
//               <ButtonWindow
//                 links={[
//                   { link: "/", displayText: "Apply" },
//                   { link: "/", displayText: "Enquire to study" },
//                   { link: "/", displayText: "Programme Guides" },
//                 ]}
//                 colorTheme="school"
//                 context="school"
//               />
//             </div>
//           }
//         >
//           <Body>
//             The AA offers ten Taught Postgraduate Programmes and a PhD Programme
//             for students with prior academic and professional experience. All
//             programmes are full-time courses of advanced study. MA/MSc
//             programmes take place over 12 months, beginning with three terms of
//             taught courses that conclude in late June each year and are followed
//             by an independent writing period prior to the submission of a final
//             dissertation in September. These courses are open to applicants with
//             professional qualifications in architecture, engineering or other
//             related disciplines. Dissertation projects are expected to combine
//             design research with case study work.
//             <br />
//             <br />
//             MArch programmes include two phases of study, and are undertaken
//             over 16 months. The first phase consists of three terms of
//             studio-based design and taught coursework that conclude in late
//             June. Following a summer break, all students return in September and
//             commence the second phase, during which they complete their Thesis
//             Design projects; these are then presented and submitted the
//             following January. MArch courses are open to applicants with a
//             five-year professional architectural degree (BArch/Diploma
//             equivalent) or a relevant five-year professional degree e.g. BEng in
//             Architecture, or a BArch degree plus diploma of equivalent standard.
//             <br />
//             <br />
//             The MFA and MPhil programmes are similarly divided into two phases
//             of study, with a longer second phase that concludes in March/May of
//             the second year of study. The MFA programme in Spatial Performance
//             and Design (AAIS) takes place over 18 months, and is open to
//             professionals in a number of creative fields who collectively
//             realise projects between architecture, art and performance. The
//             Taught MPhil in Architecture and Urban Design (Projective Cities)
//             takes place over 18 months, and is open to applicants with a four-
//             or five-year degree in architecture (MArch, BArch, Diploma or
//             equivalent).
//             <br />
//             <br />
//             The PhD Programme at the AA is a full-time, four-year course that
//             aims to train scholars and researchers in the fields of
//             architectural history and theory, urban studies and technology. The
//             PhD Programme is composed of a set of parallel activities that
//             encourage and stimulate collective discussion among participants
//             through tutorials, guest seminars, end of term presentations and
//             symposia. Upon acceptance to the programme, candidates prepare a
//             thesis abstract, preliminary table of contents and bibliography that
//             is submitted to the Open University for registration.
//             <br />
//             <br />A limited number of courses across the Taught Postgraduate
//             programmes are open for all Postgraduate students to attend through
//             &apos;auditing&apos;, in which they can attend and engage without
//             coursework being a requirement.
//           </Body>
//         </ProgrammeTextCol>
//         <MediaGallery
//           slides={mockCarouselSlides}
//           colorTheme="school-programmes"
//         />
//         <H1 tipIn>AA Masters to PhD Pathway</H1>
//         <ProgrammeTextCol>
//           <Body className="block pb-[30px] sm:pb-[50px]">
//             Studio Angius, the studio of AA Design Reseach Laboratory (DRL)
//             tutor Pierandrea Angius, have collaborated with Meltio for Project
//             Alchemist. The project involves experimentation with wire-laser
//             metal 3D printing to explore adaptive and mobile structures with
//             compliant and optimised titanium components. Bringing together
//             expertise in advanced manufacturing and experimental design, this
//             partnership demonstrates the potential of innovative fabrication
//             techniques.
//             <br />
//             <br />
//             Studio Angius has initiated a second collaboration, as part of AA
//             DRL, with Stage One who are known for crafting several Serpentine
//             Pavilions in London. Project Algaenator explores large-scale
//             fabrication through multi-axis robotic milling. This partnership
//             focuses on developing high-precision moulds to produce carbon fibre
//             hulls.
//           </Body>
//         </ProgrammeTextCol>
//         <ProgrammeTableProgrammes
//           colorTheme="postgrad"
//           programmes={mockProgrammeTableData}
//         />
//       </div>
//     </div>
//   );
// };
