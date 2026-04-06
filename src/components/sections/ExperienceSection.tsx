import { useEffect, useRef, useState } from "react";

const ExperienceSection = () => {
  const experience = [
    {
      title: "Full Stack Software Developer",
      company: "penny.co",
      url: "https://penny.co",
      period: "2025 – Present",
    },
    {
      title: "Mobile App Developer COOP",
      company: "Apple Inc.",
      url: "https://apple.com",
      period: "2024",
    },
    {
      title: "Programming Team Member",
      company: "First Robotics",
      url: "https://firstroboticscanada.org",
      period: "2023 – 2025",
    },
  ];

  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          experience.forEach((_, i) => {
            setTimeout(() => {
              setVisibleItems((prev) => [...prev, i]);
            }, i * 200);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-24 border-t border-dashed border-border" ref={sectionRef}>
      <div className="container mx-auto px-6 max-w-4xl">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">Work</p>
        <h2 className="text-2xl md:text-3xl font-bold mb-12 uppercase tracking-wide">Experience</h2>

        <div className="space-y-0">
          {experience.map((job, i) => (
            <div
              key={i}
              className="border-b border-dashed border-border py-6 transition-all duration-500"
              style={{
                opacity: visibleItems.includes(i) ? 1 : 0,
                transform: visibleItems.includes(i) ? "translateY(0)" : "translateY(20px)",
              }}
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2">
                <div>
                  <p className="text-sm font-bold uppercase tracking-wide">{job.title}</p>
                  {job.company && (
                    <a
                      href={job.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline transition-colors"
                    >
                      {job.company}
                    </a>
                  )}
                </div>
                <p className="text-xs tracking-widest uppercase text-muted-foreground shrink-0">{job.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
