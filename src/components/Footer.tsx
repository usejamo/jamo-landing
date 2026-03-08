import jamoIcon from "@/assets/jamo-icon.png";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center" style={{ gap: "4px" }}>
          <img src={jamoIcon} alt="Jamo icon" className="h-7 w-auto" />
          <span
            className="text-base font-semibold text-foreground"
            style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.07em" }}
          >
            Jamo
          </span>
        </div>

        {/* Copyright */}
        <p className="text-sm text-muted-foreground">
          © 2025 Jamo. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
