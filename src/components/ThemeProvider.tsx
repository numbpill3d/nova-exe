"use client";

import { useEffect } from "react";
import { useThemeStore } from "@/store/themeStore";
import { getThemeById } from "@/themes";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const themeId = useThemeStore((s) => s.themeId);
  const theme = getThemeById(themeId);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--nova-bg", theme.colors.bg);
    root.style.setProperty("--nova-surface", theme.colors.surface);
    root.style.setProperty("--nova-surface-alt", theme.colors.surfaceAlt);
    root.style.setProperty("--nova-text", theme.colors.text);
    root.style.setProperty("--nova-text-muted", theme.colors.textMuted);
    root.style.setProperty("--nova-accent", theme.colors.accent);
    root.style.setProperty("--nova-accent-text", theme.colors.accentText);
    root.style.setProperty("--nova-border", theme.colors.border);
    root.style.setProperty("--nova-shadow", theme.colors.shadow);
    root.style.setProperty("--nova-radius", theme.borderRadius);
    root.style.setProperty("--nova-font", theme.fontFamily);
    root.style.setProperty("--nova-heading-font", theme.headingFontFamily);
    root.style.setProperty("--nova-cursor", theme.cursor);
    root.style.setProperty("--nova-page-bg", theme.background);
    root.dataset.windowStyle = theme.windowStyle;
    root.dataset.theme = theme.id;
  }, [theme]);

  return <>{children}</>;
}
