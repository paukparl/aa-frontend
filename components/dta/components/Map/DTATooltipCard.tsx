import clsx from "clsx";
import * as React from "react";

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
              <span className="mono small">PERSON</span>
              <br />
              <span className="mono small underline decoration-dotted decoration-[1px] underline-offset-3">
                {item.name}
              </span>
              <br />
              <br />
              <span className="small mono">PRACTICE</span>
              <br />
              <span className="mono small underline decoration-dotted decoration-[1px] underline-offset-3">
                {item.practice}
              </span>
            </div>
          );
        } else if (item.type === "event") {
          return (
            <div
              className="pt-[20px]"
              key={`${item.person}-${item.eventInfo}-${index}`}
            >
              <h1 className="tipin !text-18">{item.eventInfo}</h1>
              <br />
              <span className="small mono">PERSON</span>
              <br />
              <span className="mono small underline decoration-dotted underline-offset-3">
                {item.person}
              </span>
              <br />
              <br />
              <span className="small mono">PRACTICE</span>
              <br />
              <span className="mono small underline decoration-dotted underline-offset-3">
                {item.practice}
              </span>
            </div>
          );
        }
      })}
    </div>
  );
};
