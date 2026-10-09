"use client";

import { useState, useEffect } from "react";
import { Check, Cpu, Globe, Smartphone, Database } from "lucide-react";

const LEVELS = [
  { id: "btech", label: "BTech", basePrice: 200 },
  { id: "mtech", label: "MTech", basePrice: 400 },
  { id: "phd", label: "PhD", basePrice: 800 },
  { id: "commercial", label: "Commercial / Startup", basePrice: 1500 },
];

const DOMAINS = [
  { id: "ai", label: "AI / ML", icon: Cpu, multiplier: 1.5 },
  { id: "web", label: "Full-Stack Web", icon: Globe, multiplier: 1.2 },
  { id: "mobile", label: "Mobile Apps", icon: Smartphone, multiplier: 1.3 },
  { id: "systems", label: "Systems / Blockchain", icon: Database, multiplier: 1.6 },
];

const ADDONS = [
  { id: "source", label: "Source Code Delivery", price: 50 },
  { id: "doc", label: "Documentation / Report", price: 100 },
  { id: "ppt", label: "PPT Presentation", price: 50 },
  { id: "viva", label: "Viva / Defense Training", price: 150 },
  { id: "express", label: "Express 2-Week Delivery", price: 300 },
];

export default function Configurator() {
  const [level, setLevel] = useState(LEVELS[0]);
  const [domain, setDomain] = useState(DOMAINS[0]);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let price = level.basePrice * domain.multiplier;
    selectedAddons.forEach(id => {
      const addon = ADDONS.find(a => a.id === id);
      if (addon) price += addon.price;
    });
    setTotal(price);
  }, [level, domain, selectedAddons]);

  const toggleAddon = (id: string) => {
    setSelectedAddons(prev => 
      prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
    );
  };

  return (
    <section id="configurator" className="py-20 md:py-32 bg-[var(--surface)] border-y border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-[var(--foreground)]">Project Configurator</h2>
          <p className="text-lg text-[var(--muted-foreground)]">Select your project requirements to see an estimated starting price.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            
            {/* Project Level */}
            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-[var(--foreground)]">
                <span className="w-8 h-8 rounded-full bg-[var(--background)] border border-[var(--border)] text-[var(--muted-foreground)] flex items-center justify-center text-sm font-bold">1</span>
                Project Type
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {LEVELS.map(l => (
                  <button
                    key={l.id}
                    onClick={() => setLevel(l)}
                    className={`p-4 rounded-xl border transition-all duration-200 text-left ${level.id === l.id ? 'border-[var(--accent)] bg-[var(--accent)]/5' : 'border-[var(--border)] hover:border-[var(--muted-foreground)] bg-[var(--background)]'}`}
                  >
                    <div className={`font-medium ${level.id === l.id ? 'text-[var(--accent)]' : 'text-[var(--foreground)]'}`}>{l.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Domain */}
            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-[var(--foreground)]">
                <span className="w-8 h-8 rounded-full bg-[var(--background)] border border-[var(--border)] text-[var(--muted-foreground)] flex items-center justify-center text-sm font-bold">2</span>
                Technology Domain
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {DOMAINS.map(d => {
                  const Icon = d.icon;
                  return (
                    <button
                      key={d.id}
                      onClick={() => setDomain(d)}
                      className={`p-5 rounded-xl border flex items-center gap-4 transition-all duration-200 ${domain.id === d.id ? 'border-[var(--accent)] bg-[var(--accent)]/5' : 'border-[var(--border)] hover:border-[var(--muted-foreground)] bg-[var(--background)]'}`}
                    >
                      <Icon className={`w-6 h-6 flex-shrink-0 ${domain.id === d.id ? 'text-[var(--accent)]' : 'text-[var(--muted-foreground)]'}`} />
                      <div className={`font-medium text-left ${domain.id === d.id ? 'text-[var(--accent)]' : 'text-[var(--foreground)]'}`}>{d.label}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Add-ons */}
            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-[var(--foreground)]">
                <span className="w-8 h-8 rounded-full bg-[var(--background)] border border-[var(--border)] text-[var(--muted-foreground)] flex items-center justify-center text-sm font-bold">3</span>
                Add-ons
              </h3>
              <div className="space-y-3">
                {ADDONS.map(addon => (
                  <button
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all duration-200 ${selectedAddons.includes(addon.id) ? 'border-[var(--accent)] bg-[var(--accent)]/5' : 'border-[var(--border)] hover:border-[var(--muted-foreground)] bg-[var(--background)]'}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${selectedAddons.includes(addon.id) ? 'bg-[var(--accent)] border-[var(--accent)]' : 'border-[var(--muted-foreground)]'}`}>
                        {selectedAddons.includes(addon.id) && <Check className="w-3 h-3 text-white" />}
                      </div>
                      <span className={`font-medium ${selectedAddons.includes(addon.id) ? 'text-[var(--accent)]' : 'text-[var(--foreground)]'}`}>{addon.label}</span>
                    </div>
                    <span className="font-medium text-[var(--muted-foreground)]">+${addon.price}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Pricing Summary Widget */}
          <div className="relative">
            <div className="sticky top-24 bg-[var(--background)] p-8 rounded-2xl border border-[var(--border)] shadow-sm">
              
              <h3 className="text-xl font-semibold mb-6 text-[var(--foreground)] border-b border-[var(--border)] pb-4">Your Project</h3>
              
              <div className="space-y-4 mb-8 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-[var(--muted-foreground)]">Level</span>
                  <span className="font-medium text-[var(--foreground)]">{level.label}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[var(--muted-foreground)]">Technology</span>
                  <span className="font-medium text-[var(--foreground)]">{domain.label}</span>
                </div>
                
                {selectedAddons.length > 0 && (
                  <div className="pt-4 mt-4 border-t border-[var(--border)]">
                    <span className="text-[var(--muted-foreground)] block mb-3 font-medium">Selected Add-ons</span>
                    <div className="space-y-2">
                      {selectedAddons.map(id => {
                        const addon = ADDONS.find(a => a.id === id);
                        return (
                          <div key={id} className="flex justify-between items-center text-[var(--foreground)]">
                            <span>{addon?.label}</span>
                            <span className="text-[var(--muted-foreground)]">+${addon?.price}</span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-6 border-t border-[var(--border)] mb-8">
                <div className="flex justify-between items-end">
                  <span className="text-lg font-semibold text-[var(--foreground)]">Estimated Total</span>
                  <span className="text-4xl font-bold text-[var(--foreground)]">
                    ${total.toFixed(0)}
                  </span>
                </div>
                <p className="text-xs text-[var(--muted-foreground)] mt-2 text-right">This is an estimated starting price.</p>
              </div>

              <a 
                href="#order" 
                className="w-full flex items-center justify-center bg-[var(--foreground)] text-[var(--background)] py-4 rounded-xl font-semibold hover:bg-[var(--foreground)]/90 transition-colors"
              >
                Request Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
