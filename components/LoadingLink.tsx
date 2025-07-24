"use client";

import { useIsomorphicLayoutEffect } from "motion/react";
import Link, { useLinkStatus } from "next/link";
import { ComponentProps, Dispatch, SetStateAction, useState } from "react";

// Link with loading state

export default function LoadingLink({
  children,
  ...props
}: ComponentProps<typeof Link>) {
  const [isPending, setIsPending] = useState(false);
  return (
    <Link {...props} {...(isPending && { "data-loading": "" })}>
      {children}
      <LinkStatus setIsPending={setIsPending} />
    </Link>
  );
}

function LinkStatus({
  setIsPending,
}: {
  setIsPending: Dispatch<SetStateAction<boolean>>;
}) {
  const { pending } = useLinkStatus();
  useIsomorphicLayoutEffect(() => {
    setIsPending(pending);
  }, [pending, setIsPending]);
  return null;
}
