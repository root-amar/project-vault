import { ArrowRight, Code2 } from "lucide-react";

const PROJECTS = [
  {
    title: "AI Resume Analyzer",
    category: "AI / Machine Learning",
    tags: ["Python", "FastAPI", "React", "NLP"],
    description: "Analyze resumes and extract skills using NLP to match with job descriptions.",
    difficulty: "Intermediate",
    price: "₹12,000",
  },
  {
    title: "Decentralized Voting System",
    category: "Blockchain",
    tags: ["Solidity", "Next.js", "Ethereum"],
    description: "A secure, transparent voting application using smart contracts on the Ethereum testnet.",
    difficulty: "Advanced",
    price: "₹18,500",
  },
  {
    title: "IoT Smart Agriculture",
    category: "Internet of Things",
    tags: ["C++", "ESP32", "AWS IoT"],
    description: "Real-time soil moisture and temperature monitoring dashboard with automated irrigation triggers.",
    difficulty: "Intermediate",
    price: "₹14,000",
  },
  {
    title: "E-Commerce Microservices",
    category: "Web Development",
    tags: ["Node.js", "Docker", "PostgreSQL"],
    description: "A scalable backend architecture for an e-commerce platform using microservices pattern.",
    difficulty: "Advanced",
    price: "₹22,000",
  },
];

export default function ProjectVault() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-[var(--foreground)]">Featured Projects</h2>
            <p className="text-lg text-[var(--muted-foreground)]">
              Browse our catalog of ready-to-build projects. Each project comes with complete source code, documentation, and a setup guide.
            </p>
          </div>
          <a 
            href="#categories" 
            className="inline-flex items-center gap-2 text-[var(--accent)] font-medium hover:underline"
          >
            View all categories
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <div 
              key={idx}
              className="flex flex-col bg-[var(--surface)] border border-[var(--border)] rounded-xl overflow-hidden hover:border-[var(--muted-foreground)] transition-colors"
            >
              <div className="p-6 md:p-8 flex-1">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                    {project.category}
                  </span>
                  <span className="text-sm font-medium text-[var(--muted-foreground)]">
                    {project.difficulty}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-[var(--foreground)]">{project.title}</h3>
                <p className="text-[var(--muted-foreground)] mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-[var(--background)] border border-[var(--border)] rounded-full text-xs font-medium text-[var(--foreground)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="px-6 md:px-8 py-4 bg-[var(--background)] border-t border-[var(--border)] flex items-center justify-between">
                <span className="font-bold text-lg text-[var(--foreground)]">{project.price}</span>
                <button className="text-sm font-medium text-[var(--accent)] hover:underline flex items-center gap-1">
                  View Project <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
