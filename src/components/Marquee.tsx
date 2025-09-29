"use client";

import { useEffect, useState } from "react";

interface MarqueeProps {
  items: string[];
  durationMs?: number;
  className?: string;
}

export default function Marquee({ 
  items, 
  durationMs = 18000, 
  className = "" 
}: MarqueeProps) {
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Duplicate items for seamless loop
  const duplicatedItems = [...items, ...items];

  return (
    <div className={`group overflow-hidden ${className}`}>
      {/* Screen reader accessible list */}
      <div className="sr-only">
        <p>Technologies and tools I work with:</p>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Visual marquee */}
      <div className="relative marquee-container">
        <ul 
          className={`flex items-center gap-4 sm:gap-6 md:gap-8 whitespace-nowrap ${
            isReducedMotion 
              ? "animate-none" 
              : "motion-safe:marquee animate-[slide_18s_linear_infinite] group-hover:[animation-play-state:paused]"
          }`}
          style={{ 
            animationDuration: `${durationMs}ms`,
            width: "max-content"
          }}
          aria-hidden="true"
        >
          {duplicatedItems.map((item, index) => (
            <li 
              key={index}
              className="flex-shrink-0 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-zinc-400 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
