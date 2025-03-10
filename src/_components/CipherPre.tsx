import { generateRandomString } from "@/_utils/helpers";
import { useState, useEffect, useRef } from "react";

export function CipherPre() {
  const [containerSize, setContainerSize] = useState<[number, number]>([0, 0]);
  const [charSize, setCharSize] = useState<[number, number]>([0, 0]);

  const [chars, setChars] = useState<string>("");

  const containerRef = useRef<HTMLPreElement>(null);
  const refCharRef = useRef<HTMLSpanElement>(null);

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
      }
    });

    const referenceObserver = new ResizeObserver((entries) => {
      if (entries[0]) {
        const width = entries[0].contentRect.width;
        const height = entries[0].contentRect.height;

        setCharSize([width, height]);
      }
    });

    containerObserver.observe(container);
    referenceObserver.observe(refChar);

    return () => {
      containerObserver.disconnect();
      referenceObserver.disconnect();
    };
  }, [containerRef, refCharRef]);

  useEffect(() => {
    const [containerWidth, containerHeight] = containerSize;
    const [charWidth, charHeight] = charSize;

    const horizontalCharCount = Math.floor(containerWidth / charWidth);
    const verticalCharCount = Math.floor(containerHeight / charHeight);
    const totalCharCount = Math.floor(horizontalCharCount * verticalCharCount - 1); // -1 for pre-rendered character

    console.log("Total Characters that can fit:", totalCharCount);
    setChars(generateRandomString(totalCharCount));
  }, [containerSize, charSize]);

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
