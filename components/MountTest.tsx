"use client";

import { useEffect, useState } from "react";

export default function MountTest() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Component mounted");
  }, []);
  return <div onClick={() => setCount((c) => c + 1)}>Increment: {count}</div>;
}
