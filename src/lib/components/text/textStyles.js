export const textType = (value) => {
  switch (value) {
    case "primary":
      return "#f7f8fa";
    case "danger":
      return "#fef1f2";
    case "warning":
      return "#ffbf00";
    case "sucess":
      return "#59ba69";
    default:
      return "#f7f8fa";
  }
};

export const borderType = (value) => {
  switch (value) {
    case "primary":
      return "#f7f8fa";
    case "danger":
      return "#f55f5f";
    case "sucess":
      return "#59ba69";
    default:
      return "#eeeeee";
  }
};

export const textSize = (value) => {
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
