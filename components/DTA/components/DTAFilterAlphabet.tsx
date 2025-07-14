"use client";

import * as Collapsible from "@radix-ui/react-collapsible";
import clsx from "clsx";
import * as React from "react";
import DTAFilterButton from "./DTAFilterButton";

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type AlphabetDropdownProps = {
  colorTheme: "people" | "practices" | "institutions" | "collections";
  className?: string;
};

export default function AlphabetDropdown({
  colorTheme,
  className,
}: AlphabetDropdownProps) {
  const [open, setOpen] = React.useState(false);
  const [activeLetters, setActiveLetters] = React.useState<string[]>([]);

  // Determine filterState: expanded if open, applied if any letters selected, else minimized
  const filterState = open
    ? "expanded"
    : activeLetters.length > 0
      ? "applied"
      : "minimized";

  // Toggle letter selection
  const handleToggle = (letter: string) => {
    setActiveLetters((current) => {
      if (current.includes(letter)) {
        return current.filter((l) => l !== letter);
      } else {
        return [...current, letter];
      }
    });
  };

  // Render button label
  const buttonLabel =
    activeLetters.length === 0
      ? "Filter by alphabet"
      : activeLetters.length <= 3
        ? `Filter: ${activeLetters.map((l) => l.toUpperCase()).join(", ")}`
        : `Filter: ${activeLetters.length} selected`;

  return (
    <Collapsible.Root open={open} onOpenChange={setOpen} className={className}>
      <Collapsible.Trigger asChild>
        <button
          aria-expanded={open}
          aria-controls="alphabet-filter-content"
          type="button"
          className="w-fit"
        >
          <DTAFilterButton
            filterState={filterState}
            colorTheme={colorTheme}
            children={buttonLabel}
            className="w-[300px]"
          />
        </button>
      </Collapsible.Trigger>

      <Collapsible.Content
        id="alphabet-filter-content"
        className="mt-1 w-fit border border-dashed border-gray-400 bg-white p-2"
      >
        <ul
          role="listbox"
          aria-label="Alphabet filter"
          className="flex flex-wrap gap-2"
        >
          {alphabet.map((letter) => (
            <li key={letter}>
              <button
                type="button"
                role="option"
                aria-selected={activeLetters.includes(letter)}
                onClick={() => handleToggle(letter)}
                className={clsx(
                  "cursor-pointer px-2 py-1",
                  activeLetters.includes(letter)
                    ? "font-bold underline"
                    : "hover:underline",
                )}
              >
                {letter.toUpperCase()}
              </button>
            </li>
          ))}
        </ul>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
