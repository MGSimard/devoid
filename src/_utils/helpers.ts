export function wrapText33(msg: string, lineLength: number): string[] {
  // Claude is my homie

  // Constants for hyphenation rules
  const MIN_CHARS_BEFORE_HYPHEN = 3;
  const MIN_CHARS_AFTER_HYPHEN = 3;

  const words = msg.trim().split(/\s+/);
  const maxContentLength = lineLength - 4; // Minus both | and both space pads
  const lines: string[] = [];
  let currentLine = "";

  // Add formatted line to output array
  const addLine = (text: string): void => {
    lines.push(`| ${text.padEnd(maxContentLength, " ")} |`);
  };

  // Add a word to a line with appropriate spacing
  const addWordToLine = (line: string, word: string): string => {
    return line + (line ? " " : "") + word;
  };

  // Process words that exceed maximum line length
  const breakLongWord = (word: string): string => {
    const chunkSize = maxContentLength - 1; // Space for hyphen
    let remaining = word;

    while (remaining.length > maxContentLength) {
      const chunk = remaining.slice(0, chunkSize);
      addLine(chunk + "-");
      remaining = remaining.slice(chunkSize);
    }

    return remaining;
  };

  for (const word of words) {
    const spaceNeeded = currentLine ? 1 : 0;
    const availableSpace = maxContentLength - currentLine.length - spaceNeeded;

    // Case 1: Word fits on current line
    if (word.length <= availableSpace) {
      currentLine = addWordToLine(currentLine, word);
      continue;
    }

    // Case 2: Smart hyphenation if it meets minimum character requirements
    const canHyphenate =
      availableSpace >= MIN_CHARS_BEFORE_HYPHEN + 1 && // +1 for hyphen
      word.length - availableSpace + 1 >= MIN_CHARS_AFTER_HYPHEN;

    if (canHyphenate) {
      const hyphenPos = availableSpace - 1;
      currentLine = addWordToLine(currentLine, word.slice(0, hyphenPos) + "-");
      addLine(currentLine);

      // Handle remainder
      const remainder = word.slice(hyphenPos);
      currentLine = remainder.length <= maxContentLength ? remainder : breakLongWord(remainder);
      continue;
    }

    // Case 3: Start a new line
    if (currentLine) {
      addLine(currentLine);
      currentLine = "";
    }

    // Handle word too long for a single line
    currentLine = word.length > maxContentLength ? breakLongWord(word) : word;
  }

  // Add final line if not empty
  if (currentLine) addLine(currentLine);

  return lines;
}

export function generateRandomString(length: number): string {
  const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  const randomValues = new Uint8Array(length);
  window.crypto.getRandomValues(randomValues);

  return String.fromCharCode(...randomValues.map((value) => charset.charCodeAt(value % charset.length)));
}
