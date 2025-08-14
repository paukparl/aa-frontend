import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { ButtonViewMore } from "@/components/school/components/ButtonViewMore";

type StudentWorkPreview = {
  title: string | null;
  artist: string | null;
  imgSrc: string | undefined;
  link?: string | null;
};
type ProgrammeGridStudentWorkProps = {
  items: StudentWorkPreview[];
  className?: string;
  projectReviewLink?: string | null;
};

export const ProgrammeGridStudentWork = ({
  items,
  className,
  projectReviewLink,
}: ProgrammeGridStudentWorkProps) => {
  return (
    <div className={className}>
      <div className="mb-(--padding) flex items-center justify-between">
        <h1 className="tipin">Student Work</h1>
        {projectReviewLink && (
          <ButtonViewMore className="h-fit" href={projectReviewLink}>
            See Projects Review ↗
          </ButtonViewMore>
        )}
      </div>
      <div className="grid grid-cols-2 gap-[10px] sm:gap-[30px] md:grid-cols-3 lg:grid-cols-4">
        {items.map((item, index) =>
          item.link ? (
            <Link href={item.link} key={`linked-${index}`}>
              <Image width="500" height="500" src={item.imgSrc ?? ``} alt="" />
              <div className="body !font-bold">{item.title}</div>
              <span className="body">{item.artist}</span>
            </Link>
          ) : (
            <div key={`unlinked-${index}`}>
              <Image width="500" height="500" src={item.imgSrc ?? ``} alt="" />
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
