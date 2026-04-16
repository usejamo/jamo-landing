import jamoIcon from "@/assets/jamo-icon.png";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-1">
          <img src={jamoIcon} alt="Jamo icon" className="h-7 w-auto" />
          <span className="text-base font-semibold text-foreground tracking-wide">
            Jamo
          </span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Jamo. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
