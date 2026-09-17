"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun as LuSun, Moon as LuMoon } from "lucide-react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-7 w-16 rounded-lg bg-zinc-100 dark:bg-zinc-800 opacity-50 animate-pulse" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <div
      role="group"
      aria-label="Theme toggle (Light or Dark)"
      className="inline-flex items-center p-0.5 rounded-lg border border-border/80 bg-zinc-100/80 dark:bg-zinc-800/80 text-xs font-medium gap-0.5 select-none transition-colors duration-350"
    >
      <button
        type="button"
        onClick={() => setTheme("light")}
        aria-label="Switch to Light mode"
        aria-pressed={!isDark}
        className={`group relative flex items-center justify-center p-1.5 rounded-md transition-all duration-150 ease-out active:scale-[0.95] ${
          !isDark
            ? "bg-white text-foreground shadow-xs font-semibold"
            : "text-muted hover:text-foreground hover:bg-zinc-200/60 dark:hover:bg-zinc-700/50"
        }`}
      >
        <LuSun
          size={14}
          className={`transition-all duration-300 ease-out transform ${
            !isDark
              ? "rotate-0 scale-100 opacity-100"
              : "-rotate-45 scale-[0.8] opacity-45 group-hover:scale-95 group-hover:opacity-80"
          }`}
        />
        <span className="sr-only">Light</span>
      </button>

      <button
        type="button"
        onClick={() => setTheme("dark")}
        aria-label="Switch to Dark mode"
        aria-pressed={isDark}
        className={`group relative flex items-center justify-center p-1.5 rounded-md transition-all duration-150 ease-out active:scale-[0.95] ${
          isDark
            ? "bg-zinc-900 text-foreground shadow-xs font-semibold"
            : "text-muted hover:text-foreground hover:bg-zinc-200/60 dark:hover:bg-zinc-700/50"
        }`}
      >
        <LuMoon
          size={14}
          className={`transition-all duration-300 ease-out transform ${
            isDark
              ? "rotate-0 scale-100 opacity-100"
              : "rotate-45 scale-[0.8] opacity-45 group-hover:scale-95 group-hover:opacity-80"
          }`}
        />
        <span className="sr-only">Dark</span>
      </button>
    </div>
  );
}
