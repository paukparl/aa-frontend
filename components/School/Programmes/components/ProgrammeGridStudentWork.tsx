import Link from "next/link";
import * as React from "react";
import { Body } from "@/components/Typography/Body";
import { H1 } from "@/components/Typography/H1";

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
      <H1 className="mb-[10px]" tipIn>
        Student Work
      </H1>
      <div className="grid grid-cols-2 gap-[10px] sm:gap-[30px] md:grid-cols-3 lg:grid-cols-4">
        {items.map((item) =>
          item.link ? (
            <Link href={item.link}>
              <img className="h-[auto] w-[100%]" src={item.imgSrc} />
              <Body className="block !font-bold">{item.title}</Body>
              <Body>{item.artist}</Body>
            </Link>
          ) : (
            <div>
              <img className="h-[auto] w-[100%]" src={item.imgSrc} />
              <Body className="mt-[10px] block !font-bold">{item.title}</Body>
              <Body>{item.artist}</Body>
            </div>
          ),
        )}
      </div>
    </div>
  );
};
