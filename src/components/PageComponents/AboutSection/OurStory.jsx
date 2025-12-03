"use client";
import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const OurStory = () => {
  return (
    <section id="our-story" className="py-20 md:py-24 bg-gray-50 px-4 md:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-8">
        <div className="md:w-1/2 flex justify-center md:justify-start">
          <Image
            src="/support.png"
            alt="Our Story"
            width={600}
            height={400}
            className="rounded-xl object-cover shadow-xl"
          />
        </div>

        <div className="md:w-1/2 space-y-6 md:space-y-8 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <FaStar className="text-[#0066A6] text-xl md:text-2xl" />
            <h2 className="text-3xl md:text-4xl font-bold font-mono text-[#0066A6]">
              Who We Are
            </h2>
          </div>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            NExt began with a vision to make studying abroad transparent,
            accessible, and achievable for every student in Nepal. Our dedicated
            team of experts provides honest guidance, helping students choose
            the right universities, prepare documents, and navigate visa
            processes smoothly.
          </p>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Over the years, we have guided hundreds of students to global
            universities, built strong partnerships with renowned institutions,
            and established ourselves as a trusted name in education consulting.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
