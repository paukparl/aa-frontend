import { useEffect, useRef } from "react";

export function useSafeTimeout() {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function setSafeTimeout(fn: () => void, delay: number) {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      timeoutRef.current = null;
      fn();
    }, delay);
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return setSafeTimeout;
}
