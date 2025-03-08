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
        <Notification2 />
        <Notification3 />
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

function Notification() {
  return (
    <pre>{`.::::::::::: [ALERT] :::::::::::.
|                               |
| This is an example alert      |
|                               |
'-------------------------------'`}</pre>
  );
}

function Notification2() {
  return (
    <pre>{`.::::::::::: [ALERT] :::::::::::.
|                               |
| This is also an example alert |
|                               |
'-------------------------------'`}</pre>
  );
}

function Notification3() {
  return (
    <pre>{`.::::::::::: [ALERT] :::::::::::.
|                               |
| This is yet another example   |
| alert                         |
|                               |
'-------------------------------'`}</pre>
  );
}
