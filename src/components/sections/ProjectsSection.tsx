import { useEffect, useState } from "react";
import { Github, ExternalLink, Play } from "lucide-react";
import DemoModal from "@/components/DemoModal";

interface ProjectsSectionProps {
  demoOpen?: boolean;
}

const ProjectsSection = ({ demoOpen = false }: ProjectsSectionProps) => {
  const [demoModalOpen, setDemoModalOpen] = useState(demoOpen);

  useEffect(() => {
    if (demoOpen) setDemoModalOpen(true);
  }, [demoOpen]);

  const projects = [
    {
      title: "Co-op Tracker",
      tech: ["React", "Ruby on Rails", "JavaScript", "MV3 Extension"],
      year: "2026",
      points: [
        "Co-op application tracker used by 100+ University of Waterloo students applying for co-op, combining WaterlooWorks and external applications in one dashboard with search, status tabs, deadline alerts and notes.",
        "Manifest V3 browser extension that reverse-engineers WaterlooWorks' paginated JSON API with the student's own session, syncing 220+ applications in one click via Job-ID upserts that keep notes.",
        "Privacy-first architecture: a static GitHub Pages site with browser storage (no server or accounts), plus a Rails 8 REST API (SQLite) mode.",
      ],
      live: "#",
      github: "#",
      demo: true,
    },
    {
      title: "LEARN Deadline Tracker",
      tech: ["JavaScript", "Chrome Extension (MV3)"],
      year: "2026",
      points: [
        "Chrome extension that collects assignment, quiz and exam deadlines from LEARN (D2L Brightspace), course outlines, Odyssey and CS course pages, with alarm-based reminders before each due date.",
        "Background crawler that discovers every course sub-page, de-duplicates by page ID to prevent loops, and syncs in a minimized window to stay unobtrusive.",
      ],
      live: null,
      github: "#",
      demo: false,
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
              className="border border-dashed border-border bg-card p-6 hover:border-primary/60 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="space-y-3">
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <h3 className="font-pixel text-lg">{project.title}</h3>
                    <span className="text-xs tracking-widest uppercase text-muted-foreground">
                      {project.year}
                    </span>
                  </div>

                  <ul className="space-y-2 max-w-2xl">
                    {project.points.map((point, i) => (
                      <li
                        key={i}
                        className="font-body text-sm text-muted-foreground leading-relaxed flex gap-2"
                      >
                        <span className="text-primary shrink-0">▸</span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs font-body border border-dashed border-border text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 md:pt-1 shrink-0">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live site"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  {project.demo && (
                    <button
                      onClick={() => setDemoModalOpen(true)}
                      aria-label="Watch demo"
                      className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                    >
                      <Play className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <DemoModal open={demoModalOpen} onOpenChange={setDemoModalOpen} />
    </section>
  );
};

export default ProjectsSection;
