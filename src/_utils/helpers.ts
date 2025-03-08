export function wrapText33(msg: string, lineLength: number): string[] {
  const words = msg.trim().split(/\s+/);
  const maxContentLength = lineLength - 4; // Minus both frames and both space paddings
  const lines: string[] = [];
  let currentLine = "";

  // Format and add line to output
  const addLine = (text: string) => {
    lines.push(`| ${text.padEnd(maxContentLength, " ")} |`);
  };

  // Process word chunks that are too long for a single line
  const processLongWord = (word: string, startIndex = 0): string => {
    const chunkSize = maxContentLength - 1; // -1 for hyphen

    for (let i = startIndex; i < word.length; i += chunkSize) {
      const isLastChunk = i + chunkSize >= word.length;

      if (isLastChunk) {
        return word.slice(i);
      }

      addLine(word.slice(i, i + chunkSize) + "-");
    }

    return ""; // Should never reach here if function is used correctly
  };

  for (const word of words) {
    const currentLineLength = currentLine.length;
    const spaceNeeded = currentLineLength ? 1 : 0;
    const availableSpace = maxContentLength - currentLineLength - spaceNeeded;

    // Case 1: Word fits in current line
    if (word.length <= availableSpace) {
      currentLine += (spaceNeeded ? " " : "") + word;
      continue;
    }

    // Case 2: Smart hyphenation when enough space exists
    if (word.length >= 8 && availableSpace >= 4) {
      currentLine += (spaceNeeded ? " " : "") + word.slice(0, availableSpace - 1) + "-";
      addLine(currentLine);

      // Process remainder of word
      const secondPart = word.slice(availableSpace - 1);
      currentLine = secondPart.length <= maxContentLength ? secondPart : processLongWord(secondPart);
      continue;
    }

    // Case 3: Start new line
    if (currentLine) addLine(currentLine);

    // Handle word longer than line length
    currentLine = word.length > maxContentLength ? processLongWord(word) : word;
  }

  // Add the last line if not empty
  if (currentLine) addLine(currentLine);

  return lines;
}
