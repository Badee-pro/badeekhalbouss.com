import uwLogo from "@/assets/uw-logo.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative">
      {/* Dashed grid lines for blueprint feel */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-0 right-0 border-t border-dashed border-border/40" />
        <div className="absolute top-3/4 left-0 right-0 border-t border-dashed border-border/40" />
        <div className="absolute top-0 bottom-0 left-1/4 border-l border-dashed border-border/40" />
        <div className="absolute top-0 bottom-0 right-1/4 border-l border-dashed border-border/40" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
            Computer Science @ University of Waterloo
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight uppercase">
            Badee
            <br />
            Khalbouss
          </h1>

          <p className="text-base text-muted-foreground leading-relaxed max-w-md mx-auto">
            Software developer driven by a passion for AI and creating the future through innovative technology.
          </p>

          <div className="flex items-center justify-center gap-6 pt-4">
            <div className="flex items-center gap-2">
              <img
                src={uwLogo}
                alt="University of Waterloo logo"
                className="w-6 h-6 object-contain opacity-70"
              />
              <span className="text-xs tracking-widest uppercase text-muted-foreground">
                Hamilton · Waterloo · Riyadh
              </span>
            </div>
          </div>

          <div className="flex justify-center gap-4 pt-4">
            <a
              href="#experience"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-3 border border-primary text-primary text-xs tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              View Work
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-3 border border-border text-muted-foreground text-xs tracking-widest uppercase hover:border-foreground hover:text-foreground transition-all duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
