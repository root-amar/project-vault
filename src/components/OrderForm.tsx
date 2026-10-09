"use client";

import { useState } from "react";
import { Send, AlertCircle, CheckCircle2 } from "lucide-react";

export default function OrderForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    projectType: "academic",
    idea: "",
    requirements: "",
    deadline: "",
    budget: ""
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    // Simulate validation and API call
    setTimeout(() => {
      if (!formData.name || !formData.email || !formData.idea) {
        setStatus("error");
        setErrorMessage("Please fill in all required fields.");
        return;
      }
      
      setStatus("success");
      setFormData({
        name: "", email: "", phone: "", course: "", projectType: "academic", idea: "", requirements: "", deadline: "", budget: ""
      });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="order" className="py-20 md:py-32 bg-[var(--background)]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-[var(--foreground)]">Request a Custom Project</h2>
          <p className="text-lg text-[var(--muted-foreground)]">Tell us your project idea, requirements, and deadline. We'll provide a concrete proposal.</p>
        </div>

        {status === "success" ? (
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900 rounded-xl p-8 text-center flex flex-col items-center">
            <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
            <h3 className="text-2xl font-bold text-green-700 dark:text-green-400 mb-2">Request Submitted Successfully</h3>
            <p className="text-green-600 dark:text-green-500">We have received your project brief. Our team will review it and get back to you within 24 hours.</p>
            <button 
              onClick={() => setStatus("idle")}
              className="mt-8 bg-[var(--foreground)] text-[var(--background)] px-6 py-3 rounded-md font-semibold hover:bg-[var(--foreground)]/90 transition-colors"
            >
              Submit Another Request
            </button>
          </div>
        ) : (
          <form 
            onSubmit={handleSubmit} 
            className="space-y-8 bg-[var(--surface)] p-8 md:p-12 rounded-2xl border border-[var(--border)]"
          >
            {status === "error" && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900 text-red-600 dark:text-red-400 p-4 rounded-lg flex items-center gap-3">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <p className="text-sm font-medium">{errorMessage}</p>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[var(--foreground)]">Full Name <span className="text-red-500">*</span></label>
                <input 
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-[var(--background)] border border-[var(--border)] rounded-md px-4 py-3 focus:outline-none focus:border-[var(--accent)] transition-colors text-[var(--foreground)] placeholder-[var(--muted-foreground)]"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[var(--foreground)]">Email Address <span className="text-red-500">*</span></label>
                <input 
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[var(--background)] border border-[var(--border)] rounded-md px-4 py-3 focus:outline-none focus:border-[var(--accent)] transition-colors text-[var(--foreground)] placeholder-[var(--muted-foreground)]"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[var(--foreground)]">Phone / WhatsApp</label>
                <input 
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-[var(--background)] border border-[var(--border)] rounded-md px-4 py-3 focus:outline-none focus:border-[var(--accent)] transition-colors text-[var(--foreground)] placeholder-[var(--muted-foreground)]"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[var(--foreground)]">Course / University</label>
                <input 
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full bg-[var(--background)] border border-[var(--border)] rounded-md px-4 py-3 focus:outline-none focus:border-[var(--accent)] transition-colors text-[var(--foreground)] placeholder-[var(--muted-foreground)]"
                  placeholder="e.g. MS Computer Science"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-[var(--foreground)]">Project Type <span className="text-red-500">*</span></label>
              <select 
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full bg-[var(--background)] border border-[var(--border)] rounded-md px-4 py-3 focus:outline-none focus:border-[var(--accent)] transition-colors text-[var(--foreground)]"
              >
                <option value="academic">Academic / University Project</option>
                <option value="commercial">Commercial / MVP</option>
                <option value="research">Research / Thesis Implementation</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-[var(--foreground)]">Project Idea <span className="text-red-500">*</span></label>
              <input 
                required
                name="idea"
                value={formData.idea}
                onChange={handleChange}
                className="w-full bg-[var(--background)] border border-[var(--border)] rounded-md px-4 py-3 focus:outline-none focus:border-[var(--accent)] transition-colors text-[var(--foreground)] placeholder-[var(--muted-foreground)]"
                placeholder="Briefly describe what you want to build"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-[var(--foreground)]">Detailed Requirements</label>
              <textarea 
                name="requirements"
                value={formData.requirements}
                onChange={handleChange}
                rows={4}
                className="w-full bg-[var(--background)] border border-[var(--border)] rounded-md px-4 py-3 focus:outline-none focus:border-[var(--accent)] transition-colors text-[var(--foreground)] placeholder-[var(--muted-foreground)] resize-none"
                placeholder="List specific features, tech stack preferences, or deliverables..."
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[var(--foreground)]">Deadline <span className="text-red-500">*</span></label>
                <input 
                  required
                  type="date"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleChange}
                  className="w-full bg-[var(--background)] border border-[var(--border)] rounded-md px-4 py-3 focus:outline-none focus:border-[var(--accent)] transition-colors text-[var(--foreground)]"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[var(--foreground)]">Estimated Budget</label>
                <input 
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full bg-[var(--background)] border border-[var(--border)] rounded-md px-4 py-3 focus:outline-none focus:border-[var(--accent)] transition-colors text-[var(--foreground)] placeholder-[var(--muted-foreground)]"
                  placeholder="e.g. ₹15,000 or $200"
                />
              </div>
            </div>

            <button 
              type="submit"
              disabled={status === "submitting"}
              className="w-full flex items-center justify-center gap-2 bg-[var(--accent)] text-[var(--accent-foreground)] px-8 py-4 rounded-md font-semibold text-lg hover:bg-[var(--accent)]/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? "Submitting..." : "Submit Project Request"}
              {status !== "submitting" && <Send className="w-5 h-5" />}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
