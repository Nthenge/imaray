"use client";
import { useState } from "react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What are my services?",
      answer:
        "I offer a range of professional services including Virtual Assistance, Administrative and Executive Administrative Support, Human Resources (HR), Editing, Graphic Design, Research, Data Entry, Bookkeeping, and Project Management. My goal is to streamline operations, enhance productivity, and provide reliable support tailored to your business needs.",
    },
    {
      question: "How can you reach me?",
      answer:
        "You can easily reach me through multiple channels whether it's LinkedIn for professional connections, email for detailed inquiries, or phone for direct conversations. I’m also just a message away via the contact form below. Feel free to reach out through whichever method works best for you. I'm always open to connecting and ready to respond.",
    },
    {
      question: "How long before I respond?",
      answer:
        "I strive to respond promptly to all inquiries. For phone conversations, you can expect an immediate response during working hours. For messages sent via email, LinkedIn, or the contact form below, I typically respond within approximately 3 hours. Your time is valuable, and I’m committed to staying accessible and responsive.",
    },
  ];

  return (
    <section
      id="faq"
      className="min-h-screen flex flex-col justify-center py-20 px-6 md:px-12 bg-[var(--background-gradient)] text-white"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">
          FAQ
        </h1>
        <div className="w-20 h-1 bg-[#EFA48B] mx-auto mt-4 rounded-full"></div>
        <p className="mt-4 text-lg opacity-90">
          Frequently asked questions, get knowledge beforehand
        </p>
      </div>

      {/* Accordion */}
      <div className="max-w-3xl mx-auto w-full space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-lg hover:bg-white/15 transition duration-200"
              >
                {faq.question}
                <span
                  className={`transform transition-transform duration-300 ${
                    isOpen ? "rotate-45 text-[#EFA48B]" : "rotate-0"
                  }`}
                >
                  +
                </span>
              </button>

              {/* Animated Answer */}
              <div
                className={`transition-all duration-500 ease-in-out ${
                  isOpen ? "max-h-96 opacity-100 py-4 px-6" : "max-h-0 opacity-0 px-6"
                } overflow-hidden`}
              >
                <p className="text-base opacity-90">{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
