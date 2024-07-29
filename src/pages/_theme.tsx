import getSystem from "@/utils/get-system";
const OS = getSystem();

// default theme setting
export const defaultTheme = {
  primary_color: "#443EF7",
  secondary_color: "#FC9B76",
  primary_text: "#000000",
  secondary_text: "#3C3C4399",
  info_color: "#443EF7",
  error_color: "#FF3B30",
  warning_color: "#FF9500",
  success_color: "#06943D",
  background_color: "#F5F5F5",
  font_family: `-apple-system, BlinkMacSystemFont,"Microsoft YaHei UI", "Microsoft YaHei", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji"${
    OS === "windows" ? ", twemoji mozilla" : ""
  }`,
};

// dark mode
export const defaultDarkTheme = {
  ...defaultTheme,
  primary_color: "#443EF7",

  secondary_color: "#FF9F0A",
  primary_text: "#aaa",
  background_color: "#181818",
  secondary_text: "#888888",
  info_color: "#443EF7",
  error_color: "#FF453A",
  warning_color: "#FF9F0A",
  success_color: "#30D158",
};
