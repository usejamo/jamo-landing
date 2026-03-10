import { useEffect, useRef } from "react";

const CursorGlow = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${e.clientX - 125}px, ${e.clientY - 125}px)`;
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={glowRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 250,
        height: 250,
        borderRadius: "50%",
        background: "radial-gradient(circle, hsl(0 100% 71% / 0.10) 0%, transparent 70%)",
        pointerEvents: "none",
        zIndex: 9999,
        transition: "transform 0.1s ease-out",
        willChange: "transform",
      }}
    />
  );
};

export default CursorGlow;
