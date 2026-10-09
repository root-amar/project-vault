import { ArrowRight, Code, BookOpen, Headset, Settings2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-24 pb-20 md:pt-32 md:pb-32 border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-[var(--foreground)] leading-tight">
            Your project idea.<br />
            Built properly.
          </h1>
          
          <p className="mt-4 text-lg md:text-xl text-[var(--muted-foreground)] max-w-2xl mb-10 leading-relaxed">
            Browse ready-to-build academic projects or tell us what you're working on. We'll help you turn the idea into a complete, documented project.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a 
              href="#projects"
              className="inline-flex items-center justify-center gap-2 bg-[var(--foreground)] text-[var(--background)] px-8 py-4 rounded-md font-semibold text-base transition-transform active:scale-95"
            >
              Browse Projects
            </a>
            <a 
              href="#configurator"
              className="inline-flex items-center justify-center gap-2 bg-[var(--surface)] text-[var(--foreground)] border border-[var(--border)] px-8 py-4 rounded-md font-semibold text-base hover:bg-[var(--muted)] transition-colors active:scale-95"
            >
              Request Custom Project
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-[var(--border)]">
            <div className="flex flex-col gap-2">
              <Code className="w-5 h-5 text-[var(--muted-foreground)]" />
              <span className="text-sm font-medium text-[var(--foreground)]">Source Code</span>
            </div>
            <div className="flex flex-col gap-2">
              <BookOpen className="w-5 h-5 text-[var(--muted-foreground)]" />
              <span className="text-sm font-medium text-[var(--foreground)]">Documentation</span>
            </div>
            <div className="flex flex-col gap-2">
              <Headset className="w-5 h-5 text-[var(--muted-foreground)]" />
              <span className="text-sm font-medium text-[var(--foreground)]">Demo Support</span>
            </div>
            <div className="flex flex-col gap-2">
              <Settings2 className="w-5 h-5 text-[var(--muted-foreground)]" />
              <span className="text-sm font-medium text-[var(--foreground)]">Custom Builds</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
