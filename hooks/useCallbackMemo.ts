import { useMemo, useRef } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function useCallbackMemo<T extends (...args: any[]) => any>(
  callback: T | undefined,
): T {
  const callbackRef = useRef(callback);
  callbackRef.current = callback;
  return useMemo(() => ((...args) => callbackRef.current?.(...args)) as T, []);
}
