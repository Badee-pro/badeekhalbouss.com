import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import vivatechBooth from "@/assets/vivatech-booth.jpg";
import gtcNvidia from "@/assets/gtc-nvidia.jpg";
import frcChampionship from "@/assets/frc-championship.jpg";
import scpcSignage from "@/assets/scpc.jpg.asset.json";
import scpcHall from "@/assets/image-3.jpg.asset.json";
import pennyOffice from "@/assets/image-4.jpg.asset.json";
import scpcBadge from "@/assets/image-5.jpg.asset.json";

const GallerySection = () => {
  const images = [
    { src: vivatechBooth, alt: "VivaTech 2025 - Paris", description: "VivaTech 2025, Paris" },
    { src: gtcNvidia, alt: "GTC NVIDIA 2025 - Paris", description: "GTC NVIDIA 2025, Paris" },
    { src: frcChampionship, alt: "First Robotics Championship", description: "FRC Championship 2025" },
    { src: scpcSignage.url, alt: "SCPC 2026 signage in Dammam, Saudi Arabia", description: "SCPC 2026, Dammam SA" },
    { src: scpcHall.url, alt: "SCPC 2026 main hall keynote in Dammam, Saudi Arabia", description: "SCPC 2026, Dammam SA" },
    { src: pennyOffice.url, alt: "Penny.co office in Bahrain", description: "Penny.co Office, Bahrain" },
    { src: scpcBadge.url, alt: "SCPC 2026 attendee badge in Dammam, Saudi Arabia", description: "SCPC 2026, Dammam SA" },
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
    scrollRef.current.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section id="archive" className="py-24 border-t border-dashed border-border" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">Gallery</p>
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wide">Archive</h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 border border-border hover:border-primary hover:text-primary transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 border border-border hover:border-primary hover:text-primary transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4"
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
              className="flex-shrink-0 w-[280px] md:w-[320px] snap-start border border-border overflow-hidden group"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="text-xs tracking-widest uppercase text-muted-foreground p-4">
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
