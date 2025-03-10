import { createFileRoute } from "@tanstack/react-router";
import { CipherPre } from "@/_components/CipherPre";

export const Route = createFileRoute("/cipher")({
  component: PageCipher,
});

function PageCipher() {
  return (
    <main>
      <section>
        <h2>Cipher Component Test</h2>
        <CipherPre />
      </section>
    </main>
  );
}
