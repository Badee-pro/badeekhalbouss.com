import { Button } from "@/components/ui/button";

const Hero = () => {
  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <p className="font-retro text-xl text-muted-foreground">
            Hello, I'm
          </p>
          <h1 className="font-pixel text-xl md:text-2xl lg:text-3xl leading-relaxed">
            Badee Khalbouss
          </h1>
          <p className="font-retro text-2xl text-primary">
            CS @ University of Waterloo
          </p>
          <p className="font-retro text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto">
            Full-stack developer passionate about building innovative solutions
            at the intersection of AI and web technologies.
          </p>

          <div className="flex justify-center gap-4 pt-4">
            <Button variant="retro" size="lg" onClick={() => handleScrollTo("#projects")}>
              Projects
            </Button>
            <Button variant="retro-outline" size="lg" onClick={() => handleScrollTo("#contact")}>
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;