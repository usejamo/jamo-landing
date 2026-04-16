import { Upload, Sparkles, Send } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: Upload,
    title: "Upload your RFP",
    description: "Drop in the sponsor's RFP and any supporting documents. Jamo reads and understands the full scope.",
  },
  {
    number: "2",
    icon: Sparkles,
    title: "Jamo drafts your proposal",
    description: "Jamo generates a tailored first draft, structured to match what sponsors expect to see.",
  },
  {
    number: "3",
    icon: Send,
    title: "Refine it together",
    description: "Work with Jamo section by section — adjust, ask for alternatives, and iterate until every part is right. It's a conversation, not a handoff.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-brand-light scroll-mt-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            How it works
          </h2>
          <p className="mt-3 text-muted-foreground text-lg">
            Three steps. One draft. A lot less stress.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-background rounded-2xl border border-border p-8 text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <step.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <span className="text-xs font-semibold text-primary tracking-widest">
                STEP {step.number}
              </span>
              <h3 className="text-lg font-semibold text-foreground mt-2 mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
