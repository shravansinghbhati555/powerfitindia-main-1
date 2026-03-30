import { createContext, useContext, type ReactNode } from "react";
import type { CategoryTheme } from "@/config/categoryThemes";

const ThemeContext = createContext<CategoryTheme | null>(null);

export function useCategoryTheme() {
  const t = useContext(ThemeContext);
  if (!t) throw new Error("useCategoryTheme must be used within CategoryThemeProvider");
  return t;
}

export default function CategoryThemeProvider({ theme, children }: { theme: CategoryTheme; children: ReactNode }) {
  return (
    <ThemeContext.Provider value={theme}>
      <div
        style={
          {
            "--cat-accent": theme.accent,
            "--cat-accent-dim": theme.accentDim,
            "--cat-accent-glow": theme.accentGlow,
          } as React.CSSProperties
        }
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

