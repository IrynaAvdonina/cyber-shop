
export const lightTheme = {
  colors: {
    textPrimary: "#000000",
    textSecondary: "#333333",
    textOnDark: "#ffffff",
    textMutedOnDark: "#909090",
    backgroundPrimary: "#ffffff",
    backgroundSecondary: "#f3f3f3",
    backgroundDark: "#211C24",
    buttonBackground: "#e0e0e0",
    buttonHover: "#bebebe",
    border: "#cccccc",
    borderSecondary: "#9f9f9f",
    criticalPrimary: "#fb6464",
    criticalSecondary: "#e65050",
    accentPrimary: "#8685EF",
    accentSecondary: "#5e5fb5",
    boxShadow: "#5e5e5e",
  },
};

export const darkTheme = {
  colors: {
    textPrimary: "#E6E6E6",
    textSecondary: "#acacac",
    textOnDark: "#ffffff",
    textMutedOnDark: "#909090",
    backgroundPrimary: "#121212",
    backgroundSecondary: "#1e1e1e",
    backgroundDark: "#000000",
    buttonBackground: "#909090",
    buttonHover: "#e0e0e0",
    border: "#555555",
    borderSecondary: "#a1a1a1",
    criticalPrimary: "#e65050",
    criticalSecondary: "#fb6464",
    accentPrimary: "#8685EF",
    accentSecondary: "#5e5fb5",
    boxShadow: "#c6c6c6",
  },
};

export type ThemeType = typeof lightTheme;
