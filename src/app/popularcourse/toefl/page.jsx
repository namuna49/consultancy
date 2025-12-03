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
        Master TOEFL & SAT with{" "}
        <span className="text-red-600">Expert Instructors</span>
      </h2>

      <p className="text-gray-700 mb-4 leading-relaxed text-lg">
        Prepare for TOEFL and SAT with our comprehensive training program.
        Improve your reading, writing, listening, speaking, and analytical
        skills using real exam patterns and personalized coaching.
      </p>

      <p className="text-gray-700 text-lg leading-relaxed">
        Our experienced mentors provide structured lessons, mock tests, and
        proven strategies that ensure excellent performance in both exams.
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
        src="/toefl.png"
        alt="TOEFL & SAT Preparation"
        className="rounded-3xl object-cover w-full h-full shadow-xl border"
      />
    </motion.div>
  </div>
);

const TOEFL = () => {
  const highlights = [
    {
      title: "Expert Trainers",
      desc: "Learn from certified TOEFL & SAT instructors with proven success records.",
    },
    {
      title: "Flexible Schedules",
      desc: "Choose morning, afternoon, evening, or weekend batches.",
    },
    {
      title: "Full-Length Mock Tests",
      desc: "Practice with real exam-style mock tests to monitor your progress.",
    },
    {
      title: "Personalized Feedback",
      desc: "Get detailed evaluation and improvement strategies for each module.",
    },
    {
      title: "Premium Study Materials",
      desc: "Access curated notes, practice sets, and high-quality learning resources.",
    },
    {
      title: "Speaking & Writing Practice",
      desc: "Daily speaking sessions and writing corrections by certified mentors.",
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
        TOEFL & SAT Preparation Course
      </motion.h1>

      <IntroSection />
      <CourseHighlights highlights={highlights} />
    </div>
  );
};

export default TOEFL;
