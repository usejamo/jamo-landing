import { Upload, Bot, Send } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Upload Your RFP",
    description: "Drop in the sponsor's request for proposal and Jamo gets to work instantly.",
  },
  {
    number: "02",
    icon: Bot,
    title: "Jamo Builds Your Proposal",
    description: "Our AI generates a fully structured, accurate bid proposal tailored to the study scope.",
  },
  {
    number: "03",
    icon: Send,
    title: "Review and Send",
    description: "Make any final edits and deliver a polished proposal to your sponsor in minutes.",
  },
];

const HowItWorks = () => {
  return (
    <section className="relative bg-[hsl(var(--navy-deep))] py-24 md:py-32">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 md:mb-20"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          How it Works
        </h2>
        <div className="w-12 h-1 bg-primary rounded-full mx-auto" />
      </motion.div>

      {/* Steps */}
      <div className="max-w-5xl mx-auto px-6 relative">
        {/* Connecting line — desktop only */}
        <div className="hidden md:block absolute top-14 left-[20%] right-[20%] h-px bg-border" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex flex-col items-center text-center relative"
            >
              {/* Numbered icon */}
              <div className="relative z-10 w-28 h-28 rounded-2xl bg-secondary flex flex-col items-center justify-center mb-6 border border-border">
                <span className="text-xs font-semibold text-primary tracking-widest mb-1">
                  {step.number}
                </span>
                <step.icon className="text-primary" size={28} strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed max-w-[260px]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
