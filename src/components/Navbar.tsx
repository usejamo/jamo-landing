import jamoIcon from "@/assets/jamo-icon.png";

const navLinks = [
  { label: "The Problem", href: "#the-problem" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Why Jamo", href: "#why-jamo" },
];

const handleScroll = (e: React.MouseEvent, href: string) => {
  e.preventDefault();
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-foreground/[0.08] bg-background/70 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" onClick={(e) => handleScroll(e, "#hero")} className="flex items-center cursor-pointer" style={{ gap: "4px" }}>
          <img src={jamoIcon} alt="Jamo icon" className="h-11 w-auto" />
          <span className="text-2xl font-semibold text-foreground" style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.07em" }}>
            Jamo
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="group relative text-sm text-muted-foreground hover:text-primary transition-colors duration-200 pb-0.5"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary rounded-full transition-all duration-200 ease-out group-hover:w-full" />
            </a>
          ))}
        </div>

        <a
          href="#demo"
          onClick={(e) => handleScroll(e, "#demo")}
          className="bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-150 hover:brightness-[1.15] hover:scale-[1.03] active:scale-[0.97]"
        >
          Request a Demo
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
