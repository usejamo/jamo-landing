import { motion } from "framer-motion";

const FluidBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Large coral blob */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-[0.07]"
        style={{
          background: "radial-gradient(circle, hsl(0 100% 71%) 0%, transparent 70%)",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
        animate={{
          scale: [1, 1.2, 1.05, 1.15, 1],
          x: ["-50%", "-45%", "-55%", "-48%", "-50%"],
          y: [0, -30, 20, -10, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Secondary blue blob */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-[0.05]"
        style={{
          background: "radial-gradient(circle, hsl(220 80% 60%) 0%, transparent 70%)",
          top: "30%",
          left: "30%",
        }}
        animate={{
          scale: [1, 1.15, 0.95, 1.1, 1],
          x: [0, 40, -20, 30, 0],
          y: [0, 20, -40, 10, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Third blob */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full opacity-[0.04]"
        style={{
          background: "radial-gradient(circle, hsl(350 80% 65%) 0%, transparent 70%)",
          top: "50%",
          right: "20%",
        }}
        animate={{
          scale: [1, 1.3, 1, 1.2, 1],
          x: [0, -30, 20, -10, 0],
          y: [0, -20, 30, -15, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Particle dots */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[2px] h-[2px] rounded-full"
          style={{
            background: i % 3 === 0 ? "hsl(0 100% 71% / 0.4)" : "hsl(220 60% 70% / 0.3)",
            top: `${10 + Math.random() * 80}%`,
            left: `${5 + Math.random() * 90}%`,
          }}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
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
