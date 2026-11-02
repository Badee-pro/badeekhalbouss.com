import { useEffect } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = window.setTimeout(onComplete, reducedMotion ? 0 : 1100);
    return () => window.clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-7 bg-background" role="status" aria-label="Loading Badee Khalbouss">
      <div className="relative flex h-24 w-24 items-center justify-center border border-dashed border-border">
        <span aria-hidden="true" className="font-retro text-6xl text-primary loading-monogram">BK</span>
        <span className="absolute -bottom-2 -right-2 h-4 w-4 border-b border-r border-primary" aria-hidden="true" />
        <span className="absolute -left-2 -top-2 h-4 w-4 border-l border-t border-primary" aria-hidden="true" />
      </div>
      <div className="flex h-1 w-24 gap-1" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((step) => <span key={step} className="loading-segment flex-1 bg-primary" />)}
      </div>
      <span className="sr-only">Loading…</span>
    </div>
  );
};

export default LoadingScreen;