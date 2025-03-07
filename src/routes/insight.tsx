import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/insight")({
  component: PageInsight,
});

function PageInsight() {
  return (
    <main>
      <section>
        <p>THIS WEBSITE SERVES NO PARTICULAR PURPOSE</p>
      </section>
    </main>
  );
}
