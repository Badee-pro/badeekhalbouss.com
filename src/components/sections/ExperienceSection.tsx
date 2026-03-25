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
      title: "Mobile App Developer",
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
    {
      title: "Freelance Developer",
      company: "",
      url: "",
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-20 bg-secondary/30" ref={sectionRef}>
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="font-pixel text-2xl md:text-3xl mb-10">Experience</h2>

        <div className="space-y-4">
          {experience.map((job, i) => (
            <div
              key={i}
              className="border-l-2 border-primary pl-5 py-2 transition-all duration-500"
              style={{
                opacity: visibleItems.includes(i) ? 1 : 0,
                transform: visibleItems.includes(i) ? "translateY(0)" : "translateY(20px)",
              }}
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1">
                <p className="font-body">
                  <span className="font-semibold">{job.title}</span>
                  {job.company && (
                    <>
                      {" – "}
                      <a
                        href={job.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-retro text-lg text-primary hover:underline transition-colors"
                      >
                        {job.company}
                      </a>
                    </>
                  )}
                </p>
                <p className="font-retro text-lg text-muted-foreground shrink-0">{job.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
