import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: PageIndex,
});

function PageIndex() {
  return (
    <main>
      <section>
        <Pre />
      </section>
    </main>
  );
}

const Pre = () => {
  return (
    <pre aria-label="VOID">{`██    ██  ██████  ██ ██████
██    ██ ██    ██ ██ ██   ██
██    ██ ██    ██ ██ ██   ██
 ██  ██  ██    ██ ██ ██   ██
  ████    ██████  ██ ██████`}</pre>
  );
};
