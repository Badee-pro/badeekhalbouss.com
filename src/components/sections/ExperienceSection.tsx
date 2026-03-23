const ExperienceSection = () => {
  const experience = [
    {
      title: "Software Developer Intern",
      company: "Tech Company",
      period: "May 2024 – Aug 2024",
      highlights: [
        "Developed and maintained web applications using React and TypeScript",
        "Collaborated with cross-functional teams to deliver features on time",
        "Improved application performance by 30% through code optimization",
      ],
    },
    {
      title: "Research Assistant",
      company: "University of Waterloo",
      period: "Sep 2023 – Dec 2023",
      highlights: [
        "Conducted research on machine learning algorithms",
        "Published findings in academic conferences",
        "Mentored junior students on research methodologies",
      ],
    },
  ];

  const skills = ["TypeScript", "Python", "Java", "C++", "React", "Node.js", "Next.js", "TailwindCSS", "Git", "Docker", "AWS", "PostgreSQL"];

  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="font-pixel text-2xl md:text-3xl mb-10">Experience</h2>

        <div className="space-y-6 mb-12">
          {experience.map((job, i) => (
            <div key={i} className="border-l-2 border-primary pl-5">
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1 mb-2">
                <div>
                  <h3 className="font-body font-semibold">{job.title}</h3>
                  <p className="font-retro text-lg text-primary">{job.company}</p>
                </div>
                <p className="font-retro text-lg text-muted-foreground">{job.period}</p>
              </div>
              <ul className="space-y-1">
                {job.highlights.map((h, j) => (
                  <li key={j} className="font-body text-sm text-muted-foreground">
                    — {h}
                  </li>
                ))}
              </ul>
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