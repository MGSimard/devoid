import { generateRandomString } from "@/_utils/helpers";
import { useState, useEffect, useRef } from "react";

export function CipherPre() {
  const [containerSize, setContainerSize] = useState<[number, number]>([0, 0]);
  const [charSize, setCharSize] = useState<[number, number]>([0, 0]);

  const [chars, setChars] = useState<string>("");

  const containerRef = useRef<HTMLPreElement>(null);
  const refCharRef = useRef<HTMLSpanElement>(null);

  // We could bruteforce by just overgenerating characters to fill the <pre> no matter its size
  // But I'd rather do the math to do it right, gonna need to figure out relation with monospace
  // Rect width/height, line count etc, would also be different with different fonts, so try
  // doing something which would work no matter the monospace font

  // For now let's handle initial paint, later we'll listen for container width changes (not height)

  useEffect(() => {
    // const horizontalCharCount = Math.floor(containerWidth / charWidth);
    // const verticalCharCount = Math.floor(containerHeight / charHeight);
    // const totalCharCount = Math.floor(horizontalCharCount * verticalCharCount - 1); // -1 for pre-rendered character
    // console.log("Total Characters that can fit:", totalCharCount);
    // Get reference character width & height for calculations
  }, [containerSize, charSize]);

  // RESIZE OBSERVER
  useEffect(() => {
    const container = containerRef.current;
    const refChar = refCharRef.current;
    if (!container || !refChar) return;

    // TODO: Check if I can merge this into a single observer later
    const containerObserver = new ResizeObserver((entries) => {
      if (entries[0]) {
        const width = entries[0].contentRect.width;
        const height = entries[0].contentRect.height;

        setContainerSize([width, height]);
        console.log(`WIDTH: ${width} - HEIGHT: ${height}`);
      }
    });

    const referenceObserver = new ResizeObserver((entries) => {
      if (entries[0]) {
        const width = entries[0].contentRect.width;
        const height = entries[0].contentRect.height;

        setCharSize([width, height]);
        console.log(`WIDTH: ${width} - HEIGHT: ${height}`);
      }
    });

    containerObserver.observe(container);
    referenceObserver.observe(refChar);

    return () => {
      containerObserver.disconnect();
      referenceObserver.disconnect();
    };
  }, [containerRef, refCharRef]);

  return (
    <>
      <pre ref={containerRef} id="cipher">
        <span ref={refCharRef} id="cipher-ref-char">
          @
        </span>
        {chars.split("").map((char, index) => (
          <span key={char + index}>{char}</span>
        ))}
      </pre>
    </>
  );
}
