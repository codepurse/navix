import { useEffect } from "react";

export default function useConsole(dependcies) {
  useEffect(
    (e) => {
      return console.log(dependcies);
    },
    [dependcies]
  );
}
