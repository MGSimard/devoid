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
        <ul>
          <li>- Automatically fill container with random string</li>
          <li>- Exact character fit (monospace font only)</li>
          <li>- Responsive to container & character size changes</li>
        </ul>
        <CipherPre />
      </section>
      <section>
        <h2>Next Steps</h2>
        <ul>
          <li>- Hide all characters</li>
          <li>- Show characters within a radius of pointer (mask?)</li>
          <li>- Scale characters to proximity of pointer?</li>
        </ul>
      </section>
    </main>
  );
}
