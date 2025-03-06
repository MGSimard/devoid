import { ThemeToggle } from "@/_components/ThemeToggle";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="App">
      <h1>Zodiak</h1>
      <p>Satoshi</p>
      <ThemeToggle />
    </div>
  );
}
