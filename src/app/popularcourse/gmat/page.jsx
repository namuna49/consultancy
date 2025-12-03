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

const IntroSection = () => (
  <div className=" px-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 my-16 px-4">
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="lg:w-1/2"
    >
      <h2 className="text-4xl sm:text-5xl font-bold text-blue-900 leading-tight mb-6">
        Master the <span className="text-yellow-600">GMAT Exam</span>
      </h2>

      <p className="text-gray-700 mb-4 leading-relaxed text-lg">
        Our GMAT preparation program is tailored for ambitious business school
        aspirants. Strengthen your Quantitative, Verbal, Integrated Reasoning,
        and Analytical Writing skills with expert guidance and structured
        learning.
      </p>

      <p className="text-gray-700 text-lg leading-relaxed">
        With focused practice sessions, strategic exam tips, and flexible
        schedules, you can confidently achieve your best GMAT score.
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
        src="/gmat.png"
        alt="GMAT Training"
        className="rounded-3xl object-cover w-full h-full shadow-xl border"
      />
    </motion.div>
  </div>
);

// ---------- Main GMAT Page ----------
const GMAT = () => {
  const highlights = [
    {
      title: "Expert GMAT Trainers",
      desc: "Learn from certified professionals with years of experience and high student success rates.",
    },
    {
      title: "Flexible Study Schedule",
      desc: "Choose from morning, evening, or weekend batches to fit your routine.",
    },
    {
      title: "Full-Length Practice Tests",
      desc: "Take regular mock exams based on the real GMAT format to measure your progress.",
    },
    {
      title: "Personalized Feedback",
      desc: "Receive detailed analysis and personalized suggestions for improvement.",
    },
    {
      title: "Advanced Study Materials",
      desc: "Access curated notes, practice questions, and sample AWA responses.",
    },
    {
      title: "One-on-One Support",
      desc: "Get individual mentoring and strategy planning to maximize your GMAT score.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl sm:text-6xl font-bold text-center text-blue-900 mb-10"
      >
        GMAT Preparation Course
      </motion.h1>

      <IntroSection />
      <CourseHighlights highlights={highlights} />
    </div>
  );
};

export default GMAT;
