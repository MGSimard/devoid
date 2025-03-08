export function wrapText33(sentence: string, totalLength: number = 33): string[] {
  const words = sentence.split(" ");
  const maxLength = totalLength - 4; // Minus || frames and space paddings (4)

  const lines = [];
  let currentLine = "";
  for (const word of words) {
    // Check if adding the word would exceed maxLength
    if (currentLine.length + word.length + 1 > maxLength) {
      // Push the current line, trimmed and padded to maxLength with "|" added to the start and end
      lines.push(`| ${currentLine.trim().padEnd(maxLength, " ")} |`);
      // Start a new line with the current word
      currentLine = word + " ";
    } else {
      // Add the word to the current line
      currentLine += word + " ";
    }
  }

  // Add any remaining text to lines, trimmed, padded, and wrapped in "|"
  if (currentLine.trim()) {
    lines.push(`| ${currentLine.trim().padEnd(maxLength, " ")} |`);
  }

  return lines;
}
