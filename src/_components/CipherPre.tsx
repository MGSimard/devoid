import { generateRandomString } from "@/_utils/helpers";
import { useState, useEffect, useRef } from "react";

export function CipherPre() {
  const [containerSize, setContainerSize] = useState<[number, number]>([0, 0]);
  const [charSize, setCharSize] = useState<[number, number]>([0, 0]);
  const [chars, setChars] = useState<string>("");
  const containerRef = useRef<HTMLPreElement>(null);
  const refCharRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const refChar = refCharRef.current;
    if (!container || !refChar) return;

    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === container) {
          const { width, height } = entry.contentRect;
          setContainerSize([width, height]);
        } else if (entry.target === refChar) {
          const { width, height } = entry.contentRect;
          setCharSize([width, height]);
        }
      });
    });

    resizeObserver.observe(container);
    resizeObserver.observe(refChar);

    return () => resizeObserver.disconnect();
  }, [containerRef, refCharRef]);

  useEffect(() => {
    const [containerWidth, containerHeight] = containerSize;
    const [charWidth, charHeight] = charSize;
    const horizontalCharCount = Math.floor(containerWidth / charWidth);
    const verticalCharCount = Math.floor(containerHeight / charHeight);
    const totalCharCount = Math.floor(horizontalCharCount * verticalCharCount - 1); // -1 for pre-rendered character
    setChars(generateRandomString(totalCharCount));
  }, [containerSize, charSize]);

  return (
    <>
      <pre ref={containerRef} id="cipher">
        <span ref={refCharRef} id="cipher-ref-char">
          @
        </span>
        {chars}
      </pre>
    </>
  );
}
