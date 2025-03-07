import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: PageIndex,
});

function PageIndex() {
  return (
    <main>
      <p>THIS WEBSITE HAS NO PARTICULAR PURPOSE</p>
    </main>
  );
}
