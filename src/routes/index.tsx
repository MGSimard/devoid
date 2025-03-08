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
        <h2>Tooltip planning</h2>
        <Tooltip />
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

function Tooltip() {
  return (
    <pre>{`**********************************************************
*                                                        *
* Since we're monospace I could calc character amount    *
* and then adjust the amount of asterixes for emulated   *
* space in the tooltip. Also have to consider current    *
* viewport width, if position would render outside       *
* the viewport, current screen zoom relative to viewport *
* width etc.                                             *
*                                                        *
**********************************************************`}</pre>
  );
}
