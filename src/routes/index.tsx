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
      <section>
        <h2>Testing mobile bullshit</h2>
        <SmallPre />
      </section>
      <section>
        <a href="#" className="link">
          Test Link
        </a>
      </section>
    </main>
  );
}

function Pre() {
  return (
    <pre aria-label="DEVOID">{`████████▄     ▄████████  ▄█    █▄   ▄██████▄   ▄█  ████████▄
███   ▀███   ███    ███ ███    ███ ███    ███ ███  ███   ▀███
███    ███   ███    █▀  ███    ███ ███    ███ ███▌ ███    ███
███    ███  ▄███▄▄▄     ███    ███ ███    ███ ███▌ ███    ███
███    ███ ▀▀███▀▀▀     ███    ███ ███    ███ ███▌ ███    ███
███    ███   ███    █▄  ███    ███ ███    ███ ███  ███    ███
███   ▄███   ███    ███ ███    ███ ███    ███ ███  ███   ▄███
████████▀    ██████████  ▀██████▀   ▀██████▀  █▀   ████████▀`}</pre>
  );
}

function SmallPre() {
  return (
    <pre aria-label="DEVOID">{`████████▄     ▄████████
███   ▀███   ███    ███
███    ███   ███    █▀
███    ███  ▄███▄▄▄
███    ███ ▀▀███▀▀▀
███    ███   ███    █▄
███   ▄███   ███    ███
████████▀    ██████████`}</pre>
  );
}
