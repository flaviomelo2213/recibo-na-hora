"use client";

import { useState } from "react";

type Faq = {
  question: string;
  answer: string;
};

type FaqItemProps = {
  question: string;
  answer: string;
};

function FaqItem({ question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 py-3">
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        className="w-full text-left flex items-center justify-between gap-3"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-slate-800">{question}</span>
        <span className="text-slate-500">{isOpen ? "−" : "+"}</span>
      </button>

      {isOpen && (
        <p className="mt-2 text-slate-600 leading-relaxed">{answer}</p>
      )}
    </div>
  );
}

type FaqAccordionProps = {
  faqs: Faq[];
  title?: string;
};

export default function FaqAccordion({
  faqs,
  title = "Perguntas Frequentes",
}: FaqAccordionProps) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="max-w-4xl mx-auto mt-16">
      <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">
        {title}
      </h2>

      <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
        {faqs.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
}