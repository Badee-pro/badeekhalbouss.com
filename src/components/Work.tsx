import { ArrowUpRight } from "lucide-react";

const Work = () => {
  const projects = [
    {
      title: "Horizon Finance",
      category: "Brand Identity & Web",
      description:
        "Complete brand overhaul for a fintech startup, including visual identity and web platform design.",
      year: "2024",
    },
    {
      title: "Lumina Studio",
      category: "UI/UX Design",
      description:
        "Mobile app design for a photography platform with AI-powered editing features.",
      year: "2024",
    },
    {
      title: "Verde Living",
      category: "E-commerce",
      description:
        "Sustainable furniture brand's online store with immersive product experiences.",
      year: "2023",
    },
    {
      title: "Pulse Health",
      category: "Product Design",
      description:
        "Health monitoring dashboard for wearable device ecosystem.",
      year: "2023",
    },
  ];

  return (
    <section id="work" className="py-32 bg-card">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-4 block">
              Selected Work
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium">
              Featured <span className="italic">projects</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            A curated selection of projects that showcase my approach to design
            and development.
          </p>
        </div>

        {/* Projects grid */}
        <div className="space-y-6">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group cursor-pointer"
            >
              <div className="relative border-t border-border py-8 md:py-10 transition-all duration-500 hover:border-foreground">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  {/* Project number and title */}
                  <div className="flex items-baseline gap-6">
                    <span className="text-sm text-muted-foreground font-medium">
                      0{index + 1}
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-medium group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  {/* Category and year */}
                  <div className="flex items-center gap-8 md:gap-12">
                    <span className="text-sm text-muted-foreground">
                      {project.category}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {project.year}
                    </span>
                    <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-foreground group-hover:text-background group-hover:border-foreground transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>

                {/* Description on hover */}
                <p className="text-muted-foreground mt-4 max-w-xl opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
