import Hero from "@/components/Hero";
import ProjectVault from "@/components/ProjectVault";
import Categories from "@/components/Categories";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQ from "@/components/FAQ";
import Configurator from "@/components/Configurator";
import OrderForm from "@/components/OrderForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] selection:bg-[var(--accent)] selection:text-[var(--accent-foreground)]">
      {/* Navigation / Header */}
      <header className="border-b border-[var(--border)] sticky top-0 bg-[var(--background)] z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-extrabold text-xl tracking-tight text-[var(--foreground)]">
            NexusDev
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--muted-foreground)]">
            <a href="#projects" className="hover:text-[var(--foreground)] transition-colors">Projects</a>
            <a href="#categories" className="hover:text-[var(--foreground)] transition-colors">Categories</a>
            <a href="#how-it-works" className="hover:text-[var(--foreground)] transition-colors">How It Works</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href="#" className="hidden sm:block text-sm font-medium text-[var(--foreground)] hover:underline">Sign In</a>
            <a href="#order" className="px-5 py-2 bg-[var(--foreground)] text-[var(--background)] text-sm font-semibold rounded-md hover:bg-[var(--foreground)]/90 transition-colors">
              Request Project
            </a>
          </div>
        </div>
      </header>

      <Hero />
      <ProjectVault />
      <Categories />
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <WhyChooseUs />
      
      {/* Custom Project CTA Section */}
      <section className="py-20 bg-[var(--accent)] text-[var(--accent-foreground)] text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Can't find what you're looking for?</h2>
          <p className="text-lg opacity-90 mb-8">
            Tell us your project idea, requirements and deadline. We'll help you figure out the right approach.
          </p>
          <a 
            href="#order"
            className="inline-flex items-center justify-center bg-[var(--background)] text-[var(--foreground)] px-8 py-4 rounded-md font-bold hover:bg-opacity-90 transition-opacity"
          >
            Request a Custom Project
          </a>
        </div>
      </section>

      <Configurator />
      <FAQ />
      <OrderForm />

      <footer className="bg-[var(--surface)] border-t border-[var(--border)] py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[var(--muted-foreground)]">
          <div className="font-bold text-[var(--foreground)]">NexusDev</div>
          <p>© 2026 NexusDev. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[var(--foreground)]">Terms</a>
            <a href="#" className="hover:text-[var(--foreground)]">Privacy</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
