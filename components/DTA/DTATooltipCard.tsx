import * as React from "react";
import { H1 } from "../Typography/H1";
import { Mono } from "../Typography/Mono";

type PersonItem = {
  type: "person";
  // Add fields for a person here, e.g.:
  name: string;
  practice: string;
};

type EventItem = {
  type: "event";
  person: string;
  // Add fields for an event here, e.g.:
  eventInfo: string;
  practice: string;
};

type DTATooltipCardProps = {
  className?: string;
  items: Array<PersonItem | EventItem>;
};

export default ({ className, items }: DTATooltipCardProps) => {
  return (
    <>
      <div className="h-fit w-[260px] rounded-[2px] bg-white px-[10px] pt-[7px] pb-[12px] leading-[12px]">
        {items.map((item) => {
          if (item.type === "person") {
            return (
              <div className="border-b-[1px] border-dotted pb-[20px]">
                <Mono small children="PERSON" />
                <br />
                <Mono
                  small
                  className="underline decoration-dotted decoration-[1px] underline-offset-3"
                  children={item.name}
                />
                <br />
                <br />
                <Mono small children="PRACTICE" />
                <br />
                <Mono
                  small
                  className="underline decoration-dotted decoration-[1px] underline-offset-3"
                  children={item.practice}
                />
              </div>
            );
          } else if (item.type === "event") {
            return (
              <div className="pt-[20px]">
                <H1 tipIn className="!text-[18px]" children={item.eventInfo} />
                <br />
                <Mono small children="PERSON" />
                <br />
                <Mono
                  small
                  className="underline decoration-dotted underline-offset-3"
                  children={item.person}
                />
                <br />
                <br />
                <Mono small children="PRACTICE" />
                <br />
                <Mono
                  small
                  className="underline decoration-dotted underline-offset-3"
                  children={item.practice}
                />
              </div>
            );
          }
        })}
      </div>
    </>
  );
};
