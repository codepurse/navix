export const buttonType = (value) => {
  switch (value) {
    case "primary":
      return "#003A61";
    case "danger":
      return "#ff5f5f";
    case "warning":
      return "#ffbf00";
    case "sucess":
      return "#59ba69";
    default:
      return "#a7a9ac";
  }
};

export const buttonSize = (value) => {
  switch (value) {
    case "lg":
      return "18px";
    case "md":
      return "15px";
    case "sm":
      return "13px";
    default:
      return "15px";
  }
};
