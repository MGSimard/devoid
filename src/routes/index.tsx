import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: PageIndex,
});

function PageIndex() {
  return (
    <main id="hero">
      <h1>VOID</h1>
      <p>THIS WEBSITE HAS NO PARTICULAR PURPOSE</p>
    </main>
  );
}
