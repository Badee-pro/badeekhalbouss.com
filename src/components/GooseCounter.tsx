import { useState, useEffect, useRef } from "react";

const MAX_PUPIL_OFFSET = 2.5;
const MAX_HEAD_ANGLE = 25;
const EASE = 0.12;

const GooseCounter = () => {
  const [count, setCount] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [showPlus, setShowPlus] = useState(false);
  const gooseRef = useRef<HTMLSpanElement>(null);
  const pupilsRef = useRef<SVGGElement>(null);
  const headRef = useRef<SVGGElement>(null);
  const targetRef = useRef({ angle: 0, px: 0, py: 0 });
  const currentRef = useRef({ angle: 0, px: 0, py: 0 });

  useEffect(() => {
    const saved = localStorage.getItem("goose-counter");
    if (saved) setCount(parseInt(saved, 10));
  }, []);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const goose = gooseRef.current;
      if (!goose) return;
      const rect = goose.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy) || 1;
      const scale = Math.min(dist / 80, 1) * MAX_PUPIL_OFFSET;
      const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
      targetRef.current = {
        // goose faces left, so mirror the rotation around the vertical axis
        angle: Math.max(-MAX_HEAD_ANGLE, Math.min(MAX_HEAD_ANGLE, -angle * 0.35)),
        // svg is horizontally flipped, so mirror the pupil x offset
        px: -(dx / dist) * scale,
        py: (dy / dist) * scale,
      };
    };

    let raf: number;
    const tick = () => {
      const t = targetRef.current;
      const c = currentRef.current;
      c.angle += (t.angle - c.angle) * EASE;
      c.px += (t.px - c.px) * EASE;
      c.py += (t.py - c.py) * EASE;
      headRef.current?.setAttribute("transform", `rotate(${c.angle} 48 30)`);
      if (pupilsRef.current) {
        pupilsRef.current.style.transform = `translate(${c.px}px, ${c.py}px)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  const handleClick = () => {
    const newCount = count + 1;
    setCount(newCount);
    localStorage.setItem("goose-counter", String(newCount));
    setAnimate(true);
    setShowPlus(true);
    setTimeout(() => setAnimate(false), 400);
    setTimeout(() => setShowPlus(false), 700);
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-1 group"
      title="Honk! Click the goose"
    >
      <div className="relative">
        {showPlus && (
          <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-primary animate-float-up pointer-events-none">
            +1
          </span>
        )}
        <span
          ref={gooseRef}
          className={`block transition-transform duration-300 ${
            animate ? "scale-125 -rotate-12" : "scale-100 rotate-0"
          } group-hover:scale-110`}
        >
          <svg width="36" height="36" viewBox="0 0 64 64" aria-label="goose" className="-scale-x-100">
            {/* body */}
            <ellipse cx="28" cy="46" rx="20" ry="12" fill="currentColor" className="text-foreground" />
            {/* tail */}
            <path d="M10 40 L2 34 L8 46 Z" fill="currentColor" className="text-foreground" />
            {/* neck */}
            <path
              d="M40 44 C44 34 42 26 44 18 L52 18 C50 28 52 36 50 44 Z"
              fill="currentColor"
              className="text-foreground"
            />
            {/* head (turns toward the pointer) */}
            <g ref={headRef}>
              <circle cx="48" cy="15" r="9" fill="currentColor" className="text-foreground" />
              {/* beak */}
              <path d="M56 13 L64 16 L56 19 Z" fill="currentColor" className="text-primary" />
              {/* eyes */}
              <circle cx="45" cy="13" r="3.6" fill="hsl(var(--background))" />
              <circle cx="52" cy="13" r="3.6" fill="hsl(var(--background))" />
              <g ref={pupilsRef}>
                <circle cx="45" cy="13" r="1.8" fill="currentColor" className="text-foreground" />
                <circle cx="52" cy="13" r="1.8" fill="currentColor" className="text-foreground" />
              </g>
            </g>
          </svg>
        </span>
      </div>
      <span
        className={`text-[10px] tracking-widest uppercase px-2 py-0.5 bg-card border border-border text-muted-foreground transition-transform duration-300 ${
          animate ? "scale-110" : "scale-100"
        }`}
      >
        {count} honks
      </span>
    </button>
  );
};

export default GooseCounter;
