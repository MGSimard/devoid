import { createFileRoute } from "@tanstack/react-router";
import { Notification } from "@/_components/Notification";
import { toast } from "sonner";

export const Route = createFileRoute("/notif-lab")({
  component: PageNotifLab,
});

function PageNotifLab() {
  return (
    <main>
      <section>
        <h2>Notification component test</h2>
        <button type="button" onClick={() => toast("Test")}>
          Test Regular Sonner
        </button>
        <button
          type="button"
          onClick={() => toast.custom(() => <Notification message="A generic feedback message." />)}>
          Test Custom Sonner
        </button>
        <h2>Notification component</h2>
        <Notification message="This is a much longer message test, this is a much longer message test, this is a much longer message test" />
        <Notification message="This is a looooooooooooooooooooooooooooooooooooooooooooooooooooooooong message test" />
        <Notification message="This is a loooooooooooooooooooooooong word message test, there should never be any overflow and the only times where a word should be hyphenated is if there were to be at least 3 characters in the before line, and three characters in the after line (not counting the hyphen)" />
        <Notification message="This is a message test" />
        <Notification message="This is a longer message test" />
      </section>
    </main>
  );
}
