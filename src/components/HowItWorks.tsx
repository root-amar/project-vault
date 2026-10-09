export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Choose a project",
      description: "Browse our catalog of ready-to-build projects or come up with your own idea."
    },
    {
      num: "02",
      title: "Tell us what you need",
      description: "Provide your requirements, tech stack preferences, and deadline."
    },
    {
      num: "03",
      title: "We build & customize it",
      description: "Our engineers develop your project to the exact specifications."
    },
    {
      num: "04",
      title: "Receive the final project",
      description: "Get the complete source code, documentation, and setup support."
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-[var(--surface)] border-y border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-[var(--foreground)]">How It Works</h2>
          <p className="text-lg text-[var(--muted-foreground)]">A straightforward process from idea to delivery.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[var(--background)] border border-[var(--border)] flex items-center justify-center mb-6 z-10">
                <span className="text-xl font-bold text-[var(--accent)]">{step.num}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[var(--foreground)]">{step.title}</h3>
              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">{step.description}</p>
            </div>
          ))}
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-[var(--border)] z-0" />
        </div>
      </div>
    </section>
  );
}
