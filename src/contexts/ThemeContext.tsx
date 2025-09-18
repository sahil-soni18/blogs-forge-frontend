"use client";

import { themeContextType } from "@/types/theme";
import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext<themeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<"light" | "dark">(); // no default value
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme) setMode(savedTheme as "light" | "dark");
    else if (systemPrefersDark) setMode("dark");
    else setMode("light");

    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (!mode) return;
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("theme", newMode);
  };

  if (!mounted || !mode) {
    // Render nothing or a fallback until theme is determined
    return null;
  }

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
};
