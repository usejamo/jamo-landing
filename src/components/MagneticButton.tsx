import { useRef, useState, type ReactNode } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  as?: "button" | "a";
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
}

const MagneticButton = ({ children, className = "", as = "button", href, onClick }: MagneticButtonProps) => {
  const ref = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const maxDist = 80;
    if (dist < maxDist) {
      const strength = (1 - dist / maxDist) * 10;
      setOffset({ x: (dx / dist) * strength, y: (dy / dist) * strength });
    }
  };

  const handleMouseLeave = () => setOffset({ x: 0, y: 0 });

  const style = {
    transform: `translate(${offset.x}px, ${offset.y}px)`,
    transition: offset.x === 0 && offset.y === 0 ? "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "transform 0.15s ease-out",
  };

  const Comp = as as any;

  return (
    <Comp
      ref={ref}
      className={className}
      style={style}
      href={href}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </Comp>
  );
};

export default MagneticButton;
