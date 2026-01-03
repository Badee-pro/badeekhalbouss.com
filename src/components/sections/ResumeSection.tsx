import { Button } from "@/components/ui/button";
import { Download, Mail, MapPin, ExternalLink } from "lucide-react";

const ResumeSection = () => {
  const experience = [
    {
      title: "Software Developer Intern",
      company: "Tech Company",
      location: "Toronto, ON",
      period: "May 2024 - Aug 2024",
      highlights: [
        "Developed and maintained web applications using React and TypeScript",
        "Collaborated with cross-functional teams to deliver features on time",
        "Improved application performance by 30% through code optimization",
      ],
    },
    {
      title: "Research Assistant",
      company: "University of Waterloo",
      location: "Waterloo, ON",
      period: "Sep 2023 - Dec 2023",
      highlights: [
        "Conducted research on machine learning algorithms",
        "Published findings in academic conferences",
        "Mentored junior students on research methodologies",
      ],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Computer Science",
      school: "University of Waterloo",
      period: "2021 - 2026",
      details: "Co-op Program • Dean's List",
    },
  ];

  const skills = {
    languages: ["TypeScript", "Python", "Java", "C++", "SQL"],
    frameworks: ["React", "Node.js", "Next.js", "TailwindCSS", "Express"],
    tools: ["Git", "Docker", "AWS", "PostgreSQL", "MongoDB"],
  };

  return (
    <section id="resume" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
          <div>
            <p className="font-retro text-xl text-muted-foreground mb-2">
              <span className="text-primary">&gt;</span> cat resume.txt
            </p>
            <h2 className="font-pixel text-2xl md:text-3xl mb-2">Resume</h2>
            <p className="font-retro text-xl text-muted-foreground">
              My experience and skills <span className="animate-blink">_</span>
            </p>
          </div>
          <Button variant="retro" className="gap-2">
            <Download className="w-4 h-4" />
            Download PDF
          </Button>
        </div>

        {/* Contact Info */}
        <div className="border-2 border-foreground shadow-retro bg-card p-4 mb-8">
          <div className="flex flex-wrap gap-6 font-retro text-lg">
            <a href="mailto:your@email.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              your@email.com
            </a>
            <span className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              Waterloo, ON
            </span>
            <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <ExternalLink className="w-4 h-4" />
              linkedin.com/in/yourname
            </a>
          </div>
        </div>

        {/* Experience */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-pixel text-sm text-primary">[01]</span>
            <h3 className="font-pixel text-lg">Experience</h3>
            <div className="flex-1 border-t-2 border-foreground/30" />
          </div>
          <div className="space-y-4">
            {experience.map((job, index) => (
              <div key={index} className="border-2 border-foreground shadow-retro-sm bg-card p-6 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-3">
                  <div>
                    <h4 className="font-body font-semibold text-lg">{job.title}</h4>
                    <p className="font-retro text-xl text-primary">{job.company}</p>
                  </div>
                  <div className="text-right font-retro text-lg text-muted-foreground">
                    <p>{job.period}</p>
                    <p>{job.location}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {job.highlights.map((highlight, i) => (
                    <li key={i} className="font-body text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">&gt;</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-pixel text-sm text-primary">[02]</span>
            <h3 className="font-pixel text-lg">Education</h3>
            <div className="flex-1 border-t-2 border-foreground/30" />
          </div>
          {education.map((edu, index) => (
            <div key={index} className="border-2 border-foreground shadow-retro-sm bg-card p-6">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-2">
                <div>
                  <h4 className="font-body font-semibold text-lg">{edu.degree}</h4>
                  <p className="font-retro text-xl text-primary">{edu.school}</p>
                  <p className="font-retro text-lg text-muted-foreground mt-1">{edu.details}</p>
                </div>
                <p className="font-retro text-lg text-muted-foreground">{edu.period}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <span className="font-pixel text-sm text-primary">[03]</span>
            <h3 className="font-pixel text-lg">Skills</h3>
            <div className="flex-1 border-t-2 border-foreground/30" />
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="border-2 border-foreground shadow-retro-sm bg-card p-6">
              <h4 className="font-body font-semibold mb-3">Languages</h4>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill) => (
                  <span key={skill} className="px-3 py-1 border border-primary text-primary font-retro text-base">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="border-2 border-foreground shadow-retro-sm bg-card p-6">
              <h4 className="font-body font-semibold mb-3">Frameworks</h4>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill) => (
                  <span key={skill} className="px-3 py-1 border border-primary text-primary font-retro text-base">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="border-2 border-foreground shadow-retro-sm bg-card p-6">
              <h4 className="font-body font-semibold mb-3">Tools</h4>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <span key={skill} className="px-3 py-1 border border-primary text-primary font-retro text-base">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
