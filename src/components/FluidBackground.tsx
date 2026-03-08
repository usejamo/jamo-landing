import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useMemo, useEffect, useState } from "react";

interface NodeData {
  id: number;
  startX: number;
  startY: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
  driftX: number;
  driftY: number;
}

const NetworkNode = ({ node, onPositionUpdate }: { node: NodeData; onPositionUpdate: (id: number, x: number, y: number) => void }) => {
  const x = useMotionValue(node.startX);
  const y = useMotionValue(node.startY);

  useEffect(() => {
    const animX = animate(x, [node.startX, node.startX + node.driftX, node.startX - node.driftX * 0.5, node.startX], {
      duration: node.duration,
      repeat: Infinity,
      ease: "easeInOut",
    });
    const animY = animate(y, [node.startY, node.startY + node.driftY, node.startY - node.driftY * 0.5, node.startY], {
      duration: node.duration * 1.1,
      repeat: Infinity,
      ease: "easeInOut",
    });

    const unsub1 = x.on("change", (v) => onPositionUpdate(node.id, v, y.get()));
    const unsub2 = y.on("change", (v) => onPositionUpdate(node.id, x.get(), v));

    return () => { animX.stop(); animY.stop(); unsub1(); unsub2(); };
  }, []);

  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: `${node.size}px`,
        height: `${node.size}px`,
        background: node.color,
        left: useTransform(x, v => `${v}%`),
        top: useTransform(y, v => `${v}%`),
        boxShadow: node.size > 3 ? `0 0 8px ${node.color}` : undefined,
      }}
      animate={{ opacity: [0.3, 0.8, 0.5, 0.7, 0.3] }}
      transition={{ duration: node.duration, repeat: Infinity, ease: "easeInOut", delay: node.delay }}
    />
  );
};

const FluidBackground = () => {
  const nodes = useMemo<NodeData[]>(() => {
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      startX: 5 + Math.random() * 90,
      startY: 10 + Math.random() * 80,
      size: i % 7 === 0 ? 4 : i % 4 === 0 ? 3 : 2,
      color: i % 3 === 0 ? "hsl(0 100% 71%)" : "hsl(220 60% 70%)",
      duration: 12 + Math.random() * 10,
      delay: Math.random() * 5,
      driftX: 2 + Math.random() * 4,
      driftY: 2 + Math.random() * 4,
    }));
  }, []);

  const connectionPairs = useMemo(() => {
    const pairs: [number, number][] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].startX - nodes[j].startX;
        const dy = nodes[i].startY - nodes[j].startY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 18 && pairs.length < 30) {
          pairs.push([i, j]);
        }
      }
    }
    return pairs;
  }, [nodes]);

  const [positions, setPositions] = useState<Record<number, { x: number; y: number }>>(() => {
    const init: Record<number, { x: number; y: number }> = {};
    nodes.forEach(n => { init[n.id] = { x: n.startX, y: n.startY }; });
    return init;
  });

  const handlePositionUpdate = useMemo(() => {
    let buffer: Record<number, { x: number; y: number }> = {};
    let rafId: number | null = null;

    return (id: number, x: number, y: number) => {
      buffer[id] = { x, y };
      if (!rafId) {
        rafId = requestAnimationFrame(() => {
          setPositions(prev => ({ ...prev, ...buffer }));
          buffer = {};
          rafId = null;
        });
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Large coral blob */}
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
        transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Secondary blue blob */}
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
        transition={{ duration: 50, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Third warm blob */}
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
        transition={{ duration: 45, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Fourth accent blob */}
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
        transition={{ duration: 38, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Live connection lines */}
      <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: "none" }}>
        {connectionPairs.map(([i, j], idx) => {
          const p1 = positions[i];
          const p2 = positions[j];
          if (!p1 || !p2) return null;
          return (
            <line
              key={idx}
              x1={`${p1.x}%`}
              y1={`${p1.y}%`}
              x2={`${p2.x}%`}
              y2={`${p2.y}%`}
              stroke="hsl(0 100% 71% / 0.15)"
              strokeWidth="1"
            />
          );
        })}
      </svg>

      {/* Animated nodes */}
      {nodes.map((node) => (
        <NetworkNode key={node.id} node={node} onPositionUpdate={handlePositionUpdate} />
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
