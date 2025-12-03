"use client";

import React from "react";
import { motion } from "framer-motion";

// ---------- Course Highlights ----------
const CourseHighlights = ({ highlights }) => (
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-16 px-4">
    {highlights.map((item, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: idx * 0.2 }}
        className="bg-white rounded-2xl p-8 shadow-lg border hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
      >
        <h3 className="text-2xl font-semibold text-blue-700 mb-3">
          {item.title}
        </h3>
        <p className="text-gray-600 leading-relaxed">{item.desc}</p>
      </motion.div>
    ))}
  </div>
);

// ---------- Intro Section ----------
const IntroSection = () => (
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 my-16 px-4">
    {/* Left Content */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="lg:w-1/2"
    >
      <h2 className="text-4xl sm:text-5xl font-bold text-blue-900 leading-tight mb-6">
        Master the GRE with{" "}
        <span className="text-green-600">Expert Guidance</span>
      </h2>

      <p className="text-gray-700 mb-4 leading-relaxed text-lg">
        Our GRE preparation program helps you excel in Verbal Reasoning,
        Quantitative Reasoning, and Analytical Writing. Get personalized
        coaching, proven test strategies, and structured practice sessions to
        achieve your target score.
      </p>

      <p className="text-gray-700 text-lg leading-relaxed">
        Learn from experienced instructors who have guided countless students to
        top universities across the USA and beyond.
      </p>
    </motion.div>

    {/* Right Image */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="lg:w-1/2 w-full h-80 sm:h-[420px] relative"
    >
      <img
        src="/gre.png"
        alt="GRE Training"
        className="rounded-3xl object-cover w-full h-full shadow-xl border"
      />
    </motion.div>
  </div>
);

const GRE = () => {
  const highlights = [
    {
      title: "Expert Trainers",
      desc: "Learn from certified GRE instructors with proven success results.",
    },
    {
      title: "Flexible Schedules",
      desc: "Choose from morning, evening, or weekend batches that fit your routine.",
    },
    {
      title: "Full-Length Mock Tests",
      desc: "Regular mock exams designed to improve speed, accuracy, and confidence.",
    },
    {
      title: "Concept Mastery",
      desc: "Strengthen vocabulary, reasoning, math skills, and analytical writing.",
    },
    {
      title: "Premium Study Materials",
      desc: "Access high-quality notes, practice questions, and official-style resources.",
    },
    {
      title: "One-on-One Support",
      desc: "Get personalized doubt-clearing sessions and performance feedback.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white px-10 py-16">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl sm:text-6xl font-bold text-center text-blue-900 mb-10"
      >
        GRE Training Program
      </motion.h1>

      <IntroSection />
      <CourseHighlights highlights={highlights} />
    </div>
  );
};

export default GRE;
