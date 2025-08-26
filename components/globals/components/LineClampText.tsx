"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/cn";

type LineClampTextProps = {
  className?: string;
  children: ReactNode;
  lineLimit: number;
};

export const LineClampText = ({ children, className }: LineClampTextProps) => {
  //   const [isClamped, setIsClamped] = useState(null);
  return <div className={cn("h-fit", className)}>{children}</div>;
};
