import { DependencyList, useEffect, useRef } from "react";

// If deps is undefined, previous value will be updated on every render
export default function usePrevious<T>(
  state: T,
  deps?: DependencyList,
): T | undefined {
  const ref = useRef<T>(undefined);
  useEffect(() => {
    ref.current = state;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  return ref.current;
}
