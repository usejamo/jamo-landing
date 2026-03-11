import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useMemo, useEffect, useState, useRef, useCallback } from "react";
import MobileBlobBackground from "./MobileBlobBackground";

interface NodeData {
  id: number;
  startX: number;
  startY: number;
  size: number;
  color: string;
  driftDuration: number;
  driftX: number;
  driftY: number;
}

interface Connection {
  id: number;
  from: number;
  to: number;
  duration: number;
}

const NetworkNode = ({
  node,
  visible,
  onPositionUpdate,
}: {
  node: NodeData;
  visible: boolean;
  onPositionUpdate: (id: number, x: number, y: number) => void;
}) => {
  const x = useMotionValue(node.startX);
  const y = useMotionValue(node.startY);

  useEffect(() => {
    const animX = animate(x, [node.startX, node.startX + node.driftX, node.startX - node.driftX * 0.5, node.startX], {
      duration: node.driftDuration,
      repeat: Infinity,
      ease: "easeInOut",
    });
    const animY = animate(y, [node.startY, node.startY + node.driftY, node.startY - node.driftY * 0.5, node.startY], {
      duration: node.driftDuration * 1.1,
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
        left: useTransform(x, (v) => `${v}%`),
        top: useTransform(y, (v) => `${v}%`),
        boxShadow: node.size > 3 ? `0 0 8px ${node.color}` : undefined,
        willChange: "transform",
        transform: "translateZ(0)",
      }}
      animate={{ opacity: visible ? [0, 0.8, 0.8] : [0.8, 0, 0] }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    />
  );
};

const DesktopFluidBackground = () => {
  const nodes = useMemo<NodeData[]>(() => {
    return Array.from({ length: 60 }, (_, i) => ({
      id: i,
      startX: 5 + Math.random() * 90,
      startY: 10 + Math.random() * 80,
      size: i % 7 === 0 ? 4 : i % 4 === 0 ? 3 : 2,
      color: i % 3 === 0 ? "hsl(0 100% 71%)" : "hsl(220 60% 70%)",
      driftDuration: 14 + Math.random() * 10,
      driftX: 2 + Math.random() * 4,
      driftY: 2 + Math.random() * 4,
    }));
  }, []);

  const [visibleSet, setVisibleSet] = useState<Set<number>>(() => {
    const s = new Set<number>();
    nodes.forEach((n) => { if (Math.random() > 0.3) s.add(n.id); });
    return s;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleSet((prev) => {
        const next = new Set(prev);
        const count = 3 + Math.floor(Math.random() * 3);
        for (let i = 0; i < count; i++) {
          const id = Math.floor(Math.random() * nodes.length);
          if (next.has(id)) next.delete(id);
          else next.add(id);
        }
        return next;
      });
    }, 800);
    return () => clearInterval(interval);
  }, [nodes.length]);

  const posRef = useRef<Record<number, { x: number; y: number }>>({});
  const [positions, setPositions] = useState<Record<number, { x: number; y: number }>>(() => {
    const init: Record<number, { x: number; y: number }> = {};
    nodes.forEach((n) => { init[n.id] = { x: n.startX, y: n.startY }; });
    return init;
  });

  useEffect(() => {
    nodes.forEach((n) => { posRef.current[n.id] = { x: n.startX, y: n.startY }; });
  }, [nodes]);

  const handlePositionUpdate = useCallback((id: number, x: number, y: number) => {
    posRef.current[id] = { x, y };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPositions({ ...posRef.current });
    }, 66);
    return () => clearInterval(interval);
  }, []);

  const connIdRef = useRef(0);
  const [connections, setConnections] = useState<Connection[]>([]);

  useEffect(() => {
    const spawnConnection = () => {
      const visibleIds = Array.from(visibleSet);
      if (visibleIds.length < 2) return;
      const fromId = visibleIds[Math.floor(Math.random() * visibleIds.length)];
      const fromPos = posRef.current[fromId];
      if (!fromPos) return;
      const nearby = visibleIds.filter((id) => {
        if (id === fromId) return false;
        const p = posRef.current[id];
        if (!p) return false;
        const dx = fromPos.x - p.x;
        const dy = fromPos.y - p.y;
        return Math.sqrt(dx * dx + dy * dy) < 15;
      });
      if (nearby.length === 0) return;
      const toId = nearby[Math.floor(Math.random() * nearby.length)];
      const duration = 2;
      const id = connIdRef.current++;
      setConnections((prev) => [...prev, { id, from: fromId, to: toId, duration }]);
      setTimeout(() => {
        setConnections((prev) => prev.filter((c) => c.id !== id));
      }, duration * 1000);
    };

    const interval = setInterval(spawnConnection, 400);
    for (let i = 0; i < 8; i++) setTimeout(spawnConnection, i * 200);
    return () => clearInterval(interval);
  }, [visibleSet]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full opacity-[0.22]"
        style={{ background: "radial-gradient(circle, hsl(0 100% 71%) 0%, transparent 70%)", filter: "blur(40px)" }}
        animate={{ top: ["-5%", "10%", "0%", "15%", "-5%"], left: ["35%", "55%", "40%", "50%", "35%"], scale: [1, 1.15, 0.95, 1.1, 1] }}
        transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-[0.15]"
        style={{ background: "radial-gradient(circle, hsl(220 80% 60%) 0%, transparent 70%)", filter: "blur(30px)" }}
        animate={{ top: ["20%", "35%", "15%", "40%", "20%"], left: ["15%", "30%", "10%", "25%", "15%"], scale: [1, 1.2, 1.05, 1.15, 1] }}
        transition={{ duration: 50, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-[0.14]"
        style={{ background: "radial-gradient(circle, hsl(350 80% 65%) 0%, transparent 70%)", filter: "blur(30px)" }}
        animate={{ top: ["50%", "35%", "55%", "40%", "50%"], right: ["5%", "20%", "10%", "25%", "5%"], scale: [1, 1.25, 0.9, 1.2, 1] }}
        transition={{ duration: 45, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full opacity-[0.08]"
        style={{ background: "radial-gradient(circle, hsl(190 70% 55%) 0%, transparent 70%)", filter: "blur(25px)" }}
        animate={{ top: ["60%", "45%", "65%", "50%", "60%"], left: ["55%", "70%", "60%", "45%", "55%"], scale: [1, 1.3, 1, 1.2, 1] }}
        transition={{ duration: 38, repeat: Infinity, ease: "easeInOut" }}
      />

      <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: "none" }}>
        {connections.map((conn) => {
          const p1 = positions[conn.from];
          const p2 = positions[conn.to];
          if (!p1 || !p2) return null;
          return (
            <motion.line
              key={conn.id}
              x1={`${p1.x}%`} y1={`${p1.y}%`} x2={`${p2.x}%`} y2={`${p2.y}%`}
              stroke="hsl(0 100% 71% / 0.18)" strokeWidth="1"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.5, 0.3, 0] }}
              transition={{ duration: conn.duration, ease: "easeInOut" }}
            />
          );
        })}
      </svg>

      {nodes.map((node) => (
        <NetworkNode key={node.id} node={node} visible={visibleSet.has(node.id)} onPositionUpdate={handlePositionUpdate} />
      ))}

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(0 0% 100% / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100% / 0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
};

const FluidBackground = () => {
  return (
    <>
      <MobileBlobBackground />
      <DesktopFluidBackground />
    </>
  );
};

export default FluidBackground;
