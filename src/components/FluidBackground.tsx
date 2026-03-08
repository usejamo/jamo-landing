import { motion } from "framer-motion";
import { useMemo } from "react";

interface Node {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
}

const FluidBackground = () => {
  const nodes = useMemo<Node[]>(() => {
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: 5 + Math.random() * 90,
      y: 10 + Math.random() * 80,
      size: i % 7 === 0 ? 4 : i % 4 === 0 ? 3 : 2,
      color: i % 3 === 0 ? "hsl(0 100% 71%)" : "hsl(220 60% 70%)",
      duration: 3 + Math.random() * 4,
      delay: Math.random() * 5,
    }));
  }, []);

  const connections = useMemo(() => {
    const lines: { x1: number; y1: number; x2: number; y2: number; delay: number }[] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 18 && lines.length < 30) {
          lines.push({
            x1: nodes[i].x,
            y1: nodes[i].y,
            x2: nodes[j].x,
            y2: nodes[j].y,
            delay: Math.random() * 6,
          });
        }
      }
    }
    return lines;
  }, [nodes]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Large coral blob - moves across the screen */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full opacity-[0.22]"
        style={{
          background: "radial-gradient(circle, hsl(0 100% 71%) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
        animate={{
          top: ["-5%", "10%", "0%", "15%", "-5%"],
          left: ["35%", "55%", "40%", "50%", "35%"],
          scale: [1, 1.15, 0.95, 1.1, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Secondary blue blob - drifts opposite direction */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-[0.15]"
        style={{
          background: "radial-gradient(circle, hsl(220 80% 60%) 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
        animate={{
          top: ["20%", "35%", "15%", "40%", "20%"],
          left: ["15%", "30%", "10%", "25%", "15%"],
          scale: [1, 1.2, 1.05, 1.15, 1],
        }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Third warm blob - roams lower right */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-[0.14]"
        style={{
          background: "radial-gradient(circle, hsl(350 80% 65%) 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
        animate={{
          top: ["50%", "35%", "55%", "40%", "50%"],
          right: ["5%", "20%", "10%", "25%", "5%"],
          scale: [1, 1.25, 0.9, 1.2, 1],
        }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Fourth accent blob - subtle teal */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full opacity-[0.08]"
        style={{
          background: "radial-gradient(circle, hsl(190 70% 55%) 0%, transparent 70%)",
          filter: "blur(25px)",
        }}
        animate={{
          top: ["60%", "45%", "65%", "50%", "60%"],
          left: ["55%", "70%", "60%", "45%", "55%"],
          scale: [1, 1.3, 1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Connection lines SVG */}
      <svg className="absolute inset-0 w-full h-full">
        {connections.map((line, i) => (
          <motion.line
            key={i}
            x1={`${line.x1}%`}
            y1={`${line.y1}%`}
            x2={`${line.x2}%`}
            y2={`${line.y2}%`}
            stroke="hsl(0 100% 71% / 0.12)"
            strokeWidth="1"
            animate={{
              opacity: [0, 0.4, 0.15, 0.3, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: line.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>

      {/* Particle dots / nodes */}
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          className="absolute rounded-full"
          style={{
            width: `${node.size}px`,
            height: `${node.size}px`,
            background: node.color,
            boxShadow: node.size > 3 ? `0 0 6px ${node.color}` : undefined,
          }}
          animate={{
            top: [`${node.y}%`, `${node.y + (Math.random() * 6 - 3)}%`, `${node.y}%`],
            left: [`${node.x}%`, `${node.x + (Math.random() * 6 - 3)}%`, `${node.x}%`],
            opacity: [0, 0.7, 0.3, 0.6, 0],
            scale: [0, 1.2, 0.8, 1, 0],
          }}
          transition={{
            duration: node.duration,
            repeat: Infinity,
            delay: node.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(0 0% 100% / 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(0 0% 100% / 0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
};

export default FluidBackground;
