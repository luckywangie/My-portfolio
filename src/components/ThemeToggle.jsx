import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed max-sm:hidden top-5 right-5 z-50 p-3 rounded-full transition-all duration-300",
        "bg-background/20 backdrop-blur-md border border-white/10 shadow-lg hover:bg-background/40 hover:scale-110",
        "focus:outline-hidden"
      )}
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <Sun className="h-5 w-5 text-yellow-300 drop-shadow-[0_0_8px_rgba(253,224,71,0.5)]" />
      ) : (
        <Moon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
      )}
    </button>
  );
};
