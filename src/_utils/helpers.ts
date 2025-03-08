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
      if (i + chunkSize >= word.length) {
        return word.slice(i);
      }

      addLine(word.slice(i, i + chunkSize) + "-");
    }

    return "";
  };

  // Helper to add word with space if needed
  const addWordToLine = (line: string, word: string): string => {
    return line + (line ? " " : "") + word;
  };

  // Hyphenation rules
  const MIN_CHARS_BEFORE_HYPHEN = 3;
  const MIN_CHARS_AFTER_HYPHEN = 3;

  for (const word of words) {
    const availableSpace = maxContentLength - currentLine.length - (currentLine ? 1 : 0);

    // Case 1: Word fits in current line
    if (word.length <= availableSpace) {
      currentLine = addWordToLine(currentLine, word);
      continue;
    }

    // Case 2: Smart hyphenation when enough space exists and rules allow
    if (
      word.length >= 8 &&
      availableSpace >= MIN_CHARS_BEFORE_HYPHEN + 1 && // +1 for hyphen
      word.length - (availableSpace - 1) >= MIN_CHARS_AFTER_HYPHEN
    ) {
      // Add first part with hyphen to current line
      currentLine = addWordToLine(currentLine, word.slice(0, availableSpace - 1) + "-");
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

  if (currentLine) addLine(currentLine);
  return lines;
}
