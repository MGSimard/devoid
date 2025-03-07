import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: PageIndex,
});

function PageIndex() {
  return (
    <main>
      <section>
        <p>THIS WEBSITE HAS NO PARTICULAR PURPOSE</p>
      </section>
    </main>
  );
}
