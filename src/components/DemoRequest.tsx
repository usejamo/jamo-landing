import { useState } from "react";

const DemoRequest = () => {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xdawaawe", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="demo" className="py-20 md:py-28 bg-brand-light scroll-mt-16">
      <div className="max-w-lg mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
          <span className="text-foreground">Proposals on</span>
          <br />
          <span className="text-brand">Autopilot.</span>
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          See Jamo draft a real proposal from an actual RFP. 30 minutes, no pitch deck.
        </p>

        {status === "success" ? (
          <div className="mt-10 py-8">
            <p className="text-lg font-semibold text-foreground">Thanks — we'll be in touch soon.</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-3 max-w-md mx-auto text-left"
          >
            <input
              type="text"
              name="name"
              placeholder="Full name"
              className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Work email"
              className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              required
            />
            <input
              type="text"
              name="company"
              placeholder="Company"
              className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              required
            />

            {status === "error" && (
              <p className="text-sm text-destructive">
                Something went wrong — please email joey@usejamo.com directly.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full bg-primary text-primary-foreground py-3 rounded-lg text-sm font-medium transition-all duration-150 hover:opacity-90 active:scale-[0.97] disabled:opacity-60"
            >
              {status === "submitting" ? "Submitting…" : "Request a Demo"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default DemoRequest;
