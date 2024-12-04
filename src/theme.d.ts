
import '@emotion/react';
import { ThemeType } from "./theme";

declare module "@emotion/react" {
  export interface Theme
  {
    colors: {
      textPrimary: string;
      textSecondary: string;
      textOnDark: string;
      textMutedOnDark: string;
      backgroundPrimary: string;
      backgroundSecondary: string;
      backgroundDark: string;
      buttonBackground: string;
      buttonHover: string;
      border: string;
      borderSecondary: string;
      criticalPrimary: string;
      criticalSecondary: string;
      accentPrimary: string,
      accentSecondary: string,
      boxShadow: string;
    };
  }
}