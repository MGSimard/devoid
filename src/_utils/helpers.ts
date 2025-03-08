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

    if (currentLineLength + wordLength + (currentLineLength ? 1 : 0) <= maxContentLength) {
      currentLine += (currentLineLength ? " " : "") + word;
    } else {
      if (currentLine) lines.push(formatLine(currentLine));
      currentLine = "";

      if (wordLength > maxContentLength) {
        const chunkSize = maxContentLength - 1;
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
