import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/cipher")({
  component: PageCipher,
});

function PageCipher() {
  return (
    <main>
      <section>
        <h2>Cipher Component Test</h2>
        <pre></pre>
      </section>
    </main>
  );
}
