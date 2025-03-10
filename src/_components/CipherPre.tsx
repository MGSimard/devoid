import { useState, useEffect } from "react";

export function CipherPre() {
  const [chars, setChars] = useState<string>(""); // initialState

  // We could bruteforce by just overgenerating characters to fill the <pre> no matter its size
  // But I'd rather do the math to do it right, gonna need to figure out relation with monospace
  // Rect width/height, line count etc, would also be different with different fonts, so try
  // doing something which would work no matter the monospace font

  return <pre>pre</pre>;
}
