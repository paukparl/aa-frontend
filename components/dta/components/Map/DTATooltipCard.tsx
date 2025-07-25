import clsx from "clsx";
import * as React from "react";
import { H1 } from "@/components/Typography/H1";
import { Mono } from "@/components/Typography/Mono";

type PersonItem = {
  type: "person";
  name: string;
  practice: string;
};

type EventItem = {
  type: "event";
  person: string;
  eventInfo: string;
  practice: string;
};

type DTATooltipCardProps = {
  className?: string;
  items: Array<PersonItem | EventItem>;
};

export const DTATooltipCard = ({ className, items }: DTATooltipCardProps) => {
  return (
    <div
      className={clsx(
        className,
        "h-fit w-[260px] rounded-[2px] bg-white px-[10px] pt-[7px] pb-[12px] leading-[12px]",
      )}
    >
      {items.map((item, index) => {
        if (item.type === "person") {
          return (
            <div
              key={`${item.name}-${item.practice}-${index}`}
              className="border-b-[1px] border-dotted pb-[20px]"
            >
              <Mono small>PERSON</Mono>
              <br />
              <Mono
                small
                className="underline decoration-dotted decoration-[1px] underline-offset-3"
              >
                {item.name}
              </Mono>
              <br />
              <br />
              <Mono small>PRACTICE</Mono>
              <br />
              <Mono
                small
                className="underline decoration-dotted decoration-[1px] underline-offset-3"
              >
                {item.practice}
              </Mono>
            </div>
          );
        } else if (item.type === "event") {
          return (
            <div
              className="pt-[20px]"
              key={`${item.person}-${item.eventInfo}-${index}`}
            >
              <H1 tipIn className="!text-[18px]">
                {item.eventInfo}
              </H1>
              <br />
              <Mono small>PERSON</Mono>
              <br />
              <Mono
                small
                className="underline decoration-dotted underline-offset-3"
              >
                {item.person}
              </Mono>
              <br />
              <br />
              <Mono small>PRACTICE</Mono>
              <br />
              <Mono
                small
                className="underline decoration-dotted underline-offset-3"
              >
                {item.practice}
              </Mono>
            </div>
          );
        }
      })}
    </div>
  );
};
