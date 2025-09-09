"use client";

import { redirect } from "next/navigation";

export default function Redirect({ href }: { href: string }) {
  redirect(href);
  return null;
}
