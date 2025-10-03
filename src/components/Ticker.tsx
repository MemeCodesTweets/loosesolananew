// components/Ticker.tsx
"use client";

import React from "react";
import clsx from "clsx";

type TickerProps = {
  /** The word to repeat, e.g. "$LOOSE" */
  label?: string;
  /** The symbol between labels */
  separator?: string;
  /** Background color classes for the bar */
  bgClassName?: string;
  /** Text color classes */
  textClassName?: string;
  /** Height (Tailwind classes) */
  heightClassName?: string;
  /** Animation duration in seconds (lower = faster) */
  speedSec?: number;
  /** Reverse scroll direction */
  reverse?: boolean;
  /** Extra className */
  className?: string;
};

export default function Ticker({
  label = "$LOOSE",
  separator = "★",
  bgClassName = "bg-rose-600",
  textClassName = "text-black/80",
  heightClassName = "h-12 sm:h-14",
  speedSec = 22,
  reverse = false,
  className,
}: TickerProps) {
  // Build one segment of content that is wide enough to loop seamlessly
  const chunk = Array.from({ length: 12 }).map((_, i) => (
    <span
      key={i}
      className="mx-6 inline-flex items-center gap-4 whitespace-nowrap italic tracking-wide"
    >
      <span>{label}</span>
      <span aria-hidden>{separator}</span>
    </span>
  ));

  return (
    <div
      className={clsx(
        "relative w-full overflow-hidden",
        bgClassName,
        heightClassName,
        className
      )}
    >
      {/* edge fade (optional, looks nice on dark bg) */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-black/30 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-black/30 to-transparent" />

      {/* the scroller */}
      <div
        className={clsx(
          "absolute inset-0 flex items-center",
          "will-change-transform"
        )}
        style={
          {
            // @ts-ignore – used by styled-jsx below
            "--speed": `${speedSec}s`,
            "--dir": reverse ? -1 : 1,
          } as React.CSSProperties
        }
      >
        {/* Duplicate the line twice for a seamless loop */}
        <div className="animate-ticker inline-block whitespace-nowrap">
          <span className={clsx("px-6 text-sm sm:text-base md:text-lg", textClassName)}>
            {chunk}
          </span>
        </div>
        <div
          className={clsx(
            "animate-ticker inline-block whitespace-nowrap",
            reverse && "animate-ticker-reverse"
          )}
          aria-hidden
        >
          <span className={clsx("px-6 text-sm sm:text-base md:text-lg", textClassName)}>
            {chunk}
          </span>
        </div>
      </div>

      {/* local CSS so the component is truly drop-in */}
      <style jsx>{`
        .animate-ticker {
          animation: ticker var(--speed) linear infinite;
          animation-direction: var(--dir) == -1 ? reverse : normal;
        }
        /* styled-jsx doesn't support conditional directions directly, so we also
           provide a reverse class if you want to swap it at runtime. */
        .animate-ticker-reverse {
          animation-direction: reverse;
        }
        @keyframes ticker {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        /* Respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .animate-ticker,
          .animate-ticker-reverse {
            animation: none;
            transform: translateX(0) !important;
          }
        }
      `}</style>
    </div>
  );
}
