import { Button } from "@/components/ui/button";
import { Mail, MapPin, Linkedin, Twitter, Github } from "lucide-react";

const ContactSection = () => {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub", handle: "@yourname" },
    { icon: Linkedin, href: "#", label: "LinkedIn", handle: "/in/yourname" },
    { icon: Twitter, href: "#", label: "Twitter", handle: "@yourname" },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <p className="font-retro text-xl text-muted-foreground mb-2">
            <span className="text-primary">&gt;</span> cd ~/contact
          </p>
          <h2 className="font-pixel text-2xl md:text-3xl mb-4">Get In Touch</h2>
          <p className="font-retro text-xl text-muted-foreground">
            Let's connect and build something cool <span className="animate-blink">_</span>
          </p>
        </div>

        {/* Contact card */}
        <div className="border-2 border-foreground shadow-retro bg-card">
          {/* Terminal header */}
          <div className="border-b-2 border-foreground px-4 py-2 flex items-center gap-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 border-2 border-foreground" />
              <div className="w-3 h-3 border-2 border-foreground" />
              <div className="w-3 h-3 border-2 border-foreground bg-foreground" />
            </div>
            <span className="font-retro text-lg ml-4">contact.exe</span>
          </div>

          <div className="p-6 md:p-8 space-y-8">
            {/* Email section */}
            <div>
              <p className="font-retro text-xl text-muted-foreground mb-4">
                <span className="text-primary">&gt;</span> Best way to reach me:
              </p>
              <Button variant="retro" size="lg" asChild>
                <a href="mailto:your@email.com" className="gap-3">
                  <Mail className="w-5 h-5" />
                  your@email.com
                </a>
              </Button>
            </div>

            {/* Location */}
            <div className="border-t-2 border-foreground/30 pt-6">
              <p className="font-retro text-xl text-muted-foreground mb-2">
                <span className="text-primary">&gt;</span> Location:
              </p>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="font-retro text-xl">Waterloo, ON, Canada</span>
              </div>
              <p className="font-retro text-lg text-muted-foreground mt-1 ml-7">
                Open to remote opportunities worldwide
              </p>
            </div>

            {/* Social links */}
            <div className="border-t-2 border-foreground/30 pt-6">
              <p className="font-retro text-xl text-muted-foreground mb-4">
                <span className="text-primary">&gt;</span> Find me online:
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="flex items-center gap-3 p-4 border-2 border-foreground bg-background hover:bg-secondary transition-colors group"
                  >
                    <social.icon className="w-5 h-5 group-hover:text-primary transition-colors" />
                    <div>
                      <p className="font-body text-sm font-medium">{social.label}</p>
                      <p className="font-retro text-base text-muted-foreground">
                        {social.handle}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Status */}
            <div className="border-t-2 border-foreground/30 pt-6">
              <p className="font-retro text-xl text-muted-foreground">
                <span className="text-primary">&gt;</span> Status:{" "}
                <span className="text-primary">
                  Open to internship opportunities for Fall 2025
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
