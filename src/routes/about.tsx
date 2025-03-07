import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: PageAbout,
});

function PageAbout() {
  return (
    <>
      <header>
        <span>.:::</span>
        <h1>ABOUT</h1>
        <span>:::.</span>
      </header>
      <main>
        <p>THIS WEBSITE HAS NO PARTICULAR PURPOSE</p>
      </main>
    </>
  );
}
