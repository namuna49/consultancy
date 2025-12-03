"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "framer-motion";

// CountUp Component
const CountUp = ({ value, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = typeof value === "string" ? 0 : value;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  if (typeof value === "string") {
    return <span ref={ref}>{value}</span>;
  }

  return (
    <span ref={ref}>
      {Math.floor(count)}
      {suffix}
    </span>
  );
};

// Animated Stat Card Component
const AnimatedStatCard = ({ number, label, index, isPercentage = false }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div
      ref={ref}
      className="relative group"
      style={{
        animationDelay: `${index * 200}ms`,
      }}
    >
      <div
        className={`
          relative p-6 rounded-2xl bg-white/80 backdrop-blur-md border border-white/20 
          shadow-lg hover:shadow-2xl transition-all duration-700 transform
          ${
            isInView
              ? "translate-y-0 opacity-100 scale-100"
              : "translate-y-10 opacity-0 scale-95"
          }
          group-hover:scale-105 group-hover:bg-white/90
          overflow-hidden
        `}
      >
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-cyan-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Floating Elements */}
        <div className="absolute top-2 right-2 w-4 h-4 bg-blue-200/30 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
        <div className="absolute bottom-2 left-2 w-3 h-3 bg-cyan-200/30 rounded-full group-hover:scale-150 transition-transform duration-500 delay-100"></div>

        {/* Content */}
        <div className="relative z-10 text-center">
          <div className="flex items-center justify-center gap-1 mb-2">
            <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              <CountUp
                value={number}
                duration={2500}
                suffix={isPercentage ? "%" : "+"}
              />
            </div>
            {isPercentage && (
              <span className="text-2xl font-bold text-gray-700">%</span>
            )}
          </div>

          <div className="text-sm lg:text-base text-gray-600 font-medium tracking-wide">
            {label}
          </div>
        </div>

        {/* Animated Border */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-cyan-500/0 to-indigo-500/0 group-hover:from-blue-500/20 group-hover:via-cyan-500/20 group-hover:to-indigo-500/20 transition-all duration-500 -z-10"></div>
      </div>
    </div>
  );
};

const ContactHero = () => {
  return (
    <section className="relative bg-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-cyan-50/80"></div>

      {/* Animated Background Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200/40 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-cyan-200/30 rounded-full blur-2xl animate-float delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-100/50 rounded-full blur-lg animate-float delay-500"></div>
      <div className="absolute top-20 right-20 w-24 h-24 bg-indigo-100/40 rounded-full blur-xl animate-float delay-1500"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(rgba(99,102,241,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.3)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-blue-200 rounded-full px-4 py-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full animate-pulse"></span>
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Expert Guidance Available
              </span>
            </div>

            {/* Animated Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="block animate-fade-in-up">Get in Touch</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mt-2 lg:mt-3 animate-fade-in-up delay-200">
                  Start Your Journey
                </span>
              </h1>
            </div>

            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-fade-in-up delay-300">
              Ready to explore your study abroad options? Our education experts
              are here to provide personalized guidance and support throughout
              your journey.
            </p>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-md mx-auto lg:mx-0 animate-fade-in-up delay-400">
              {/* Call Us Box */}
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/80 backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 group border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Call Us</p>
                  <p className="font-bold text-gray-900 text-lg">
                    +1 (555) 123-4567
                  </p>
                </div>
              </div>

              {/* Email Us Box */}
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/80 backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 group border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-6 h-6 text-cyan-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm text-gray-500 font-medium">Email Us</p>
                  <p className="font-bold text-gray-900 text-lg truncate">
                    info@nextconsultancy.com
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-fade-in-up delay-500">
              <Link
                href="#contact-form"
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center group relative overflow-hidden"
              >
                <span className="relative z-10">Contact Our Team</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>

              <a
                href="mailto:info@nextconsultancy.com"
                className="w-full sm:w-auto text-gray-700 hover:text-gray-900 font-semibold py-4 px-8 border border-gray-300 rounded-xl hover:border-gray-400 hover:bg-gray-50/80 transition-all duration-300 transform hover:scale-105 text-center group backdrop-blur-sm"
              >
                Send Email
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full h-64 sm:h-80 lg:h-96 xl:h-[500px] animate-fade-in-up delay-300">
            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl group">
              <Image
                src="/contactt.png"
                alt="Education Consultants"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

              {/* Success Rate Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-emerald-200 rounded-full flex items-center justify-center shadow-lg">
                    <svg
                      className="w-7 h-7 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">
                      <CountUp value={98} duration={3000} />% Success Rate
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Student Visa Approval
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="mt-16 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {[
            { number: 24, label: "Support Available", isString: true },
            { number: 50, label: "Countries Covered" },
            { number: 10000, label: "Students Helped" },
            { number: 15, label: "Years Experience" },
          ].map((stat, idx) => (
            <AnimatedStatCard
              key={idx}
              number={stat.isString ? "24/7" : stat.number}
              label={stat.label}
              index={idx}
              isPercentage={false}
            />
          ))}
        </div>
      </div>

      {/* Add CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default ContactHero;
