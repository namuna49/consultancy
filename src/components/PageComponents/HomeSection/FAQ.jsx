"use client";
import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    id: 1,
    question: "How do I enroll in a course?",
    answer:
      "You can enroll online by contacting us through our website or visiting our office. Our team will guide you through everything!",
  },
  {
    id: 2,
    question: "Do you provide online classes?",
    answer:
      "Yes! We provide online and in-person classes for IELTS, PTE, GMAT, SAT, and more.",
  },
  {
    id: 3,
    question: "Can you help with university applications abroad?",
    answer:
      "Absolutely! We help with choosing universities, preparing documents, and submitting applications.",
  },
  {
    id: 4,
    question: "What is the fee structure for the courses?",
    answer:
      "Course fees depend on the program. Contact us for a detailed fee breakdown anytime!",
  },
  {
    id: 5,
    question: "What support do you offer for visa applications?",
    answer:
      "We offer complete visa support including document preparation and interview coaching!",
  },
];

const FAQ = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute -top-16 left-10 w-64 h-64 bg-blue-200/30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-6 w-72 h-72 bg-indigo-300/25 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl">
            Here are the most common questions people ask — answered simply and
            clearly!
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full"
            >
              <div
                onClick={() => toggleFAQ(faq.id)}
                className={`
                  p-6 rounded-2xl border-2 bg-white/80 backdrop-blur-lg shadow-sm cursor-pointer
                  transition-all duration-300 ease-in-out
                  ${
                    activeId === faq.id
                      ? "border-blue-300 shadow-lg bg-white/95"
                      : "border-gray-200 hover:border-blue-200 hover:shadow-md"
                  }
                `}
              >
                <div className="flex justify-between items-center gap-4">
                  <h3 className="text-lg font-semibold text-gray-800 flex-1">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: activeId === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 w-6 h-6 flex items-center justify-center"
                  >
                    <svg
                      className={`w-5 h-5 transition-colors ${
                        activeId === faq.id ? "text-blue-500" : "text-gray-400"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </motion.div>
                </div>

                <AnimatePresence>
                  {activeId === faq.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <p className="text-gray-700 leading-relaxed text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center mt-16"
        >
          <div className="p-8 bg-white/80 backdrop-blur-xl border-2 border-blue-200 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              We're here to help you with any questions you may have.
            </p>
            <Link href="/contact">
              <button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Contact Us Today
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
