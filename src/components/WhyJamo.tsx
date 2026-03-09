import { Eye, Shield, Workflow } from "lucide-react";

const reasons = [
  {
    icon: Eye,
    title: "Transparent AI",
    description: "Jamo extracts every assumption from your documents and shows them to you before drafting. You approve, edit, or override. No black boxes.",
  },
  {
    icon: Shield,
    title: "Regulatory-Aware",
    description: "Built on ICH-GCP guidelines and FDA guidance documents, not a general-purpose language model. Jamo knows what a compliant proposal actually looks like.",
  },
  {
    icon: Workflow,
    title: "Built for CRO Workflows",
    description: "Works the way proposal managers actually work—section by section, with full control at every step.",
  },
];

const WhyJamo = () => {
  return (
    <section id="why-jamo" className="relative bg-background py-24 md:py-32 scroll-mt-16">
      <div className="text-center mb-16 md:mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Why Jamo
        </h2>
        <div className="w-12 h-1 bg-primary rounded-full mx-auto" />
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="flex flex-col items-center text-center relative group"
            >
              <div className="relative z-10 w-28 h-28 rounded-2xl bg-secondary flex flex-col items-center justify-center mb-6 border border-border transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:shadow-[0_8px_30px_-8px_hsl(0_100%_71%/0.15)] group-hover:border-primary/30">
                <reason.icon className="text-primary" size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{reason.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-[280px]">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJamo;
