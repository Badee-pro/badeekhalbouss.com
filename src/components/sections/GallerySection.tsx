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

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="archive" className="py-20 bg-secondary/30" ref={sectionRef}>
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="font-pixel text-2xl md:text-3xl mb-10">Archive</h2>

        <div
          className="transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <div className="relative">
            <div className="overflow-hidden border-2 border-border">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  className="w-full h-full object-cover transition-opacity duration-300"
                />
              </div>
              <p className="font-retro text-sm text-muted-foreground p-3">
                {images[currentIndex].description}
              </p>
            </div>

            <div className="flex items-center justify-between mt-4">
              <button
                onClick={goPrev}
                className="p-2 border-2 border-border hover:bg-secondary transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-2">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      i === currentIndex ? "bg-foreground" : "bg-muted-foreground/40"
                    }`}
                    aria-label={`Go to image ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={goNext}
                className="p-2 border-2 border-border hover:bg-secondary transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
