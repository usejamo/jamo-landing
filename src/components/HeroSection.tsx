import { motion } from "framer-motion";
import FluidBackground from "./FluidBackground";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <FluidBackground />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.1] tracking-tight"
        >
          <span className="text-foreground">Proposals on</span>
          <br />
          <span className="text-coral">Autopilot</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          Jamo helps CRO business development and proposal teams generate accurate bid proposals in minutes, not days.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-10"
        >
          <a
            href="#demo"
            className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg text-base font-semibold transition-all duration-300 hover:brightness-110 hover:scale-[1.02] glow-coral"
          >
            Request a Demo
          </a>
        </motion.div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, hsl(222 47% 6%))",
        }}
      />
    </section>
  );
};

export default HeroSection;
