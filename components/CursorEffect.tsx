"use client";

import { useEffect, useState, useRef } from "react";

export default function CursorEffect() {
  const [mounted, setMounted] = useState(false);
  const [position, setPosition] = useState({ x: -300, y: -300 });
  const [visible, setVisible] = useState(false);

  const targetPos = useRef({ x: -300, y: -300 });
  const currentPos = useRef({ x: -300, y: -300 });
  const rafId = useRef<number | null>(null);
  const isAnimating = useRef(false);

  const visibleRef = useRef(false);

  useEffect(() => {
    // Strictly disable on touch / mobile devices and reduced motion
    const isTouch =
      typeof window !== "undefined" &&
      (window.innerWidth < 768 ||
        window.matchMedia("(pointer: coarse)").matches ||
        !window.matchMedia("(pointer: fine)").matches ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches);

    if (isTouch) {
      return;
    }

    setMounted(true);

    const updateLoop = () => {
      const dx = targetPos.current.x - currentPos.current.x;
      const dy = targetPos.current.y - currentPos.current.y;

      // Stop loop when settled to save CPU/battery
      if (Math.abs(dx) < 0.2 && Math.abs(dy) < 0.2) {
        currentPos.current = { ...targetPos.current };
        setPosition({ ...targetPos.current });
        isAnimating.current = false;
        rafId.current = null;
        return;
      }

      currentPos.current.x += dx * 0.12;
      currentPos.current.y += dy * 0.12;
      setPosition({ x: currentPos.current.x, y: currentPos.current.y });

      rafId.current = requestAnimationFrame(updateLoop);
    };

    const startLoop = () => {
      if (!isAnimating.current) {
        isAnimating.current = true;
        rafId.current = requestAnimationFrame(updateLoop);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
      if (!visibleRef.current) {
        visibleRef.current = true;
        setVisible(true);
      }
      startLoop();
    };

    const handleMouseLeave = () => {
      visibleRef.current = false;
      setVisible(false);
    };

    const handleMouseEnter = () => {
      visibleRef.current = true;
      setVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-0 overflow-hidden transition-opacity duration-500 select-none ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className="absolute rounded-full pointer-events-none w-[360px] h-[360px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-tr from-indigo-500/10 via-violet-500/8 to-transparent blur-[70px] dark:from-indigo-500/15 dark:via-violet-600/10 dark:blur-[80px]"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
          willChange: "transform",
        }}
      />
    </div>
  );
}
