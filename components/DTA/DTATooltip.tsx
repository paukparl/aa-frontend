import { Tooltip } from "radix-ui";
import * as React from "react";
import DTATooltipCard from "@/components/DTA/DTATooltipCard";

type DTATooltipProps = {
  className?: string;
};

export default ({ className }: DTATooltipProps) => {
  return (
    <>
      <Tooltip.Provider>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <button className="transition-size block size-[10px] cursor-pointer rounded-full bg-white duration-300 outline-none hover:size-[20px] focus:size-[20px]"></button>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              className="data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade rounded bg-white px-[15px] py-2.5 text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity] select-none"
              sideOffset={5}
            >
              <DTATooltipCard
                items={[
                  { type: "person", name: "Jane Doe", practice: "practice" },
                  {
                    type: "event",
                    person: "John Smith",
                    eventInfo: "Design Conference",
                    practice: "2024-10-12",
                  },
                ]}
              />
              <Tooltip.Arrow className="fill-white" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    </>
  );
};
