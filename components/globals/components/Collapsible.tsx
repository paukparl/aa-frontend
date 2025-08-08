import clsx from "clsx";
import { Accordion } from "radix-ui";
import * as React from "react";

type CollapsibleItem = { header: React.ReactNode; content: React.ReactNode };
type CollapsibleProps = {
  items: CollapsibleItem[];
  className?: string;
};

export const Collapsible = ({ items, className }: CollapsibleProps) => {
  return (
    <Accordion.Root
      className={clsx(className, "w-full")}
      type="single"
      defaultValue="item-1"
      collapsible
    >
      {items.map((item, index) => (
        <Accordion.Item
          key={index}
          value={`item-${index + 1}`}
          className="mt-[-1px] border-y border-dotted border-black py-[20px]"
        >
          <Accordion.Trigger className="group block cursor-pointer pb-[10px]">
            <span className="body !font-bold">
              <svg
                width="18"
                height="18"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="group mr-[10px] mb-[5px] inline w-fit group-data-[state=open]:hidden"
              >
                <path
                  d="M0.0263672 10.5263L20.0264 10.5263"
                  stroke="black"
                  strokeWidth="5"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 0.526306L10 20.5263"
                  stroke="black"
                  strokeWidth="5"
                  strokeLinejoin="round"
                />
              </svg>
              <svg
                width="18"
                height="auto"
                viewBox="0 0 20 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="group mr-[10px] mb-[5px] inline w-fit group-data-[state=closed]:hidden"
              >
                <path
                  d="M0 2.5H20"
                  stroke="black"
                  strokeWidth="5"
                  strokeLinejoin="round"
                />
              </svg>
              {item.header}
            </span>
          </Accordion.Trigger>
          <Accordion.Content>
            <span className="body">{item.content}</span>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
};
