"use client";

import React from "react";
import { motion } from "framer-motion";

const CourseHighlights = ({ highlights }) => (
  <div className=" px-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-16 px-4">
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
        Ace Your <span className="text-pink-600">PTE Exam</span>
      </h2>

      <p className="text-gray-700 mb-4 leading-relaxed text-lg">
        Our PTE coaching program is specially designed for students aiming to
        achieve high scores with smart strategies and targeted practice. We
        focus on all core components — Speaking, Writing, Reading, and
        Listening.
      </p>

      <p className="text-gray-700 text-lg leading-relaxed">
        With expert guidance, hands-on practice tests, and personalized
        feedback, you can confidently prepare for your PTE exam and boost your
        chances of success.
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
        src="/pte.png"
        alt="PTE Coaching"
        className="rounded-3xl object-cover w-full h-full shadow-xl border"
      />
    </motion.div>
  </div>
);

// ---------- Main PTE Page ----------
const PTE = () => {
  const highlights = [
    {
      title: "Expert PTE Trainers",
      desc: "Learn from certified language instructors with years of experience and excellent results.",
    },
    {
      title: "Flexible Class Timings",
      desc: "Choose morning, evening, or weekend batches that fit your schedule.",
    },
    {
      title: "Full-Length Practice Tests",
      desc: "Practice using PTE-style mock tests to measure your progress accurately.",
    },
    {
      title: "AI-Based Speaking Practice",
      desc: "Improve pronunciation and fluency with advanced AI-driven speaking tools.",
    },
    {
      title: "Premium Study Materials",
      desc: "Get access to curated notes, templates, and exam-based practice sets.",
    },
    {
      title: "One-on-One Support",
      desc: "Receive personalized feedback and improvement plans tailored to your skill level.",
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
        PTE Coaching Course
      </motion.h1>

      <IntroSection />
      <CourseHighlights highlights={highlights} />
    </div>
  );
};

export default PTE;
