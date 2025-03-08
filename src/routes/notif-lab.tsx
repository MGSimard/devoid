import { createFileRoute } from "@tanstack/react-router";
import { Toast } from "@/_components/Toast";
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
        <Toast message="This is a message test" />
        <Toast message="This is a longer message test" />
        <Toast message="This is a much longer message test, this is a much longer message test, this is a much longer message test" />
        <Toast message="This is a looooooooooooooooooooooooooooooooooooooooooooooooooooooooong message test" />
        <Toast message="This is a loooooooooooooooooooooooong word message test, there should never be any overflow and the only times where a word should be hyphenated is if there were to be at least 3 characters in the before line, and three characters in the after line (not counting the hyphen) " />
      </section>
    </main>
  );
}
