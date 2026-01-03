import { Button } from "@/components/ui/button";

const Hero = () => {
  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Scanline overlay */}
      <div className="absolute inset-0 scanlines pointer-events-none" />
      
      {/* Grid pattern background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Terminal window */}
          <div className="border-2 border-foreground shadow-retro bg-card">
            {/* Terminal header */}
            <div className="border-b-2 border-foreground px-4 py-2 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 border-2 border-foreground" />
                <div className="w-3 h-3 border-2 border-foreground" />
                <div className="w-3 h-3 border-2 border-foreground bg-foreground" />
              </div>
              <span className="font-retro text-lg ml-4">terminal.exe</span>
            </div>

            {/* Terminal content */}
            <div className="p-6 md:p-8 space-y-6">
              {/* Profile section */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="w-24 h-24 md:w-32 md:h-32 border-2 border-foreground shadow-retro-sm overflow-hidden flex-shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                    alt="Profile"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="text-center md:text-left">
                  <p className="font-retro text-2xl text-muted-foreground mb-2">
                    &gt; Initializing profile...
                  </p>
                  <h1 className="font-pixel text-xl md:text-2xl lg:text-3xl leading-relaxed mb-4">
                    Your Name
                  </h1>
                  <div className="inline-block border-2 border-primary bg-primary/10 px-4 py-2">
                    <span className="font-retro text-xl text-primary">
                      📍 CS @ University of Waterloo
                    </span>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="border-t-2 border-foreground/30 pt-6">
                <p className="font-retro text-xl md:text-2xl text-muted-foreground leading-relaxed">
                  <span className="text-primary">&gt;</span> Full-stack developer passionate about
                  building innovative solutions. Currently exploring the intersection of
                  AI and web technologies.
                  <span className="animate-blink ml-1">_</span>
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 border-t-2 border-foreground/30 pt-6">
                <div className="text-center">
                  <p className="font-pixel text-lg md:text-xl text-primary">4+</p>
                  <p className="font-retro text-lg text-muted-foreground">Projects</p>
                </div>
                <div className="text-center border-x-2 border-foreground/30">
                  <p className="font-pixel text-lg md:text-xl text-primary">3rd</p>
                  <p className="font-retro text-lg text-muted-foreground">Year</p>
                </div>
                <div className="text-center">
                  <p className="font-pixel text-lg md:text-xl text-primary">5+</p>
                  <p className="font-retro text-lg text-muted-foreground">Languages</p>
                </div>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <Button variant="retro" size="lg" onClick={() => handleScrollTo("#projects")}>
                  View Projects
                </Button>
                <Button variant="retro-outline" size="lg" onClick={() => handleScrollTo("#resume")}>
                  View Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
