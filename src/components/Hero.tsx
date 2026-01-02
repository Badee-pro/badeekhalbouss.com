import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <p className="opacity-0 animate-fade-up text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground mb-6">
            Designer & Developer
          </p>

          {/* Main headline */}
          <h1 className="opacity-0 animate-fade-up delay-100 font-display text-5xl md:text-7xl lg:text-8xl font-medium leading-[0.95] tracking-tight mb-8">
            Creating digital
            <br />
            <span className="italic text-primary">experiences</span> that
            <br />
            matter
          </h1>

          {/* Subheadline */}
          <p className="opacity-0 animate-fade-up delay-200 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-12 font-body leading-relaxed">
            I'm Jane Doe, a creative professional crafting thoughtful solutions
            at the intersection of design and technology.
          </p>

          {/* CTA buttons */}
          <div className="opacity-0 animate-fade-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <a href="#work">View My Work</a>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in delay-600">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs tracking-widest uppercase text-muted-foreground">
              Scroll
            </span>
            <div className="w-px h-12 bg-gradient-to-b from-foreground/30 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
