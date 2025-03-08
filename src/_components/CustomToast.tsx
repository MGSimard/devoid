import { wrapText33 } from "@/_utils/helpers";

type TypeEnum = "info" | "warning" | "success" | "error" | "loading";
interface PropTypes {
  message: string;
  type?: TypeEnum;
}

export function CustomToast({ message, type }: PropTypes) {
  const firstLine = ".::::::::::: [ALERT] :::::::::::.";
  const padddLine = "|                               |";
  const lasttLine = "'-------------------------------'";
  const contentLines = wrapText33(message, firstLine.length); // Send message and content line length we want

  return (
    <div className="custom-toast-wrapper">
      <pre className={`custom-toast${type ? ` ct-${type}` : ""}`}>{`${firstLine}
${padddLine}
${contentLines.join("\n")}
${padddLine}
${lasttLine}`}</pre>
    </div>
  );
}
