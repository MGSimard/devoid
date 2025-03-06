import { useTheme } from "@/_components/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const title = `Toggle ${theme === "dark" ? "Light" : "Dark"} Mode`;

  return (
    <button type="button" aria-label={title} title={title} className="theme-toggle" onClick={toggleTheme}>
      {theme === "dark" ? "Toggle Light" : "Toggle Dark"}
    </button>
  );
}
