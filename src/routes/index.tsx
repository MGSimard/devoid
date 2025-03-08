import { createFileRoute } from "@tanstack/react-router";
import { Toast } from "@/_components/Toast";

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
        <p>Bit like sonner? We'll see if I want the text centered later</p>
        <Notification />
        <Notification2 />
        <Notification3 />
      </section>
      <section>
        <h2>Dynamic component test</h2>
        <Toast message="This is a message test" />
        <Toast message="This is a longer message test" />
        <Toast message="This is a much longer message test, this is a much longer message test, this is a much longer message test" />
        <Toast message="This is a looooooooooooooooooooooooooooooooooooooooooooooooooooooooong word message test (wordbreak not implemented yet)" />
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
