export const dividerSize = (size) => {
  var options = {
    xs: "var(--divider-size-xs)",
    sm: "var(--divider-size-sm)",
    md: "var(--divider-size-md)",
    lg: "var(--divider-size-lg)",
    xl: "var(--divider-size-xl)",
    default: size,
  };
  return options[size] || options["default"];
};
