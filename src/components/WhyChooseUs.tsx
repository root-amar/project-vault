import { CheckCircle2 } from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    {
      title: "Clear scope and requirements",
      description: "We define exactly what will be built before any payment is made."
    },
    {
      title: "Source code included",
      description: "You receive the full, well-commented source code for the project."
    },
    {
      title: "Comprehensive documentation",
      description: "Detailed setup instructions and architectural overview provided."
    },
    {
      title: "Custom requirements",
      description: "Every project is built to match your specific constraints and stack."
    },
    {
      title: "Project explanation session",
      description: "A walkthrough of the codebase so you understand how it works."
    },
    {
      title: "Support after delivery",
      description: "We fix any bugs or setup issues that occur after handover."
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-[var(--foreground)]">Why Choose Us</h2>
          <p className="text-lg text-[var(--muted-foreground)]">Professional engineering standards applied to academic projects.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((point, idx) => (
            <div key={idx} className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-[var(--accent)] flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg mb-2 text-[var(--foreground)]">{point.title}</h3>
                <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
