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
        <a href="#" className="link">
          Test Link
        </a>
        <h2>Tooltip & Notification planning</h2>
        <ul>
          <li>- Purely ASCII, character borders</li>
          <li>- Calculate frame width and height depending on character count</li>
          <li>- Setup a max width for linebreaks</li>
          <li>- Consider viewport width, zoom level etc</li>
        </ul>
      </section>
      <section>
        <h2>Notification component test</h2>
        <Toast message="This is a message test" />
        <Toast message="This is a longer message test" />
        <Toast message="This is a much longer message test, this is a much longer message test, this is a much longer message test" />
        <Toast message="This is a looooooooooooooooooooooooooooooooooooooooooooooooooooooooong message test" />
        <Toast message="This is a loooooooooooooooooooooooong word message test, there should never be any overflow and the only times where a word should be hyphenated is if there were to be at least 3 characters in the before line, and three characters in the after line (not counting the hyphen) " />
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
