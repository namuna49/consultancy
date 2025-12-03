"use client";
import React from "react";

const ServicesCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#0066A6] to-[#0099CC] text-white px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Ready to Start Your Journey Abroad?
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Join our expert-guided courses and take the first step towards
          achieving your academic dreams. Our team is ready to assist you every
          step of the way.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/contact"
            className="bg-white text-[#0077b6] font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
          >
            Contact Us
          </a>
          <a
            href="/"
            className="bg-transparent border-2 border-white font-semibold py-3 px-6 rounded-full hover:bg-white hover:text-[#0077b6] transition duration-300"
          >
            View Courses
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;
