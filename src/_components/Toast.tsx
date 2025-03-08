// NOTES
/**
 * All lines should always be 33 characters long.
 * First line is: .::::::::::: [ALERT] :::::::::::.
 * Padding line:  |                               |
 * Content line:  | One space padding left, fill  |
 * Content line:  | right right to match 33       |
 * Content line:  | length w/ 1 space padding     | (consider hyphen breaks)
 * Content line:  | minimum                       |
 * Padding line:  |                               |
 * Last line is:  '-------------------------------'
 *
 * Content lines should always have one space of padding on left
 * Content lines should always have at least one space of padding on right
 * Linebreak if text line is greater than 29 characters
 * Always fill remaining space with spacebars to finish 33 length
 * Hyphen break long words
 *
 *
 */

import { wrapText33 } from "@/_utils/helpers";

type TypeEnum = "info" | "warning" | "success" | "error" | "loading";
interface PropTypes {
  message: string;
  type?: TypeEnum;
}

export function Toast({ message }: PropTypes) {
  const firstLine = ".::::::::::: [ALERT] :::::::::::.";
  const padddLine = "|                               |";
  const lasttLine = "'-------------------------------'";
  const contentLines = wrapText33(message, firstLine.length); // Send message and content line length we want

  return (
    <pre>{`${firstLine}
${padddLine}
${contentLines.join("\n")}
${padddLine}
${lasttLine}`}</pre>
  );
}
