import { Code, Cpu, Shield, Smartphone, Server, LineChart } from "lucide-react";

export default function Categories() {
  const categories = [
    { name: "Web Development", icon: Code },
    { name: "AI / ML", icon: Cpu },
    { name: "Cybersecurity", icon: Shield },
    { name: "Mobile Apps", icon: Smartphone },
    { name: "Systems / Backend", icon: Server },
    { name: "Data Science", icon: LineChart },
  ];

  return (
    <section id="categories" className="py-20 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-8 text-[var(--foreground)]">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <a 
                key={idx}
                href="#projects"
                className="flex flex-col items-center justify-center p-6 bg-[var(--surface)] border border-[var(--border)] rounded-xl hover:border-[var(--accent)] hover:bg-[var(--accent)]/5 transition-colors gap-3"
              >
                <Icon className="w-8 h-8 text-[var(--muted-foreground)]" />
                <span className="text-sm font-semibold text-[var(--foreground)] text-center">{cat.name}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
