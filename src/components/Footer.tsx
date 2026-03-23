const Footer = () => {
  return (
    <footer className="py-6 border-t border-border">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-muted-foreground font-body">
        <p>© {new Date().getFullYear()} Badee Khalbouss</p>
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