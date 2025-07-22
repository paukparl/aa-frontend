import { useRef } from "react";

export default function useInitial<T>(state: T): T {
  const ref = useRef<T>(state);
  return ref.current;
}
