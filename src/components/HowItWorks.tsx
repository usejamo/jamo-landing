import { Upload, Bot, Send } from "lucide-react";

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
    <section id="how-it-works" className="relative bg-background py-24 md:py-32 scroll-mt-16">
      <div className="text-center mb-16 md:mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          How it Works
        </h2>
        <div className="w-12 h-1 bg-primary rounded-full mx-auto" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative">
        <div className="hidden md:block absolute top-14 left-[20%] right-[20%] h-px bg-border" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col items-center text-center relative group"
            >
              <div className="relative z-10 w-28 h-28 rounded-2xl bg-secondary flex flex-col items-center justify-center mb-6 border border-border transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:shadow-[0_8px_30px_-8px_hsl(0_100%_71%/0.15)] group-hover:border-primary/30">
                <span className="text-xs font-semibold text-primary tracking-widest mb-1">
                  {step.number}
                </span>
                <step.icon className="text-primary" size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-[260px]">
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
