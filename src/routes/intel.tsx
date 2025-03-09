import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/intel")({
  component: PageIntel,
});

function PageIntel() {
  return (
    <main>
      <section>
        <p>THIS WEBSITE SERVES NO PARTICULAR PURPOSE</p>
      </section>
    </main>
  );
}
