import { useEffect, useRef } from "react";

export function usePrevious(value: string | number | boolean | undefined | null | object | any[]) {
  const ref = useRef(value);
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
