
import React, { createContext, useContext, useState } from "react";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { lightTheme, darkTheme } from './../themes/themes';

type ThemeMode = "light" | "dark";

interface ThemeContextType
{
  theme: typeof lightTheme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children, }) =>
{
  const [themeMode, setThemeMode] = useState<ThemeMode>("light");
  const theme = themeMode === "light" ? lightTheme : darkTheme;

  const toggleTheme = () =>
  {
    setThemeMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () =>
{
  const context = useContext(ThemeContext);
  if (!context)
  {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};
