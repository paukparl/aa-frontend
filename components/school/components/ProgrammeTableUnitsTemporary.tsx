import Link from "next/link";
import { Schema } from "@/lib/schemas";

type UnitInfo = {
  title: string | null;
  lecturers: string;
  documentId: string;
  slug: string | null;
};
type ProgrammeTableUnitsTemporaryProps = {
  className?: string;
  programmeColor?: string | null;
  units: UnitInfo[];
  programmeSlug: string;
};

// You could do this ↓↓
type _ProgrammeTableUnitsTemporaryProps = {
  programme: Schema<"schoolProgrammeDetail">;
};

export const ProgrammeTableUnitsTemporary = ({
  className,
  programmeColor,
  programmeSlug,
  units,
}: ProgrammeTableUnitsTemporaryProps) => {
  return (
    <div className={className}>
      <style>
        {`
              .temptable_unitrow:hover{
                background-color: ${programmeColor};
              }
            `}
      </style>
      <div className="border-x border-t border-dotted">
        <div
          className="grid grid-cols-[2fr_1fr] md:grid-cols-[3fr_1fr]"
          style={{ backgroundColor: programmeColor ?? "white" }}
        >
          <div className="flex justify-center border-r border-dotted p-[15px] mono">
            Title
          </div>
          <div className="flex justify-center p-[15px] mono">Lecturers</div>
        </div>
        {units.map((unit, index) => (
          <Link
            scroll={false}
            href={`/school-programmes/${programmeSlug}/${unit.slug}`}
            key={index}
            className="temptable_unitrow mb-[-1px] grid cursor-pointer grid-cols-[2fr_1fr] transition-[.1s] md:grid-cols-[3fr_1fr]"
          >
            <div className="flex h-[70px] items-center border-y border-r border-dotted px-[15px] body sm:min-h-[86px] md:px-[20px]">
              {unit.title}
            </div>
            <div className="flex h-[70px] items-center border-y border-dotted px-[15px] body sm:min-h-[86px] md:px-[20px]">
              {unit.lecturers}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
