"use client";
import { useTheme } from "@/context/ThemeContext";
import { GradientTheme } from "@/themes/GradientTheme";
import { MinimalistTheme } from "@/themes/MinimalistTheme";
import { DarkTheme } from "@/themes/DarkTheme";
import { BentoTheme } from "@/themes/BentoTheme";
import { TerminalTheme } from "@/themes/TerminalTheme";
import { GlassTheme } from "@/themes/GlassTheme";
import { BoldTheme } from "@/themes/BoldTheme";
import { MagazineTheme } from "@/themes/MagazineTheme";

export function PortfolioContent() {
  const { theme } = useTheme();

  const themes = {
    gradient: GradientTheme,
    minimalist: MinimalistTheme,
    dark: DarkTheme,
    bento: BentoTheme,
    terminal: TerminalTheme,
    glass: GlassTheme,
    bold: BoldTheme,
    magazine: MagazineTheme,
  };

  const ThemeComponent = themes[theme];

  return <ThemeComponent />;
}
