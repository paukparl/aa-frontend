import { isEqual } from "lodash";
import { useRef } from "react";

function useDeepMemo<T>(value: T) {
  const ref = useRef<T>(undefined);
  if (!isEqual(ref.current, value)) {
    ref.current = value;
  }
  return ref.current as T;
}

export default useDeepMemo;
