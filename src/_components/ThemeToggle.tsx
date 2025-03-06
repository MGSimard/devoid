import { useTheme } from "@/_components/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const title = `Toggle ${theme === "dark" ? "Light" : "Dark"} Mode`;

  // TODO I've set the as position: fixed
  // However firefox mobile absolutely shits the bed on bottom position fixed elements
  // So circle back to this if it ends up happening again here
  // (I think you can just use absolute in this spot and it'll work fine)
  return (
    <button id="theme-toggle" type="button" aria-label={title} title={title} onClick={toggleTheme}>
      {theme === "dark" ? "◇" : "◆"}
    </button>
  );
}
