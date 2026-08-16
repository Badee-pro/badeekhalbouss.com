import uwLogo from "@/assets/uw-logo.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-0 right-0 border-t border-dashed border-border/40" />
        <div className="absolute top-3/4 left-0 right-0 border-t border-dashed border-border/40" />
        <div className="absolute top-0 bottom-0 left-1/4 border-l border-dashed border-border/40" />
        <div className="absolute top-0 bottom-0 right-1/4 border-l border-dashed border-border/40" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight uppercase">
            Badee Khalbouss
          </h1>

          <div className="flex items-center justify-center gap-2">
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
              Computer Science @{" "}
              <a
                href="https://cs.uwaterloo.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-primary transition-colors"
              >
                University of Waterloo
              </a>
            </p>
            <img
              src={uwLogo}
              alt="University of Waterloo logo"
              className="w-5 h-5 object-contain opacity-70"
            />
          </div>

          <p className="text-base text-muted-foreground leading-relaxed max-w-md mx-auto">
            Software developer driven by a passion for AI and creating the future through innovative technology.
          </p>

          <p className="text-xs tracking-widest uppercase text-muted-foreground">
            Waterloo · Riyadh · Manamah
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
