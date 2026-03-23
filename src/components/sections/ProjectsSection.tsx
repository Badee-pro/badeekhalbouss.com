import { Github, ExternalLink } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Horizon Finance",
      description: "Complete fintech platform with real-time data visualization and secure transaction processing.",
      tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      github: "#",
      live: "#",
    },
    {
      title: "Lumina Studio",
      description: "Photography platform with AI-powered editing features and cloud sync capabilities.",
      tech: ["React Native", "Python", "TensorFlow", "AWS"],
      github: "#",
      live: "#",
    },
    {
      title: "Verde Living",
      description: "Sustainable furniture brand's online store with immersive 3D product viewer.",
      tech: ["Next.js", "Three.js", "Stripe", "MongoDB"],
      github: "#",
      live: "#",
    },
    {
      title: "Pulse Health",
      description: "Health monitoring dashboard for wearable device ecosystem with real-time analytics.",
      tech: ["Vue.js", "D3.js", "GraphQL", "Redis"],
      github: "#",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="font-pixel text-2xl md:text-3xl mb-10">Projects</h2>

        <div className="space-y-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group border-2 border-foreground bg-card p-6 hover:bg-secondary/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="space-y-2">
                  <h3 className="font-pixel text-lg">{project.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-lg">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs font-body border border-border text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 md:pt-1">
                  <a href={project.github} aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={project.live} aria-label="Live Demo" className="text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;