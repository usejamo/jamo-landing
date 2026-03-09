const DemoRequest = () => {
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

        <form 
          action="https://formspree.io/f/xdawaawe" 
          method="POST" 
          className="space-y-4 max-w-[480px] mx-auto"
        >
          <input type="hidden" name="_next" value="https://usejamo.com/thank-you" />
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
          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-3.5 rounded-lg text-sm font-semibold transition-all duration-150 hover:brightness-[1.15] hover:scale-[1.03] active:scale-[0.97] mt-2"
          >
            Request a Demo
          </button>
        </form>
      </div>
    </section>
  );
};

export default DemoRequest;
