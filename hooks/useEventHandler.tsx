import { DebounceSettings, ThrottleSettings, debounce, throttle } from "lodash";
import { RefObject, useEffect } from "react";
import useCallbackMemo from "@/hooks/useCallbackMemo";
import useDeepMemo from "@/hooks/useDeepMemo";
import isReactRef from "@/lib/isReactRef";

type TThrottleOptions = { wait: number } & ThrottleSettings;
type TDebounceOptions = { wait: number } & DebounceSettings;
type TOptions =
  | {
      throttle: TThrottleOptions;
      debounce?: never;
    }
  | {
      throttle?: never;
      debounce: TDebounceOptions;
    };

function useEventHandler<T extends keyof HTMLElementEventMap>({
  target: targetProp,
  event,
  handler: handlerProp,
  options: optionsProp,
}: {
  target: "window" | "document" | RefObject<HTMLElement> | HTMLElement;
  event: T;
  handler: (event: HTMLElementEventMap[T]) => void;
  options?: TOptions;
}) {
  const handler = useCallbackMemo(handlerProp);

  const options = useDeepMemo(optionsProp);

  useEffect(() => {
    const target = isReactRef(targetProp)
      ? targetProp.current
      : targetProp instanceof HTMLElement
        ? targetProp
        : targetProp === "document"
          ? document
          : window;
    if (target == null) return () => {};
    const modifiedHandler = options?.throttle
      ? throttle(handler, options.throttle.wait, options.throttle)
      : options?.debounce
        ? debounce(handler, options.debounce.wait, options.debounce)
        : handler;
    // @ts-expect-error: addEventListener not taking modifiedHandler
    target.addEventListener(event, modifiedHandler);
    return () => {
      // @ts-expect-error: addEventListener not taking modifiedHandler
      target.removeEventListener(event, modifiedHandler);
    };
  }, [targetProp, event, handler, options]);
}

export default useEventHandler;
