import { ReactNode } from "react";
import { cn } from "@/lib/cn";

export async function DtaLayout({ children }: { children: ReactNode }) {
  return (
    <div className={cn("text-white")}>
      <div className={cn("text-48 font-nhg-display font-500")}>
        Department of Tropical Architecture Archive
      </div>
      {children}
    </div>
  );
}
