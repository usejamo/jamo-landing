import { Eye, Shield, Workflow } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const reasons = [
  {
    icon: Eye,
    title: "Transparent AI",
    description:
      "Jamo extracts every assumption from your documents and shows them to you before drafting. You approve, edit, or override. No black boxes.",
  },
  {
    icon: Shield,
    title: "Regulatory-Aware",
    description:
      "Built on ICH-GCP guidelines and FDA guidance documents, not a general-purpose language model. Jamo knows what a compliant proposal actually looks like.",
  },
  {
    icon: Workflow,
    title: "Built for CRO Workflows",
    description:
      "Works the way proposal managers actually work—section by section, with full control at every step.",
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
        {reasons.map((reason, index) => (
          <div key={reason.title}>
            {index > 0 && <Separator className="my-0" />}
            <div className="grid grid-cols-1 md:grid-cols-[80px_200px_1fr] gap-6 md:gap-10 items-center py-10 md:py-12">
              <div className="flex items-center justify-center md:justify-start">
                <reason.icon className="text-primary" size={40} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-foreground text-center md:text-left">
                {reason.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-center md:text-left">
                {reason.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyJamo;
