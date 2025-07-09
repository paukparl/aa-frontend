import clsx from "clsx";
import * as React from "react";
import { Body } from "@/components/Typography/Body";

type DTAContentDoubleColProps = {
  className?: string;
  children: string;
};

export default ({ className, children }: DTAContentDoubleColProps) => {
  return (
    <div className={clsx(className, "w-full")}>
      <div className="w-full sm:w-[calc(7/12)] md:w-[75%] xl:w-[50%]">
        <Body children={children} />
      </div>
    </div>
  );
};
