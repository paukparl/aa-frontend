import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { ButtonViewMore } from "@/components/globals/ButtonDefault";

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
        <span className="h1-mono">Student Work</span>
        {projectReviewLink && (
          <ButtonViewMore className="h-fit" href={projectReviewLink}>
            See Projects Review ↗
          </ButtonViewMore>
        )}
      </div>
      <div className="grid grid-cols-2 gap-10 700:grid-cols-3 700:gap-30 1024:grid-cols-4">
        {items.map((item, index) =>
          item.link ? (
            <Link href={item.link} key={`linked-${index}`}>
              <Image
                width="500"
                height="500"
                src={item.imgSrc ?? ``}
                alt=""
                sizes="50vw, (min-width: 700px) 33vw, (min-width: 1024px) 25vw"
              />
              <div className="body !font-bold">{item.title}</div>
              <span className="body">{item.artist}</span>
            </Link>
          ) : (
            <div key={`unlinked-${index}`}>
              <Image
                width="500"
                height="500"
                src={item.imgSrc ?? ``}
                alt=""
                sizes="50vw, (min-width: 700px) 33vw, (min-width: 1024px) 25vw"
              />
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
