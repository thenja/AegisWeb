"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

type InViewRevealProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
};

export function InViewReveal({ children, className = "", delayMs = 0 }: InViewRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      setVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-visible={visible}
      className={`reveal-on-scroll ${className}`}
      style={{ "--reveal-delay": `${delayMs}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
