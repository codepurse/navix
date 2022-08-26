export const spaceAlign = (value) => {
  switch (value) {
    case "end":
      return "flex-end";
    case "start":
      return "flex-start";
    case "center":
      return "center";
    case "between":
      return "center";
    case "evenly":
      return "space-between";
    default:
      return "flex-start";
  }
};
