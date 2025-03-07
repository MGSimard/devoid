import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: PageIndex,
});

function PageIndex() {
  return (
    <>
      <header>
        <span>.:::</span>
        <h1>VOID</h1>
        <span>:::.</span>
      </header>
      <main>
        <p>THIS WEBSITE HAS NO PARTICULAR PURPOSE</p>
      </main>
    </>
  );
}
