import { useEffect } from "react";

export default function useOverRuleTheme(theme) {
  const setCSSVariables = (theme) => {
    for (const value in theme) {
      document.documentElement.style.setProperty(`--${value}`, theme[value]);
    }
  };

  useEffect(
    (e) => {
      setCSSVariables(theme);
    },
    [theme]
  );
}
