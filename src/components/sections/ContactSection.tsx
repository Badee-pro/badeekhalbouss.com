import { Mail, Linkedin, Github, Instagram } from 'lucide-react';

const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const ContactSection = () => {
  const socialLinks = [
    { icon: Mail, href: 'mailto:bkhalbou@uwaterloo.ca', label: 'Email' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/badee-khalbouss/', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/Badee-pro', label: 'GitHub' },
    { icon: XIcon, href: 'https://x.com/badeekh', label: 'X' },
    { icon: Instagram, href: 'https://www.instagram.com/badee.tapatio', label: 'Instagram' },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="font-pixel text-2xl md:text-3xl mb-4">Get In Touch</h2>
        <a href="mailto:bkhalbou@uwaterloo.ca" className="font-retro text-xl text-muted-foreground hover:text-primary transition-colors mb-8 inline-block">
          bkhalbou@uwaterloo.ca
        </a>

        <div className="flex justify-center gap-5 mb-10">
          {socialLinks.map(social => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="p-3 text-muted-foreground hover:text-primary transition-colors"
            >
              <social.icon className="w-6 h-6" />
            </a>
          ))}
        </div>

        <a
          href="https://cs.uwaterloo.ca/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-retro text-lg text-muted-foreground hover:text-primary transition-colors"
        >
          cs.uwaterloo.ca
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
