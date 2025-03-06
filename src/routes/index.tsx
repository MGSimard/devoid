import { Header } from "@/_components/layout/Header";
import { Section } from "@/_components/layout/Section";
import { ThemeToggle } from "@/_components/ThemeToggle";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: PageIndex,
});

function PageIndex() {
  return (
    <>
      <Header>
        <h1>Zodiak</h1>
      </Header>
      <main>
        <Section>
          <h2>Satoshi Font</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at nibh sit amet dolor semper tincidunt a
            eget diam. Curabitur sapien ligula, sodales quis arcu ac, accumsan tristique ex. Morbi id ante sit amet mi
            auctor consequat. Aliquam imperdiet congue elit et scelerisque. Cras commodo fermentum nulla eget tempor.
            Vestibulum a sollicitudin metus, id semper sapien. Aliquam vitae finibus nulla. Cras id ex at enim posuere
            ultrices. Sed ut semper dolor. Donec tellus ligula, pharetra quis ex ut, gravida auctor lorem. Donec vitae
            vulputate ligula. Vivamus nec metus risus. Morbi nulla mauris, tempor vel nibh gravida, ultrices posuere
            arcu.
          </p>
        </Section>
        <Section>
          <h2>Theme Toggle</h2>
          <ThemeToggle />
        </Section>
      </main>
    </>
  );
}
