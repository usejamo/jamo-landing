import jamoIcon from "@/assets/jamo-icon.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-foreground/[0.08] bg-background/70 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center" style={{ gap: "4px" }}>
          <img src={jamoIcon} alt="Jamo icon" className="h-8 w-auto" />
          <span className="text-xl font-medium text-foreground" style={{ fontFamily: "'Geist', 'Inter', sans-serif" }}>
            jamo
          </span>
        </div>

        {/* CTA */}
        <button className="bg-coral text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:brightness-90">
          Request a Demo
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
