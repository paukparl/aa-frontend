// import clsx from "clsx";
// import * as React from "react";
// import { Body } from "@/components/Typography/Body";
// import { H1 } from "@/components/Typography/H1";
// import { ButtonWindow } from "@/components/globals/components/ButtonWindow";
// import { Collapsible } from "@/components/globals/components/Collapsible";
// import { MediaGallery } from "@/components/globals/components/MediaGallery";
// import { TipinHeader } from "@/components/globals/layouts/TipinHeader";
// import { ProgrammeTableInfo } from "@/components/school/components/ProgrammeTableInfo";
// import { ProgrammeTextCol } from "@/components/school/components/ProgrammeTextCol";

// type PageFoundationCourseProps = {
//   className?: string;
// };

// export const PageFoundationCourse = ({
//   className,
// }: PageFoundationCourseProps) => {
//   const mockPageData = {
//     tableDegreeType: "AA Foundation Award in Architecture",
//     tableDuration: "1 year, full time",
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
//   const mockCollapsibleItems = [
//     {
//       header: "Foundation Studio Practice",
//       content:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     },
//     {
//       header: "Foundation Contextual",
//       content:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     },
//     {
//       header: "Media Studies",
//       content:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
//         pageTitle="Foundation"
//         breadcrumbLinks={[{ title: "Programmes" }]}
//       />
//       <H1 tipIn>Foundation Course</H1>
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
//             Term 1 of the Foundation Course focuses on observation, conversation
//             and developing key skills. We will begin by crafting portraits of
//             &apos;mother Earth&apos;, our hometown and ourselves, and will
//             discuss our influence upon and duties towards our local environment
//             in light of the climate crisis. This will prepare us for active
//             participation in the school-wide conversations that take place
//             during Climate Matters Week in Term 1. On a study trip to Venice, we
//             will investigate how the city has been designed to harvest fresh
//             water and to endure the salinity of its surroundings, through
//             surveying and rebuilding elements of the Venetian urban fabric at a
//             range of scales. We will explore complex junctions, interconnecting
//             volumes, sections and thresholds, and we will question how materials
//             can be used responsibly in design by investigating their origins and
//             relationships to climatic stressors. In parallel with studio
//             practice, students will identify and compile a series of contextual
//             references and apply critical thinking to their own self-initiated
//             research. Tutorials and workshops introduce students to different
//             techniques and encourage translation from observation to material
//             interpretation, and regular discussions of ongoing work take place
//             in individual tutorials, group presentations and juries.
//             <br />
//             <br />
//             Term 2 focuses on work that clarifies students&apos; own individual
//             areas of interest. After a series of writing exercises, each student
//             will create a short experimental film. Our focus will then shift to
//             the human body, creating small architectural proposals in response;
//             these proposals will evolve through practical testing,
//             thinking-through-making and experimentation.
//             <br />
//             <br />
//             In Term 3, students will work as a group to build a structure at 1:1
//             scale, and will each design and compile a final portfolio of work
//             created during the academic year for assessment. The year culminates
//             in the design and build of the Foundation Course display for the
//             Projects Review exhibition.
//             <br />
//             <br />
//             Head of Foundation: Saskia LewisCourse Staff: Yoni Bentovim, Sensy
//             Mania, Sabrina Morreale, Frédérique Paraskevas, Claire Potter,
//             Álvaro Velasco Pérez
//           </Body>
//         </ProgrammeTextCol>
//         <MediaGallery
//           slides={mockCarouselSlides}
//           colorTheme="school-programmes"
//         />
//         <div>
//           <ProgrammeTextCol>
//             <H1 tipIn className="mb-[20px] block">
//               Course Components
//             </H1>
//             <Collapsible items={mockCollapsibleItems} />
//           </ProgrammeTextCol>
//         </div>
//       </div>
//     </div>
//   );
// };
