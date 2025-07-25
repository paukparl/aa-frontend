"use client";

import clsx from "clsx";
import { Popover } from "radix-ui";
import React, { useState } from "react";
import { DTATooltipCard } from "@/components/dta/components/Map/DTATooltipCard";

type DTATooltipProps = {
  className?: string;
};

export const DTATooltip = ({ className }: DTATooltipProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={className}>
      <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
        <Popover.Trigger asChild>
          <button
            className={clsx(
              isOpen && "size-[20px]",
              "transition-size block size-[10px] cursor-pointer rounded-full bg-white duration-300 outline-none hover:size-[20px] focus:size-[20px]",
            )}
          ></button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content
            className="data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade will-change-[transform,opacity]"
            sideOffset={5}
          >
            <DTATooltipCard
              items={[
                {
                  type: "person",
                  name: "George Bernard Finch",
                  practice: "London City Council",
                },
                {
                  type: "event",
                  eventInfo:
                    "In 1972, Handel Kitchiner becomes the Dean of the University of Edinburgh.",
                  person: "John Doe",
                  practice: "Turkish Architecture",
                },
              ]}
            />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
};
