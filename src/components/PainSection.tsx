import TangledWorkflow from "./TangledWorkflow";

const pains = [
  {
    before: "The ",
    highlight: '"prompt and pray" problem.',
    support: "Teams paste everything into a generic AI tool and hope the output is usable. It rarely is.",
  },
  {
    before: "Compliance ",
    highlight: "anxiety.",
    support: "One missed regulatory section and the whole bid is at risk. Nobody wants to be the one who missed it.",
  },
  {
    before: "The ",
    highlight: "timeline crunch.",
    support: "Sponsors send RFPs with 2-week turnarounds and teams are still copy-pasting from the last proposal.",
  },
];

const PainSection = () => {
  return (
    <section id="the-problem" className="relative bg-background py-24 md:py-32 scroll-mt-16">
      {/* Header */}
      <div className="text-center mb-16 md:mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          The Old Way is Broken
        </h2>
        <div className="w-12 h-1 bg-primary rounded-full mx-auto" />
      </div>

      {/* Two-column layout */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Left: pain statements */}
        <div className="space-y-12 md:space-y-16">
          {pains.map((pain, i) => (
            <div key={i}>
              <p className="text-xl sm:text-2xl md:text-[1.7rem] font-bold leading-snug text-foreground">
                {pain.before}
                <span className="text-primary">{pain.highlight}</span>
              </p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-md">
                {pain.support}
              </p>
            </div>
          ))}
        </div>

        {/* Right: tangled workflow SVG */}
        <div className="flex items-center justify-center md:justify-end order-last">
          <TangledWorkflow className="w-full max-w-md" />
        </div>
      </div>
    </section>
  );
};

export default PainSection;
