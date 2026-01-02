import { Button } from "@/components/ui/button";
import { Mail, MapPin, Linkedin, Twitter, Github } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 transform origin-top-right" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left column */}
          <div>
            <span className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-4 block">
              Get in Touch
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-8">
              Let's create
              <br />
              something <span className="italic">amazing</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-md mb-12">
              Have a project in mind? I'd love to hear about it. Let's discuss
              how we can work together to bring your ideas to life.
            </p>

            <Button variant="hero" size="xl" asChild>
              <a href="mailto:hello@janedoe.com" className="gap-3">
                <Mail className="w-5 h-5" />
                hello@janedoe.com
              </a>
            </Button>
          </div>

          {/* Right column */}
          <div className="flex flex-col justify-between">
            {/* Location */}
            <div className="mb-12">
              <div className="flex items-center gap-3 text-muted-foreground mb-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm uppercase tracking-wider">
                  Based in
                </span>
              </div>
              <p className="font-display text-2xl">San Francisco, CA</p>
              <p className="text-muted-foreground mt-1">
                Available for remote work worldwide
              </p>
            </div>

            {/* Social links */}
            <div>
              <h3 className="text-sm font-medium tracking-[0.15em] uppercase text-foreground mb-6">
                Connect
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
