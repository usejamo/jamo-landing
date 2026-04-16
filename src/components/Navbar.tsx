import jamoIcon from "@/assets/jamo-icon.png";

const navLinks = [
  { label: "How it Works", href: "#how-it-works" },
  { label: "Why Jamo", href: "#why-jamo" },
  { label: "Contact", href: "#demo" },
];

const handleScroll = (e: React.MouseEvent, href: string) => {
  e.preventDefault();
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#hero"
          onClick={(e) => handleScroll(e, "#hero")}
          className="flex items-center gap-1 cursor-pointer"
        >
          <img src={jamoIcon} alt="Jamo icon" className="h-9 w-auto" />
          <span className="text-xl font-semibold text-foreground tracking-wide">
            Jamo
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#demo"
          onClick={(e) => handleScroll(e, "#demo")}
          className="bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-medium transition-all duration-150 hover:opacity-90 active:scale-[0.97]"
        >
          Get Early Access
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
