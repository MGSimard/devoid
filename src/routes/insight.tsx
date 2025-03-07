import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/insight")({
  component: PageInsight,
});

function PageInsight() {
  return (
    <main>
      <section>
        <p>THIS WEBSITE HAS SERVES PARTICULAR PURPOSE</p>
      </section>
    </main>
  );
}
