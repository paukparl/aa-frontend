import { useEffect, useRef } from "react";
import useCallbackMemo from "@/hooks/useCallbackMemo";

export default function useAnimationFrame(
  callback: (delta: number) => void,
  enabled = true,
) {
  const callbackMemo = useCallbackMemo(callback);
  const requestRef = useRef<number>(undefined);
  const lastTimeRef = useRef<number>(undefined);

  useEffect(() => {
    if (!enabled) return;

    const animate = (time: number) => {
      if (lastTimeRef.current != null) {
        const delta = time - lastTimeRef.current;
        callbackMemo(delta);
      }
      lastTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current != null) {
        cancelAnimationFrame(requestRef.current);
      }
      lastTimeRef.current = undefined;
    };
  }, [enabled, callbackMemo]);
}
