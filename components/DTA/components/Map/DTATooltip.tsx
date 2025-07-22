import { Tooltip } from "radix-ui";
import * as React from "react";
import { DTATooltipCard } from "@/components/DTA/components/Map/DTATooltipCard";

type DTATooltipProps = {
  className?: string;
};

export const DTATooltip = ({ className }: DTATooltipProps) => {
  return (
    <>
      <Tooltip.Provider>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <button className="transition-size block size-[10px] cursor-pointer rounded-full bg-white duration-300 outline-none hover:size-[20px] focus:size-[20px]"></button>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
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
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    </>
  );
};
