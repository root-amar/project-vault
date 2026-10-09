"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What do I receive with a project?",
    answer: "You receive the complete source code, a comprehensive documentation/setup guide, and a walkthrough session to ensure you understand how the code works."
  },
  {
    question: "Can I request changes?",
    answer: "Yes. Minor changes and bug fixes are included. Significant scope changes after development begins may require an adjusted timeline and budget."
  },
  {
    question: "Can I request a custom project?",
    answer: "Absolutely. Use the order form to provide your idea, requirements, and deadline. We will review it and provide a technical proposal and quote."
  },
  {
    question: "What technologies do you support?",
    answer: "We support a wide range of modern technologies including React, Next.js, Node.js, Python, TensorFlow, C++, Solidity, and major cloud platforms."
  },
  {
    question: "How does the ordering process work?",
    answer: "Once you submit a request, we review the requirements and provide a quote. If accepted, development begins and we provide milestone updates until final delivery."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-32 bg-[var(--surface)] border-t border-[var(--border)]">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight mb-10 text-[var(--foreground)] text-center">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="border border-[var(--border)] rounded-lg bg-[var(--background)] overflow-hidden"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-5 text-left font-semibold text-[var(--foreground)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              >
                {faq.question}
                <ChevronDown className={`w-5 h-5 text-[var(--muted-foreground)] transition-transform duration-200 ${openIndex === idx ? "rotate-180" : ""}`} />
              </button>
              
              <div 
                className={`px-5 text-sm text-[var(--muted-foreground)] transition-all duration-300 ease-in-out ${openIndex === idx ? "pb-5 max-h-40 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
