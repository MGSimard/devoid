import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/insight")({
  component: PageInsight,
});

function PageInsight() {
  throw new Error("Test");

  return (
    <main>
      <section>
        <p>THIS WEBSITE HAS NO PARTICULAR PURPOSE</p>
      </section>
    </main>
  );
}
