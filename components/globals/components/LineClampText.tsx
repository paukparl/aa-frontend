"use client";

import { ReactNode, Suspense, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type LineClampTextProps = {
  className?: string;
  children: ReactNode;
  lineLimit: Number;
};

export const LineClampText = ({ children, className }: LineClampTextProps) => {
  //   const [isClamped, setIsClamped] = useState(null);
  return <div className={cn(className, "h-fit")}>{children}</div>;
};
