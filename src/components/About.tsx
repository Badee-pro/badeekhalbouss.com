const About = () => {
  const skills = [
    "UI/UX Design",
    "Brand Identity",
    "Web Development",
    "React & TypeScript",
    "Motion Design",
    "Creative Direction",
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left column - Title */}
          <div>
            <span className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-4 block">
              About Me
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
              Turning ideas into
              <br />
              <span className="italic">memorable</span> realities
            </h2>
          </div>

          {/* Right column - Content */}
          <div className="space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              With over 8 years of experience in digital design and development,
              I've had the privilege of working with startups, agencies, and
              Fortune 500 companies to bring their visions to life.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My approach combines strategic thinking with meticulous craft,
              ensuring every project not only looks beautiful but also achieves
              its intended goals. I believe in the power of simplicity and the
              impact of thoughtful details.
            </p>

            {/* Skills */}
            <div className="pt-8 border-t border-border">
              <h3 className="text-sm font-medium tracking-[0.15em] uppercase text-foreground mb-6">
                Expertise
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-secondary text-secondary-foreground text-sm font-medium rounded-full hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
