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
      period: "Jun 2024 – Aug 2024",
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

  const skills = ["TypeScript", "Python", "Java", "C++", "React", "Node.js", "Next.js", "Swift", "TailwindCSS", "Git", "Docker", "AWS", "PostgreSQL"];

  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="font-pixel text-2xl md:text-3xl mb-10">Experience</h2>

        <div className="space-y-4 mb-12">
          {experience.map((job, i) => (
            <div key={i} className="border-l-2 border-primary pl-5 py-2">
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

        <h3 className="font-retro text-2xl text-primary mb-4">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span key={skill} className="px-3 py-1 border border-border font-retro text-base text-muted-foreground">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
