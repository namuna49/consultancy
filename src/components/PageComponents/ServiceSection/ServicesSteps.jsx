"use client";
import React from "react";
import { FaPlane } from "react-icons/fa";

const ServicesSteps = () => {
  const steps = [
    {
      number: "01",
      title: "Personalized Counseling",
      description:
        "Get matched with countries, universities and programs that suit your academic profile and ambitions.",
    },
    {
      number: "02",
      title: "Documents & Application",
      description:
        "We'll help you compile, write, and refine everything needed to apply.",
    },
    {
      number: "03",
      title: "Visa Guidance & Beyond",
      description:
        "We assist with visa interviews, financial prep, even your packing checklist.",
    },
  ];

  return (
    <section className="py-18 bg-white px-6 relative overflow-hidden">
      {/* Circular Spiral Background */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-5">
        <div className="absolute inset-0 border-4 border-[#0066A6] rounded-full animate-spin-slow"></div>
        <div
          className="absolute inset-8 border-4 border-[#0066A6] rounded-full animate-spin-slow"
          style={{ animationDirection: "reverse", animationDuration: "15s" }}
        ></div>
        <div
          className="absolute inset-16 border-4 border-[#0066A6] rounded-full animate-spin-slow"
          style={{ animationDuration: "20s" }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            we help realize your <span className="text-[#0066A6]">Dream</span>{" "}
            in three steps
          </h2>
        </div>

        {/* Steps in Circular Layout */}
        <div className="relative">
          {/* Connecting Lines */}
          <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80">
            <div className="absolute inset-0 border-2 border-dashed border-gray-300 rounded-full"></div>
          </div>

          {/* Airplane on Orbit Line - Adjusted to touch the circles */}
          <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px]">
            <div className="absolute inset-0 animate-orbit">
              <div className="w-12 h-12 flex items-center justify-center">
                <div className="w-10 h-10 bg-[#0066A6] rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                  <FaPlane className="text-white text-sm transform rotate-45" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Step 01 - Top Left */}
            <div className="relative group lg:flex lg:flex-col lg:items-end lg:text-right lg:mt-0">
              <div className="flex items-center gap-6 mb-8 lg:flex-row-reverse">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#0066A6] to-blue-700 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 border-2 border-white">
                    <span className="text-2xl font-black text-white">01</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4 lg:max-w-md">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                  Personalized Counseling
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Get matched with countries, universities and programs that
                  suit your academic profile and ambitions.
                </p>
              </div>
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 to-white rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-105"></div>
            </div>

            {/* Step 02 - Bottom Center */}
            <div className="relative group lg:flex lg:flex-col lg:items-center lg:text-center lg:mt-48">
              <div className="flex items-center gap-6 mb-8 lg:justify-center">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#01314f] to-blue-700 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 border-2 border-white">
                    <span className="text-2xl font-black text-white">02</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4 lg:max-w-md">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                  Documents & Application
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We'll help you compile, write, and refine everything needed to
                  apply.
                </p>
              </div>
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 to-white rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-105"></div>
            </div>

            {/* Step 03 - Top Right */}
            <div className="relative group lg:flex lg:flex-col lg:items-start lg:text-left lg:mt-0">
              <div className="flex items-center gap-6 mb-8">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#0066A6] to-blue-700 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 border-2 border-white">
                    <span className="text-2xl font-black text-white">03</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4 lg:max-w-md">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                  Visa Guidance & Beyond
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We assist with visa interviews, financial prep, even your
                  packing checklist.
                </p>
              </div>
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 to-white rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-105"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes orbit {
          0% {
            transform: rotate(0deg) translateX(200px) rotate(0deg);
          }
          33% {
            transform: rotate(120deg) translateX(200px) rotate(-120deg);
          }
          66% {
            transform: rotate(240deg) translateX(200px) rotate(-240deg);
          }
          100% {
            transform: rotate(360deg) translateX(200px) rotate(-360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-orbit {
          animation: orbit 12s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ServicesSteps;
