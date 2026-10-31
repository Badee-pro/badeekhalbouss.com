import { useEffect, useState } from "react";
import { Github, ExternalLink, Play } from "lucide-react";
import DemoModal, { DemoVideo } from "@/components/DemoModal";

interface ProjectsSectionProps {
  demoOpen?: boolean;
}

const DEMO_VIDEOS: Record<string, DemoVideo> = {
  "Co-op Tracker": {
    title: "Co-op Tracker — Demo",
    poster: "/coop-tracker-demo-poster.png",
    sources: [
      { src: "/media/coop-tracker-demo.mp4", type: "video/mp4" },
      { src: "/coop-tracker-demo.webm", type: "video/webm" },
    ],
  },
  "RECITAL": {
    title: "RECITAL — Demo",
    poster: "/recital-demo-poster.jpg",
    sources: [
      { src: "/media/recital-demo.mp4", type: "video/mp4" },
      { src: "/recital-demo.webm", type: "video/webm" },
    ],
  },
};

const ProjectsSection = ({ demoOpen = false }: ProjectsSectionProps) => {
  const [activeDemo, setActiveDemo] = useState<string | null>(
    demoOpen ? "Co-op Tracker" : null
  );

  useEffect(() => {
    if (demoOpen) setActiveDemo("Co-op Tracker");
  }, [demoOpen]);

  const projects = [
    {
      title: "RECITAL",
      tech: ["Python", "FastAPI", "React", "TypeScript", "Ollama", "MLflow"],
      year: "2026",
      points: [
        "RAG agent for legal contract Q&A and risk review, with a FastAPI backend running background review jobs, a React 19 + TypeScript frontend, and a local Qwen 2.5 7B model via Ollama, so contract data never leaves the machine.",
        "Clause-aware chunking with contextual headers; benchmarked BM25, embedding (bge-small via fastembed) and hybrid RRF retrieval, shipping embeddings at 0.95 recall@5 and 0.80 MRR.",
        "Grounding layer that validates every citation tag, checks sentence-level citation coverage and gates off-topic questions by similarity, reaching 91% citation accuracy and 100% correct refusals.",
        "Added a verification pass to the risk reviewer that raised precision from 0.57 to 0.80 at full recall, with every eval run tracked in MLflow.",
      ],
      live: null,
      github: "https://github.com/Badee-pro/recital",
      demo: true,
    },
    {
      title: "Co-op Tracker",
      tech: ["React", "Ruby on Rails", "JavaScript", "MV3 Extension"],
      year: "2026",
      points: [
        "Co-op application tracker used by 100+ University of Waterloo students applying for co-op, combining WaterlooWorks and external applications in one dashboard with search, status tabs, deadline alerts and notes.",
        "Manifest V3 browser extension that reverse-engineers WaterlooWorks' paginated JSON API with the student's own session, syncing 220+ applications in one click via Job-ID upserts that keep notes.",
        "Privacy-first architecture: a static GitHub Pages site with browser storage (no server or accounts), plus a Rails 8 REST API (SQLite) mode.",
      ],
      live: "https://badee-pro.github.io/coop-tracker/",
      github: "https://github.com/Badee-pro/coop-tracker",
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
      github: "https://github.com/Badee-pro/chrome-extension",
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
                      onClick={() => setActiveDemo(project.title)}
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

      {activeDemo && (
        <DemoModal
          open={true}
          onOpenChange={(open) => {
            if (!open) setActiveDemo(null);
          }}
          video={DEMO_VIDEOS[activeDemo]}
        />
      )}
    </section>
  );
};

export default ProjectsSection;
