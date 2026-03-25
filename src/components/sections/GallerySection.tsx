import { useEffect, useRef, useState } from "react";
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

  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          images.forEach((_, i) => {
            setTimeout(() => {
              setVisibleItems((prev) => [...prev, i]);
            }, i * 200);
          });
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

  return (
    <section id="gallery" className="py-20 bg-secondary/30" ref={sectionRef}>
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="font-pixel text-2xl md:text-3xl mb-10">Gallery</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <div
              key={i}
              className="overflow-hidden border-2 border-border group transition-all duration-500"
              style={{
                opacity: visibleItems.includes(i) ? 1 : 0,
                transform: visibleItems.includes(i) ? "translateY(0)" : "translateY(20px)",
              }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
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
