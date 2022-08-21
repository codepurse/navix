import { useState } from "react";

export default function useDebounce(func, delay) {
  const [timer, setTimer] = useState(null);
  return (...args) => {
    clearTimeout(timer);
    let _temp = setTimeout(() => {
      func(...args);
    }, delay);
    setTimer(_temp);
  };
}
