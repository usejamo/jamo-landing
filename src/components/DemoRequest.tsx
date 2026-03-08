import { useState } from "react";

const DemoRequest = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up form submission
    console.log("Demo request:", form);
  };

  return (
    <section id="demo" className="relative bg-background py-24 md:py-32 overflow-hidden scroll-mt-16">
      {/* Coral glow behind header */}
      <div
        className="absolute top-16 left-1/2 -translate-x-1/2 w-[400px] h-[200px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, hsl(0 100% 71% / 0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-lg mx-auto px-6 text-center">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          See Jamo in Action
        </h2>
        <p className="text-muted-foreground text-base md:text-lg mb-12">
          Request a demo and see how fast your next proposal could be.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 max-w-[480px] mx-auto">
          <input
            type="text"
            placeholder="First and Last Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-3.5 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors"
            required
          />
          <input
            type="email"
            placeholder="Work Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-3.5 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors"
            required
          />
          <input
            type="text"
            placeholder="Company Name"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            className="w-full px-4 py-3.5 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors"
            required
          />
          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-3.5 rounded-lg text-sm font-semibold transition-all duration-200 hover:brightness-90 mt-2"
          >
            Request a Demo
          </button>
        </form>
      </div>
    </section>
  );
};

export default DemoRequest;
