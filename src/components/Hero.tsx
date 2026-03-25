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
          <a
            href="https://cs.uwaterloo.ca/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-retro text-2xl text-primary hover:underline transition-colors"
          >
            CS @ University of Waterloo
          </a>
          <p className="font-retro text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto">
            Software developer driven by a passion for AI and creating the future through innovative technology.
          </p>
          <p className="font-retro text-lg text-muted-foreground">
            Hamilton | Waterloo | Riyadh
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