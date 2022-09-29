export const fontSize = (value) => {
  switch (value) {
    case "sm":
      return "12px";
    case "md":
      return "15px";
    case "lg":
      return "20px";
    case "xl":
      return "28px";
    case "xxl":
      return "38px";
    default:
      return "14px";
  }
};
