import Link from "next/link";
import * as React from "react";

type ProgrammeUnit = { title: string; degree: string; slug: string };
type ProgrammeTableProgrammesProps = {
  className?: string;
  programmes: ProgrammeUnit[];
};

export const ProgrammeTableProgrammes = ({
  className,
  programmes,
}: ProgrammeTableProgrammesProps) => {
  return (
    <div className={className}>
      <h1 className="tipin mb-[20px]">Programmes</h1>
      <div className="border-x border-t border-dotted">
        <div className="grid grid-cols-[2fr_1fr] bg-programmes-postgrad-accent md:grid-cols-[3fr_1fr]">
          <div className="flex justify-center border-r border-dotted p-[15px] mono">
            Programme
          </div>
          <div className="flex justify-center border-dotted p-[15px] mono md:border-r">
            Degree
          </div>
        </div>
        {programmes.map((programme) => (
          <Link
            href={`taught-postgraduate/${programme.slug}`}
            scroll={false}
            key={programme.title}
            className="mb-[-1px] grid grid-cols-[2fr_1fr] transition hover:bg-programmes-postgrad-accent md:grid-cols-[3fr_1fr]"
          >
            <div className="border-y border-dotted p-[15px] body md:border-r">
              {programme.title}
            </div>
            <div className="border-y border-dotted p-[15px] body">
              {programme.degree}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
