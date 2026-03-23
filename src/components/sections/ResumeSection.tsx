import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const ResumeSection = () => {
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
    <section id="resume" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="flex items-center justify-between mb-10">
          <h2 className="font-pixel text-2xl md:text-3xl">Resume</h2>
          <Button variant="retro" size="sm" className="gap-2">
            <Download className="w-4 h-4" />
            PDF
          </Button>
        </div>

        {/* Experience */}
        <div className="mb-10">
          <h3 className="font-retro text-2xl text-primary mb-4">Experience</h3>
          <div className="space-y-6">
            {experience.map((job, i) => (
              <div key={i} className="border-l-2 border-primary pl-5">
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1 mb-2">
                  <div>
                    <h4 className="font-body font-semibold">{job.title}</h4>
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
        </div>

        {/* Education */}
        <div className="mb-10">
          <h3 className="font-retro text-2xl text-primary mb-4">Education</h3>
          <div className="border-l-2 border-primary pl-5">
            <h4 className="font-body font-semibold">Bachelor of Computer Science</h4>
            <p className="font-retro text-lg text-primary">University of Waterloo</p>
            <p className="font-retro text-lg text-muted-foreground">2021 – 2026 · Co-op Program · Dean's List</p>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h3 className="font-retro text-2xl text-primary mb-4">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span key={skill} className="px-3 py-1 border border-border font-retro text-base text-muted-foreground">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;