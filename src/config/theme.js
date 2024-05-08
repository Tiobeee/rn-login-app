// criação de tema
// https://callstack.github.io/react-native-paper/docs/guides/theming/#creating-dynamic-theme-colors

import { MD3DarkTheme, MD3LightTheme } from "react-native-paper";

// ao colar use o ALT + SHIFT + F para formatar o código
// se você estiver usando o prettier, ele vai formatar o código
// e remover as áspas simples
export const themeLight = {
  ...MD3LightTheme,
  colors: {
    primary: "rgb(56, 107, 1)",
    onPrimary: "rgb(255, 255, 255)",
    primaryContainer: "rgb(183, 244, 129)",
    onPrimaryContainer: "rgb(13, 32, 0)",
    secondary: "rgb(155, 68, 39)",
    onSecondary: "rgb(255, 255, 255)",
    secondaryContainer: "rgb(255, 219, 208)",
    onSecondaryContainer: "rgb(58, 11, 0)",
    tertiary: "rgb(95, 98, 0)",
    onTertiary: "rgb(255, 255, 255)",
    tertiaryContainer: "rgb(229, 234, 93)",
    onTertiaryContainer: "rgb(28, 29, 0)",
    error: "rgb(186, 26, 26)",
    onError: "rgb(255, 255, 255)",
    errorContainer: "rgb(255, 218, 214)",
    onErrorContainer: "rgb(65, 0, 2)",
    background: "rgb(253, 253, 245)",
    onBackground: "rgb(26, 28, 24)",
    surface: "rgb(253, 253, 245)",
    onSurface: "rgb(26, 28, 24)",
    surfaceVariant: "rgb(224, 228, 214)",
    onSurfaceVariant: "rgb(68, 72, 62)",
    outline: "rgb(116, 121, 109)",
    outlineVariant: "rgb(196, 200, 186)",
    shadow: "rgb(0, 0, 0)",
    scrim: "rgb(0, 0, 0)",
    inverseSurface: "rgb(47, 49, 44)",
    inverseOnSurface: "rgb(241, 241, 234)",
    inversePrimary: "rgb(156, 215, 105)",
    elevation: {
      level0: "transparent",
      level1: "rgb(243, 246, 233)",
      level2: "rgb(237, 241, 226)",
      level3: "rgb(231, 237, 218)",
      level4: "rgb(229, 236, 216)",
      level5: "rgb(225, 233, 211)",
    },
    surfaceDisabled: "rgba(26, 28, 24, 0.12)",
    onSurfaceDisabled: "rgba(26, 28, 24, 0.38)",
    backdrop: "rgba(45, 50, 40, 0.4)",
  },
};

export const themeDark = {
  ...MD3DarkTheme,
  dark: true,
  colors: {
    primary: "rgb(165, 200, 255)",
    onPrimary: "rgb(0, 49, 95)",
    primaryContainer: "rgb(0, 71, 134)",
    onPrimaryContainer: "rgb(212, 227, 255)",
    secondary: "rgb(85, 219, 198)",
    onSecondary: "rgb(0, 55, 48)",
    secondaryContainer: "rgb(0, 80, 71)",
    onSecondaryContainer: "rgb(118, 248, 226)",
    tertiary: "rgb(200, 206, 68)",
    onTertiary: "rgb(49, 51, 0)",
    tertiaryContainer: "rgb(71, 74, 0)",
    onTertiaryContainer: "rgb(229, 234, 93)",
    error: "rgb(255, 180, 171)",
    onError: "rgb(105, 0, 5)",
    errorContainer: "rgb(147, 0, 10)",
    onErrorContainer: "rgb(255, 180, 171)",
    background: "rgb(26, 28, 30)",
    onBackground: "rgb(227, 226, 230)",
    surface: "rgb(26, 28, 30)",
    onSurface: "rgb(227, 226, 230)",
    surfaceVariant: "rgb(67, 71, 78)",
    onSurfaceVariant: "rgb(195, 198, 207)",
    outline: "rgb(141, 145, 153)",
    outlineVariant: "rgb(67, 71, 78)",
    shadow: "rgb(0, 0, 0)",
    scrim: "rgb(0, 0, 0)",
    inverseSurface: "rgb(227, 226, 230)",
    inverseOnSurface: "rgb(47, 48, 51)",
    inversePrimary: "rgb(0, 95, 175)",
    elevation: {
      level0: "transparent",
      level1: "rgb(33, 37, 41)",
      level2: "rgb(37, 42, 48)",
      level3: "rgb(41, 47, 55)",
      level4: "rgb(43, 49, 57)",
      level5: "rgb(46, 52, 62)",
    },
    surfaceDisabled: "rgba(227, 226, 230, 0.12)",
    onSurfaceDisabled: "rgba(227, 226, 230, 0.38)",
    backdrop: "rgba(45, 49, 56, 0.4)",
  },
};
