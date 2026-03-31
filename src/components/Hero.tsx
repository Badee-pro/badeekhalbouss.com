import uwLogo from "@/assets/uw-logo.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h1 className="font-pixel text-xl md:text-2xl lg:text-3xl leading-relaxed">
            Badee Khalbouss
          </h1>
          <div className="flex items-center justify-center gap-3">
            <p className="font-retro text-2xl text-primary">
              Computer Science @{" "}
              <a
                href="https://cs.uwaterloo.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-primary/80 transition-colors"
              >
                University of Waterloo
              </a>
            </p>
            <img
              src={uwLogo}
              alt="University of Waterloo logo"
              className="w-8 h-8 object-contain"
            />
          </div>
          <p className="font-retro text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto">
            Software developer driven by a passion for AI and creating the future through innovative technology.
          </p>
          <p className="font-retro text-lg text-muted-foreground">
            Hamilton | Waterloo | Riyadh
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
