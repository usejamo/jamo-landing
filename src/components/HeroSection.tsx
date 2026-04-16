import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-background">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.08] tracking-tight"
        >
          <span className="text-foreground">Proposals on</span>
          <br />
          <span className="text-brand">Autopilot.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed"
        >
          Jamo uses AI to turn your RFPs into sponsor-ready first drafts — in hours, not weeks.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8"
        >
          <a
            href="#demo"
            className="inline-block bg-primary text-primary-foreground px-8 py-3.5 rounded-lg text-base font-medium transition-all duration-150 hover:opacity-90 active:scale-[0.97]"
          >
            Get Early Access
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mt-4 text-sm text-muted-foreground"
        >
          Built for CRO business development and proposals teams.
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
