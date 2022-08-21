import { useState } from "react";

export default function useArray(defaultValue) {
  const [cookie, setCookie] = useState(defaultValue);

  function clear() {
    document.cookie = defaultValue + "=; Max-Age=0";
  }

  return { cookie, clear };
}
