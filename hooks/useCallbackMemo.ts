import { useEffect, useMemo, useRef } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function useCallbackMemo<T extends (...args: any[]) => any>(
  callback: T,
): T {
  const callbackRef = useRef(callback);
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);
  return useMemo(() => ((...args) => callbackRef.current?.(...args)) as T, []);
}
