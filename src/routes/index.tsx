import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: PageIndex,
});

function PageIndex() {
  return (
    <main>
      <section>
        <h2>Void</h2>
        <p>Text</p>
      </section>
    </main>
  );
}
