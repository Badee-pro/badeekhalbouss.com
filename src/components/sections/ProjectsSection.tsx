import { Github, ExternalLink } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Horizon Finance",
      category: "Web App",
      description:
        "Complete fintech platform with real-time data visualization and secure transaction processing.",
      year: "2024",
      tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      github: "#",
      live: "#",
    },
    {
      title: "Lumina Studio",
      category: "Mobile App",
      description:
        "Photography platform with AI-powered editing features and cloud sync capabilities.",
      year: "2024",
      tech: ["React Native", "Python", "TensorFlow", "AWS"],
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=400&fit=crop",
      github: "#",
      live: "#",
    },
    {
      title: "Verde Living",
      category: "E-commerce",
      description:
        "Sustainable furniture brand's online store with immersive 3D product viewer.",
      year: "2023",
      tech: ["Next.js", "Three.js", "Stripe", "MongoDB"],
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop",
      github: "#",
      live: "#",
    },
    {
      title: "Pulse Health",
      category: "Dashboard",
      description:
        "Health monitoring dashboard for wearable device ecosystem with real-time analytics.",
      year: "2023",
      tech: ["Vue.js", "D3.js", "GraphQL", "Redis"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      github: "#",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <p className="font-retro text-xl text-muted-foreground mb-2">
            <span className="text-primary">&gt;</span> cd ~/projects
          </p>
          <h2 className="font-pixel text-2xl md:text-3xl mb-4">Featured Projects</h2>
          <p className="font-retro text-xl text-muted-foreground">
            A collection of stuff I've built <span className="animate-blink">_</span>
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group border-2 border-foreground shadow-retro bg-card hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all duration-200"
            >
              {/* Project image */}
              <div className="aspect-video overflow-hidden border-b-2 border-foreground">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Project content */}
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <span className="font-retro text-lg text-primary">
                    [{project.category}]
                  </span>
                  <span className="font-retro text-lg text-muted-foreground">
                    {project.year}
                  </span>
                </div>

                <h3 className="font-pixel text-lg mb-3">{project.title}</h3>
                
                <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 border border-foreground font-retro text-base"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t-2 border-foreground/30">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
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
