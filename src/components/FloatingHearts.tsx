"use client";

import { useEffect, useState } from "react";

interface Heart {
  id: number;
  left: string;
  size: string;
  duration: string;
  delay: string;
  emoji: string;
}

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const emojis = ["💖", "💕", "💗", "🌸", "🌺", "💐", "🌷", "✨", "💝", "🩷"];
    const generated: Heart[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${14 + Math.random() * 18}px`,
      duration: `${8 + Math.random() * 12}s`,
      delay: `${Math.random() * 10}s`,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
    }));
    setHearts(generated);
  }, []);

  return (
    <>
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="floating-heart"
          style={{
            left: heart.left,
            fontSize: heart.size,
            animationDuration: heart.duration,
            animationDelay: heart.delay,
          }}
        >
          {heart.emoji}
        </span>
      ))}
    </>
  );
}
