const Footer = () => {
  return (
    <footer className="py-6 border-t border-border">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground font-body">
        <p>© {new Date().getFullYear()} Badee Khalbouss</p>

        <div className="flex items-center gap-2">
          <a href="https://cs.uwatering.com/#your-site-here?nav=prev" className="hover:text-foreground transition-colors">←</a>
          <a href="https://cs.uwatering.com/#your-site-here" target="_blank" rel="noopener noreferrer">
            <img src="https://cs.uwatering.com/icon.black.svg" alt="CS Webring" className="w-6 h-auto opacity-80 hover:opacity-100 transition-opacity dark:invert" />
          </a>
          <a href="https://cs.uwatering.com/#your-site-here?nav=next" className="hover:text-foreground transition-colors">→</a>
        </div>

        <a
          href="https://cs.uwaterloo.ca/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors"
        >
          cs.uwaterloo.ca
        </a>
      </div>
    </footer>
  );
};

export default Footer;