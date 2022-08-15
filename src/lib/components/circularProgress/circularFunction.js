export const circleSize = (value) => {
  switch (value) {
    case "sm":
      return "40px";
    case "md":
      return "50px";
    case "lg":
      return "80px";
    case "xl":
      return "100px";
    default:
      return "100%";
  }
};

export const circleSpeed = (value) => {
  switch (value) {
    case "slow":
      return "5s";
    case "moderate":
      return "3s";
    case "fast":
      return "1s";
    default:
      return "3s";
  }
};
