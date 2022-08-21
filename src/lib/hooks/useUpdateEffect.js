import { useEffect, useRef } from "react";

export default function useUpdate(callback, dependcies) {
  const firstRender = useRef(true);
  useEffect((e) => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    return callback();
  }, dependcies);
}
