import { createFileRoute } from "@tanstack/react-router";
import { CustomToast } from "@/_components/CustomToast";
import { toast } from "sonner";

export const Route = createFileRoute("/echo")({
  component: PageEcho,
});

function PageEcho() {
  return (
    <main>
      <section>
        <h2>Echo Component Test</h2>
        <button type="button" onClick={() => toast("Test")}>
          Test Regular Sonner
        </button>
        <button type="button" onClick={() => toast.custom(() => <CustomToast message="A generic feedback message." />)}>
          Test Echo
        </button>
        <button
          type="button"
          onClick={() => toast.custom(() => <CustomToast message="A generic error message." type="error" />)}>
          Test Echo (error)
        </button>
        <h2>Echo component</h2>
        <CustomToast message="This is a much longer message test, this is a much longer message test, this is a much longer message test" />
        <CustomToast message="This is a looooooooooooooooooooooooooooooooooooooooooooooooooooooooong message test" />
        <CustomToast message="This is a loooooooooooooooooooooooong word message test, there should never be any overflow and the only times where a word should be hyphenated is if there were to be at least 3 characters in the before line, and three characters in the after line (not counting the hyphen)" />
        <CustomToast message="This is a message test" />
        <CustomToast message="This is a longer message test" />
        <CustomToast message="This is an error message test" type="error" />
      </section>
    </main>
  );
}
