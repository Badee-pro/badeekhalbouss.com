const GallerySection = () => {
  // Placeholder gallery items — replace src with real images
  const images = [
    { src: "/placeholder.svg", alt: "VivaTech 2025 - Paris" },
    { src: "/placeholder.svg", alt: "Project demo" },
    { src: "/placeholder.svg", alt: "Team event" },
    { src: "/placeholder.svg", alt: "Hackathon" },
  ];

  return (
    <section id="gallery" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="font-pixel text-2xl md:text-3xl mb-10">Gallery</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="aspect-[4/3] overflow-hidden border-2 border-border group"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
