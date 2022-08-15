export const getFirstLetters = (str) => {
  const firstLetters = str
    .split(" ")
    .map((word) => word[0])
    .join("");
  return firstLetters;
};

export const getSize = (size) => {
  switch (size) {
    case "lg":
      return { width: "55px", height: "55px" };
    case "md":
      return { width: "45px", height: "45px" };
    case "sm":
      return { width: "40px", height: "40px" };
    default:
      return { width: "45px", height: "45px" };
  }
};
