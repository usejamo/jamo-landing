import brokenProcessImg from "@/assets/broken-process.png";

const pains = [
  {
    before: "Building a single proposal takes ",
    highlight: "days.",
    support: "Scattered templates, spreadsheets, and endless back and forth across teams.",
  },
  {
    before: "Bottlenecks are ",
    highlight: "costing you deals.",
    support: "BD waits on ops and science while sponsors are already talking to your competitors.",
  },
  {
    before: "Inconsistency is ",
    highlight: "hurting your credibility.",
    support: "Formatting errors and pricing mistakes on every manual proposal.",
  },
];

const PainSection = () => {
  return (
    <section className="relative bg-background py-24 md:py-32">
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

        {/* Right: abstract graphic */}
        <div className="flex items-center justify-center md:justify-end order-last">
          <img
            src={brokenProcessImg}
            alt="Abstract illustration of fragmented, tangled documents representing broken processes"
            className="w-full max-w-md rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default PainSection;
