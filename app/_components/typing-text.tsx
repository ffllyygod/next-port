"use client";

import { useEffect, useRef, useState } from "react";

interface TypingTextProps {
  text: string;
  speed?: number;
  className?: string;
  cursor?: boolean;
}

export default function TypingText({
  text,
  speed = 45,
  className = "",
  cursor = true,
}: TypingTextProps) {
  const [value, setValue] = useState("");
  const indexRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Reset safely
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    indexRef.current = 0;
    setValue("");

    const tick = () => {
      const i = indexRef.current;

      // 🔒 HARD GUARD — impossible to append undefined
      if (i >= text.length) {
        return;
      }

      setValue((prev) => prev + text.charAt(i));
      indexRef.current += 1;

      timerRef.current = setTimeout(tick, speed);
    };

    timerRef.current = setTimeout(tick, speed);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [text, speed]);

  return (
    <span className={className}>
      {value}
      {cursor && <span className="animate-pulse ml-1">_</span>}
    </span>
  );
}
