import clsx from "clsx";
import * as React from "react";
import { Body } from "@/components/Typography/Body";

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
      <div className="w-full sm:w-[calc(7/12)] md:w-[75%] xl:w-[50%]">
        <Body children={children} />
      </div>
    </div>
  );
};
