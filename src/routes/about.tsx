import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: PageAbout,
});

function PageAbout() {
  return <main>Hello "/about"!</main>;
}
