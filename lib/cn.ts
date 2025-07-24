import { extendTailwindMerge, validators } from "tailwind-merge";

// Validators:
// https://github.com/dcastil/tailwind-merge/blob/v3.3.1/src/lib/validators.ts

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [{ text: [validators.isNumber] }],
      leading: [{ leading: [validators.isNumber] }],
      "font-weight": [{ font: [validators.isNumber] }],
      "max-w": [{ "max-w": [{ screen: [validators.isNumber] }] }],
    },
    conflictingClassGroupModifiers: {
      // Any standalone leading preceding a font-size class with a line-height modifier should be removed
      "font-size": ["leading"],
    },
  },
  override: {
    conflictingClassGroups: {
      // [creates conflict]: [receives conflict]
      // Remove the default conflict between the font-size and leading class groups (Default is 'font-size': ['leading'])
      "font-size": [],
    },
  },
});

export const cn = twMerge;
