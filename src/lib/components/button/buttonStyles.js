export const buttonType = (value, type) => {
  switch (value) {
    case "outline":
      if (type === "primary") return "btnNvxPrimOut";
    case "none":
      if (type === "primary") return "btnNvxPrimNone";
      if (type === "cancel") return "btnNvxCancelNone";
    case "warning":
      return "#ffbf00";
    case "sucess":
      return "#59ba69";
    default:
      return "#fff";
  }
};

export const buttonCname = (value) => {
  switch (value) {
    case "primary":
      return "btnNvxPrimary";
    case "cancel":
      return "btnNvxCancel";
    case "warning":
      return "#ffbf00";
    case "sucess":
      return "#59ba69";
    default:
      return "#fff";
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
