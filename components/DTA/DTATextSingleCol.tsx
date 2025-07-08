import clsx from "clsx";
import * as React from "react";
import { Body } from "../Typography/Body";

type DTATextSingleColProps = {
  className?: string;
  children: string;
};

export default ({ className, children }: DTATextSingleColProps) => {
  return (
    <div className={clsx(className, "w-full")}>
      <div className="w-full sm:w-[calc(7/12)] md:w-[75%] xl:w-[50%]">
        <Body children={children} />
      </div>
    </div>
  );
};
