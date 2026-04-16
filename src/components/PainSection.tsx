import { X, Check } from "lucide-react";

const oldWay = [
  "Writing proposals from scratch every time",
  "Copy-pasting from old bids and hoping it fits",
  "Inconsistent quality across your team",
  "Days (or weeks) lost on every RFP response",
];

const jamoWay = [
  "Jamo drafts your proposal from your RFP, scope documents, or any uploaded context",
  "Consistent structure, every time",
  "Your team reviews and refines — not writes",
  "First draft in minutes, not weeks",
  "Grounded in official regulatory and industry guidance — not the open internet",
];

const PainSection = () => {
  return (
    <section id="the-problem" className="py-20 md:py-28 bg-background scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Stop writing proposals the hard way
          </h2>
          <p className="mt-3 text-muted-foreground text-lg max-w-2xl mx-auto">
            Your team shouldn't spend weeks on what Jamo can draft in minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Old way */}
          <div className="rounded-2xl border border-border bg-muted/50 p-8">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
              The old way
            </p>
            <ul className="space-y-4">
              {oldWay.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-destructive/10 flex items-center justify-center">
                    <X className="w-3 h-3 text-destructive" />
                  </span>
                  <span className="text-foreground text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Jamo way */}
          <div className="rounded-2xl border border-primary/20 bg-brand-light p-8">
            <p className="text-sm font-semibold text-brand uppercase tracking-wider mb-6">
              The Jamo way
            </p>
            <ul className="space-y-4">
              {jamoWay.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" />
                  </span>
                  <span className="text-foreground text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainSection;
