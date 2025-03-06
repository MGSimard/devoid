import { useTheme } from "@/_components/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const title = `Toggle ${theme === "dark" ? "Light" : "Dark"} Mode`;

  // TODO I've set the as position: fixed
  // However firefox mobile absolutely shits the bed on bottom position fixed elements
  // So circle back to this if it ends up happening again here
  return (
    <button id="theme-toggle" type="button" aria-label={title} title={title} onClick={toggleTheme}>
      {theme === "dark" ? "Toggle Light" : "Toggle Dark"}
    </button>
  );
}
