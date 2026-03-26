import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import vivatechBooth from "@/assets/vivatech-booth.jpg";
import gtcNvidia from "@/assets/gtc-nvidia.jpg";
import frcChampionship from "@/assets/frc-championship.jpg";

const GallerySection = () => {
  const images = [
    {
      src: vivatechBooth,
      alt: "VivaTech 2025 - Paris",
      description: "Our startup booth at VivaTech 2025, Paris",
    },
    {
      src: gtcNvidia,
      alt: "GTC NVIDIA 2025 - Paris",
      description: "GTC NVIDIA 2025 conference in Paris",
    },
    {
      src: frcChampionship,
      alt: "First Robotics Championship",
      description: "Winning the First Robotics Championship 2025",
    },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.75;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section id="archive" className="py-20 bg-secondary/30" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-pixel text-2xl md:text-3xl">Archive</h2>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 border-2 border-border hover:bg-secondary transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 border-2 border-border hover:bg-secondary transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.7s ease-out",
          }}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[280px] md:w-[320px] snap-start border-2 border-border overflow-hidden"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <p className="font-retro text-sm text-muted-foreground p-3">
                {img.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
