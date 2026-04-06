import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#experience", label: "Experience" },
    { href: "#events", label: "Events" },
    { href: "#archive", label: "Archive" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-dashed border-border ${
        scrolled ? "bg-background py-3" : "bg-background/90 backdrop-blur-sm py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="text-sm font-bold tracking-widest text-foreground hover:text-primary transition-colors uppercase">
          Badee Khalbouss
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
