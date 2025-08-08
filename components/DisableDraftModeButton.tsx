"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { disableDraftMode } from "@/lib/actions";
import { cn } from "@/lib/cn";

export function DisableDraftMode() {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  // Render only when the page is not in an iframe
  if (
    typeof window === 'undefined' ||
    window !== window.parent ||
    !!window.opener
  )
    return null;

  const disable = () =>
    startTransition(async () => {
      await disableDraftMode();
      router.refresh();
    });

  return (
    <button
      type="button"
      onClick={disable}
      className={cn(
        "fixed right-16 bottom-16 z-100 h-40 rounded-full bg-white px-16 font-nhg-text text-16 font-500 text-black shadow-lg transition-transform duration-200 not-disabled:cursor-pointer hover:not-disabled:scale-110",
        pending && "cursor-wait",
      )}
      disabled={pending}
    >
      {pending ? "Exiting..." : "Exit Preview"}
    </button>
  );
}
