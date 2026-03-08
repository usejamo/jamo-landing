import { Clock, ShieldAlert, FileWarning } from "lucide-react";

const pains = [
  {
    icon: Clock,
    title: "Days of Manual Work",
    description:
      "Building a single bid proposal pulls from scattered templates, spreadsheets, and emails across multiple teams.",
  },
  {
    icon: ShieldAlert,
    title: "Bottlenecks Cost You Deals",
    description:
      "BD teams wait on ops and science to weigh in while sponsors are already talking to your competitors.",
  },
  {
    icon: FileWarning,
    title: "Inconsistency Hurts Credibility",
    description:
      "Manual processes mean formatting errors, pricing mistakes, and proposals that don't reflect your best work.",
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

      {/* Pain points */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {pains.map((pain) => (
            <div
              key={pain.title}
              className="flex flex-col items-center text-center relative"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-muted/50 border border-border flex items-center justify-center mb-6">
                <pain.icon
                  className="text-muted-foreground"
                  size={26}
                  strokeWidth={1.5}
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {pain.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed max-w-[280px]">
                {pain.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainSection;
