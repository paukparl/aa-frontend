"use client";

import { useEffect, useState } from "react";

export default function MountTest() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Component mounted");
  }, []);
  return (
    <div
      className="fixed top-20 right-20 z-50"
      onClick={() => setCount((c) => c + 1)}
    >
      Increment: {count}
    </div>
  );
}
