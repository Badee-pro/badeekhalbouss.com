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
          className={`text-3xl transition-transform duration-300 ${
            animate ? "scale-125 -rotate-12" : "scale-100 rotate-0"
          } group-hover:scale-110`}
        >
          🪿
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
