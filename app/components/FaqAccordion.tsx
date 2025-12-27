
'use client';

import { useState } from 'react';

// Define the type for a single FAQ item's props
interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-800 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <i className={`fa-solid fa-chevron-down transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}></i>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen mt-4' : 'max-h-0'}`}>
        <p className="text-gray-600 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

// Define the type for the props of the main accordion component
interface FaqAccordionProps {
  faqs: {
    question: string;
    answer: string;
  }[];
}

const FaqAccordion = ({ faqs }: FaqAccordionProps) => {
  if (!faqs || faqs.length === 0) {
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto mt-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Perguntas Frequentes</h2>
        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
            ))}
        </div>
    </div>
  );
};

export default FaqAccordion;
