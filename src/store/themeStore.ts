import { create } from "zustand";
import { persist } from "zustand/middleware";
import { defaultTheme } from "@/themes";

interface ThemeState {
  themeId: string;
  setThemeId: (id: string) => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      themeId: defaultTheme.id,
      setThemeId: (id) => set({ themeId: id }),
    }),
    { name: "nova-exe-theme" }
  )
);
