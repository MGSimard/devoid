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
        <h2>Tooltip & Notification planning</h2>
        <ul>
          <li>- Purely ASCII, character borders</li>
          <li>- Calculate frame width and height depending on character count</li>
          <li>- Setup a max width for linebreaks</li>
          <li>- Consider viewport width, zoom level etc</li>
        </ul>
      </section>
      <section>
        <h2>Notification</h2>
        <p>Bit like sonner?</p>
        <Notification />
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
* Monospace, calc char amount, adjust frame width    *
* and then adjust the amount of asterixes for emulated   *
* space in the tooltip. Also have to consider current    *
* viewport width, if position would render outside       *
* the viewport, current screen zoom relative to viewport *
* width etc.                                             *
**********************************************************`}</pre>
  );
}

function Notification() {
  return (
    <pre>{`.::::::::::: [NOTIFICATION] :::::::::::.
|                                      |
| Would pop up similarly to Sonner     |
| Again, adjust frame character length |
| depending on inner chars with a max  |
| width?                               |
|                                      |
'--------------------------------------'`}</pre>
  );
}
