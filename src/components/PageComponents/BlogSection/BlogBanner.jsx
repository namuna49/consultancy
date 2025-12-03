"use client";
import React from "react";

const BlogBanner = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(30deg, transparent 49%, white 49%, white 51%, transparent 51%)`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4">
          Study Abroad
          <span className="block text-cyan-400 mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold">
            Insights & Stories
          </span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
          Your trusted source for expert advice, student experiences, and the
          latest trends in international education.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {[
            "Admission Tips",
            "Student Stories",
            "Country Guides",
            "Scholarships",
            "Visa Advice",
          ].map((category, index) => (
            <span
              key={index}
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-5 py-2 rounded-full text-sm sm:text-base font-medium hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              {category}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogBanner;
