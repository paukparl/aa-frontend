import * as React from "react";

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
      <div className="h-fit w-[260px] p-[10px]">
        {items.map((item) => {
          if (item.type === "person") {
            return (
              <div>
                <div>PERSON</div>
                <div>PRACTICE</div>
              </div>
            );
          } else if (item.type === "event") {
            return (
              <div>
                <h1>{item.eventInfo}</h1>
                <div>PERSON</div>
                <div>PRACTICE</div>
              </div>
            );
          }
        })}
      </div>
    </>
  );
};
