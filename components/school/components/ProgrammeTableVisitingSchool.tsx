// import clsx from "clsx";
// import * as React from "react";
// import { Body } from "@/components/Typography/Body";
// import { Mono } from "@/components/Typography/Mono";

// type ProgrammeColorTheme = "intermediate" | "diploma" | "postgrad" | "visiting";
// type CourseUnit = {
//   thumbnailImgSrc: string;
//   title: string;
//   dates: string;
//   location: string;
//   programme: string;
// };
// type ProgrammeTableVisitingSchoolProps = {
//   className?: string;
//   colorTheme: ProgrammeColorTheme;
//   units: CourseUnit[];
// };

// export const ProgrammeTableVisitingSchool = ({
//   className,
//   colorTheme,
//   units,
// }: ProgrammeTableVisitingSchoolProps) => {
//   const colorThemeDict = {
//     intermediate: {
//       header: "bg-programmes-intermediate-accent",
//       row: "hover:bg-programmes-intermediate-accent",
//     },
//     diploma: {
//       header: "bg-programmes-diploma-accent",
//       row: "hover:bg-programmes-diploma-accent",
//     },
//     postgrad: {
//       header: "bg-programmes-postgrad-accent",
//       row: "hover:bg-programmes-postgrad-accent",
//     },
//     visiting: {
//       header: "bg-programmes-visiting-accent",
//       row: "hover:bg-programmes-visiting-accent",
//     },
//   };
//   return (
//     <div className={clsx(className)}>
//       <div className="border-x border-t border-dotted">
//         <div
//           className={clsx(
//             "grid grid-cols-[1fr_1fr] md:grid-cols-[1fr_1fr_1fr] lg:grid-cols-[1fr_1fr_1fr_1fr]",
//             colorThemeDict[colorTheme].header,
//           )}
//         >
//           <Mono className="flex justify-center border-r border-dotted p-[15px]">
//             Title
//           </Mono>
//           <Mono className="hidden justify-center border-dotted p-[15px] md:flex md:border-r">
//             Dates
//           </Mono>
//           <Mono className="flex justify-center border-dotted p-[15px] md:border-r">
//             Location
//           </Mono>
//           <Mono className="hidden justify-center p-[15px] lg:flex">
//             Programme
//           </Mono>
//         </div>
//         {units.map((unit) => (
//           <div
//             key={unit.title}
//             className={clsx(
//               colorThemeDict[colorTheme].row,
//               "mb-[-1px] grid cursor-pointer grid-cols-[1fr_1fr] transition-[.1s] sm:min-h-[86px] md:grid-cols-[1fr_1fr_1fr] lg:grid-cols-[1fr_1fr_1fr_1fr]",
//             )}
//           >
//             <Body className="block flex items-start border-y border-r border-dotted p-[15px]">
//               <img
//                 src={unit.thumbnailImgSrc}
//                 className="mr-[20px] hidden h-[67px] w-[67px] object-cover object-center sm:block"
//               />
//               {unit.title}
//             </Body>
//             <Body className="hidden border-y border-dotted p-[15px] md:block md:border-r">
//               {unit.dates}
//             </Body>
//             <Body className="block border-y border-dotted p-[15px] md:border-r">
//               {unit.location}
//             </Body>
//             <Body className="hidden border-y border-dotted p-[15px] lg:block">
//               {unit.programme}
//             </Body>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
