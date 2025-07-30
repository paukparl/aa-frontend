import clsx from "clsx";
import * as React from "react";

type DTAContentSingleColProps = {
  className?: string;
  children: string;
};

export const DTAContentSingleCol = ({
  className,
  children,
}: DTAContentSingleColProps) => {
  return (
    <div className={clsx(className, "w-full")}>
      <div className="body 700:w-[calc(7/12)] 1024:w-[75%] w-full xl:w-[50%]">
        {children}
      </div>
    </div>
  );
};
