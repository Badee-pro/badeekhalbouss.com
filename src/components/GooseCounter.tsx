import { useState, useEffect } from "react";

const GooseCounter = () => {
  const [count, setCount] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [showPlus, setShowPlus] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("goose-counter");
    if (saved) setCount(parseInt(saved, 10));
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
            {/* head */}
            <g>
              <circle cx="48" cy="15" r="9" fill="currentColor" className="text-foreground" />
              {/* beak */}
              <path d="M56 13 L64 16 L56 19 Z" fill="currentColor" className="text-primary" />
              {/* eyes */}
              <circle cx="45" cy="13" r="3.6" fill="hsl(var(--background))" />
              <circle cx="52" cy="13" r="3.6" fill="hsl(var(--background))" />
              <circle cx="45" cy="13" r="1.8" fill="currentColor" className="text-foreground" />
              <circle cx="52" cy="13" r="1.8" fill="currentColor" className="text-foreground" />
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
