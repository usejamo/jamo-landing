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
      <div className="text-center mb-20 md:mb-28">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          The Old Way is Broken
        </h2>
        <div className="w-12 h-1 bg-primary rounded-full mx-auto" />
      </div>

      {/* Pain statements */}
      <div className="max-w-4xl mx-auto px-6 space-y-20 md:space-y-28">
        {pains.map((pain, i) => (
          <div key={i} className="text-center">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground">
              {pain.before}
              <span className="text-primary">{pain.highlight}</span>
            </p>
            <p className="mt-4 md:mt-6 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {pain.support}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PainSection;
