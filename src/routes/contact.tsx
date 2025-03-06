import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  component: PageContact,
});

function PageContact() {
  return <main>Hello "/contact"!</main>;
}
