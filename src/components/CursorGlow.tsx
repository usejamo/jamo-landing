import { useEffect, useRef } from "react";

const CursorGlow = () => {
  const glowRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const raf = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMove);

    const animate = () => {
      current.current.x += (mouse.current.x - current.current.x) * 0.08;
      current.current.y += (mouse.current.y - current.current.y) * 0.08;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${current.current.x - 250}px, ${current.current.y + window.scrollY - 250}px)`;
      }
      raf.current = requestAnimationFrame(animate);
    };
    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed top-0 left-0 z-0"
      style={{
        width: 500,
        height: 500,
        borderRadius: "50%",
        background: "radial-gradient(circle, hsl(0 100% 71% / 0.12) 0%, transparent 70%)",
        willChange: "transform",
        position: "fixed",
      }}
    />
  );
};

export default CursorGlow;
