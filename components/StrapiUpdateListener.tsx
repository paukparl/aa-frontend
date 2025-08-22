"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

// Listens for updates from Strapi and refreshes the page in embedded live preview
export default function StrapiUpdateListener() {
  const router = useRouter();
  useEffect(() => {
    const handleMessage = async (message: MessageEvent) => {
      if (
        message.origin === process.env.NEXT_PUBLIC_API_URL &&
        message.data.type === "strapiUpdate"
      ) {
        router.refresh();
      }
    };
    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [router]);

  return null;
}
