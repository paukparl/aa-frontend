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
    <div className={cn(className, "w-full")}>
      <div className="w-full body 700:w-[calc(7/12)] 1024:w-[75%] 1280:w-[50%]">
        {children}
      </div>
    </div>
  );
};
