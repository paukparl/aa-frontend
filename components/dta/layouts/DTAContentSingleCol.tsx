import * as React from "react";
import { cn } from "@/lib/cn";

type DTAContentSingleColProps = {
  className?: string;
  children: string;
};

export const DTAContentSingleCol = ({
  className,
  children,
}: DTAContentSingleColProps) => {
  return (
    <div className={cn(className, "w-full")}>
      <div className="w-full body 700:w-[calc(7/12)] 1024:w-[75%] 1500:w-[50%]">
        {children}
      </div>
    </div>
  );
};
