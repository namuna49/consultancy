"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// ---------- Course Highlights ----------
const CourseHighlights = ({ highlights }) => (
  <motion.div
    className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-16 px-4"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{
      visible: { transition: { staggerChildren: 0.2 } },
    }}
  >
    {highlights.map((item, idx) => (
      <motion.div
        key={idx}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
        whileHover={{ scale: 1.05 }}
        className="bg-white rounded-2xl p-8 shadow-lg border hover:shadow-2xl transition-all duration-300 cursor-pointer"
      >
        <motion.div
          whileHover={{ y: -5, scale: 1.1 }}
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center justify-center mb-4"
        >
          <Image
            src={item.icon || "/highlight.png"}
            alt={item.title}
            width={50}
            height={50}
          />
        </motion.div>
        <h3 className="text-2xl font-semibold text-blue-700 mb-3">
          {item.title}
        </h3>
        <p className="text-gray-600 leading-relaxed">{item.desc}</p>
      </motion.div>
    ))}
  </motion.div>
);

// ---------- Intro Section ----------
const IntroSection = () => (
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 my-16 px-4 relative">
    {/* Floating Background Circles */}
    <motion.div
      className="absolute -top-10 -left-10 w-64 h-64 bg-cyan-300/20 blur-[80px] rounded-full"
      animate={{ y: [0, 20, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute bottom-0 right-0 w-72 h-72 bg-blue-400/10 blur-[100px] rounded-full"
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />

    {/* Left Content */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="lg:w-1/2 relative z-10"
    >
      <h2 className="text-4xl sm:text-5xl font-bold text-blue-900 leading-tight mb-6">
        Prepare for IELTS with{" "}
        <span className="text-red-600">Top Instructors</span>
      </h2>

      <p className="text-gray-700 mb-4 leading-relaxed text-lg">
        Achieve your dream score with our comprehensive IELTS training. We focus
        on all four components — Listening, Reading, Writing, and Speaking —
        using real exam patterns, personalized coaching, and proven strategies.
      </p>

      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        Our expert mentors have years of experience guiding students to success
        in the USA, UK, Australia, Canada, and other countries.
      </p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300"
      >
        Contact Us
      </motion.button>
    </motion.div>

    {/* Right Image */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="lg:w-1/2 w-full h-80 sm:h-[420px] relative z-10"
    >
      <Image
        src="/ielts.png"
        alt="IELTS Preparation"
        fill
        className="rounded-3xl object-cover shadow-xl border"
      />
    </motion.div>
  </div>
);

// ---------- Why Choose Us ----------
const WhyChooseUs = () => {
  const reasons = [
    "Proven success in top international exams",
    "Small batch sizes for personalized attention",
    "Experienced and certified instructors",
    "Flexible schedules to suit your routine",
  ];

  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-16 relative">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-blue-900 mb-10"
      >
        Why Choose Us?
      </motion.h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        {reasons.map((reason, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition-all duration-300"
          >
            <p className="text-gray-700 font-medium">{reason}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const SuccessStories = () => {
  const stories = [
    {
      name: "Sadikshya Gyawali",
      country: "UK",
      score: "8.5",
      img: "/student1.jpg",
    },
    {
      name: "Namuna Acharya",
      country: "USA",
      score: "8.0",
      img: "/student2.jpg",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-blue-900 mb-10"
      >
        Success Stories
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        {stories.map((story, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.3 }}
            className="flex flex-col items-center text-center bg-blue-50 p-6 rounded-2xl shadow hover:shadow-xl transition-all duration-300"
          >
            <Image
              src={story.img}
              alt={story.name}
              width={100}
              height={100}
              className="rounded-full mb-4 shadow-md"
            />
            <h3 className="text-xl font-semibold text-blue-700">
              {story.name}
            </h3>
            <p className="text-gray-600">
              {story.country} | IELTS Score: {story.score}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// ---------- IELTS Page ----------
const IELTS = () => {
  const highlights = [
    {
      title: "Expert Trainers",
      desc: "Learn from certified IELTS instructors with years of experience and excellent results.",
      icon: "/ielts.png",
    },
    {
      title: "Flexible Schedules",
      desc: "Choose from morning, afternoon, evening, or weekend classes according to your routine.",
      icon: "/ielts.png",
    },
    {
      title: "Regular Mock Tests",
      desc: "Practice with exam-style mock tests to track improvement and boost confidence.",
      icon: "/ielts.png",
    },
    {
      title: "Personalized Feedback",
      desc: "Get detailed guidance and error correction for writing and speaking modules.",
      icon: "/ielts.png",
    },
    {
      title: "Study Materials",
      desc: "Access premium notes, practice sheets, and curated learning resources.",
      icon: "/ielts.png",
    },
    {
      title: "Speaking Practice",
      desc: "Daily speaking sessions with trainers to enhance fluency and pronunciation.",
      icon: "/ielts.png",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white px-10">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl sm:text-6xl font-bold text-center text-blue-900 py-16"
      >
        IELTS Preparation Course
      </motion.h1>

      <IntroSection />
      <CourseHighlights highlights={highlights} />
      <WhyChooseUs />
      <SuccessStories />
    </div>
  );
};

export default IELTS;
