import { useState, useEffect } from "react";

const GooseCounter = () => {
  const [count, setCount] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("goose-counter");
    if (saved) setCount(parseInt(saved, 10));
  }, []);

  const handleClick = () => {
    const newCount = count + 1;
    setCount(newCount);
    localStorage.setItem("goose-counter", String(newCount));
    setAnimate(true);
    setTimeout(() => setAnimate(false), 400);
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-1 group"
      title="Honk! Click the goose"
    >
      <span
        className={`text-4xl transition-transform duration-300 ${
          animate ? "scale-125 -rotate-12" : "scale-100 rotate-0"
        } group-hover:scale-110`}
      >
        🪿
      </span>
      <span
        className={`font-retro text-xs px-2 py-0.5 rounded-full bg-card border border-border text-muted-foreground transition-transform duration-300 ${
          animate ? "scale-110" : "scale-100"
        }`}
      >
        {count} honks
      </span>
    </button>
  );
};

export default GooseCounter;
