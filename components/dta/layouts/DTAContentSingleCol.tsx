import { ReactNode } from "react";
import { cn } from "@/lib/cn";

type DTAContentSingleColProps = {
  className?: string;
  children: ReactNode;
};

export const DTAContentSingleCol = ({
  className,
  children,
}: DTAContentSingleColProps) => {
  return (
    <div className={cn("w-full", className)}>
      <div className="w-full body 700:w-[58%] 1024:w-[75%] 1280:w-[50%]">
        {children}
      </div>
    </div>
  );
};
