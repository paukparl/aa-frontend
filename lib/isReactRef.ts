// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isReactRef = <T>(value: any): value is React.RefObject<T> => {
  return value && typeof value === "object" && "current" in value;
};

export default isReactRef;
