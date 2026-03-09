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
    <section id="demo" className="relative bg-background py-24 md:py-32 overflow-hidden scroll-mt-16">
      <div
        className="absolute top-16 left-1/2 -translate-x-1/2 w-[400px] h-[200px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, hsl(0 100% 71% / 0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-lg mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          See Jamo on a Real RFP
        </h2>
        <p className="text-muted-foreground text-base md:text-lg mb-12">
          We'll walk you through a live proposal build using an actual CRO RFP. 30 minutes, no pitch deck.
        </p>

        {status === "success" ? (
          <div className="max-w-[480px] mx-auto py-12">
            <p className="text-lg font-semibold text-foreground">We'll be in touch soon.</p>
            <p className="text-muted-foreground mt-1">Talk soon.</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-4 max-w-[480px] mx-auto"
          >
            <input
              type="text"
              name="name"
              placeholder="First and Last Name"
              className="w-full px-4 py-3.5 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Work Email"
              className="w-full px-4 py-3.5 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors"
              required
            />
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              className="w-full px-4 py-3.5 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors"
              required
            />

            {status === "error" && (
              <p className="text-sm text-destructive">
                Something went wrong, please email us at joey@usejamo.com.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full bg-primary text-primary-foreground py-3.5 rounded-lg text-sm font-semibold transition-all duration-150 hover:brightness-[1.15] hover:scale-[1.03] active:scale-[0.97] mt-2 disabled:opacity-60"
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
