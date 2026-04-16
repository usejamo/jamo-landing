import { Eye, Shield, Workflow, Zap, FileText, Users } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Purpose-built for CROs",
    description: "Not a generic AI writing tool. Jamo understands clinical trial proposals, regulatory language, and sponsor expectations.",
  },
  {
    icon: Zap,
    title: "First draft in minutes",
    description: "Go from RFP to structured proposal draft with Jamo — faster than your team can open a blank document.",
  },
  {
    icon: Shield,
    title: "Regulatory-aware",
    description: "Built on ICH-GCP guidelines and FDA guidance. Jamo knows what a compliant proposal looks like.",
  },
  {
    icon: Eye,
    title: "Transparent AI",
    description: "Jamo shows its assumptions before drafting. You approve, edit, or override. No black boxes.",
  },
  {
    icon: Workflow,
    title: "Built for BD teams",
    description: "Works the way proposal managers actually work — section by section, with full control at every step.",
  },
  {
    icon: Users,
    title: "Easy to adopt",
    description: "No IT setup, no training required. If your team can use Google Docs, they can use Jamo.",
  },
];

const WhyJamo = () => {
  return (
    <section id="why-jamo" className="py-20 md:py-28 bg-background scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Why Jamo
          </h2>
          <p className="mt-3 text-muted-foreground text-lg max-w-2xl mx-auto">
            We built Jamo because CRO teams deserve better than copy-paste and generic AI.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-border p-7 hover:border-primary/20 transition-colors duration-200"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-1.5">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJamo;
