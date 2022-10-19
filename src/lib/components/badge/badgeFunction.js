export const badgeType = (value) => {
  switch (value) {
    case "info":
      return "nvxBadgeInfo";
    case "danger":
      return "nvxBadgeDanger";
    case "warning":
      return "nvxBadgeWarning";
    case "sucess":
      return "nvxBadgeSucess";
    default:
      return "nvxBadgeNeutral";
  }
};
