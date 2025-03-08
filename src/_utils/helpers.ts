export function wrapText33(msg: string, lineLength: number): string[] {
  const words = msg.trim().split(/\s+/);
  const maxContentLength = lineLength - 4; // Minus both frames and both space paddings
  const formatLine = (text: string) => {
    return `| ${text.padEnd(maxContentLength, " ")} |`;
  };
  const lines: string[] = [];
  let currentLine = "";

  for (const word of words) {
    const wordLength = word.length;
    const currentLineLength = currentLine.length;
    const spaceNeeded = currentLineLength ? 1 : 0; // Space needed if not at start of line

    // If word fits in current line
    if (currentLineLength + wordLength + spaceNeeded <= maxContentLength) {
      currentLine += (spaceNeeded ? " " : "") + word;
    }

    // If there's at least 4 characters of space left and word is at least 8 chars
    else if (wordLength >= 8 && maxContentLength - currentLineLength - spaceNeeded >= 4) {
      const charsFittingCurrentLine = maxContentLength - currentLineLength - spaceNeeded - 1; // -1 for hyphen
      const firstPart = word.slice(0, charsFittingCurrentLine);
      const secondPart = word.slice(charsFittingCurrentLine);

      currentLine += (spaceNeeded ? " " : "") + firstPart + "-";
      lines.push(formatLine(currentLine));

      if (secondPart.length <= maxContentLength) {
        currentLine = secondPart;
      } else {
        currentLine = "";

        const chunkSize = maxContentLength - 1; // -1 for hyphen
        for (let i = 0; i < secondPart.length; i += chunkSize) {
          const chunk = secondPart.slice(i, i + chunkSize);
          if (i + chunkSize >= secondPart.length) {
            currentLine = chunk;
          } else {
            lines.push(formatLine(chunk + "-"));
          }
        }
      }
    } else {
      if (currentLine) lines.push(formatLine(currentLine));

      if (wordLength > maxContentLength) {
        currentLine = "";
        const chunkSize = maxContentLength - 1; // -1 for hyphen
        for (let i = 0; i < wordLength; i += chunkSize) {
          const chunk = word.slice(i, i + chunkSize);
          if (i + chunkSize >= wordLength) {
            currentLine = chunk;
          } else {
            lines.push(formatLine(chunk + "-"));
          }
        }
      } else {
        currentLine = word;
      }
    }
  }

  if (currentLine) lines.push(formatLine(currentLine));
  return lines;
}
