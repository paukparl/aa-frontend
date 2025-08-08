import Link from "next/link";
import * as React from "react";

type StudentWorkPreview = {
  title: string;
  artist: string;
  imgSrc: string;
  link?: string;
};
type ProgrammeGridStudentWorkProps = {
  items: StudentWorkPreview[];
  className?: string;
};

export const ProgrammeGridStudentWork = ({
  items,
  className,
}: ProgrammeGridStudentWorkProps) => {
  return (
    <div className={className}>
      <h1 className="tipin mb-[10px]">Student Work</h1>
      <div className="grid grid-cols-2 gap-[10px] sm:gap-[30px] md:grid-cols-3 lg:grid-cols-4">
        {items.map((item) =>
          item.link ? (
            <Link href={item.link} key={`linked-${item.title}`}>
              <img className="h-[auto] w-[100%]" src={item.imgSrc} />
              <div className="body !font-bold">{item.title}</div>
              <span className="body">{item.artist}</span>
            </Link>
          ) : (
            <div key={`unlinked-${item.title}`}>
              <img className="h-[auto] w-[100%]" src={item.imgSrc} />
              <div className="mt-[10px] block body !font-bold">
                {item.title}
              </div>
              <span className="body">{item.artist}</span>
            </div>
          ),
        )}
      </div>
    </div>
  );
};
