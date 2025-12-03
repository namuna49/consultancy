"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

function Intro() {
  return (
    <section className="relative py-16 px-6 bg-gradient-to-br from-blue-50 via-white to-cyan-50 overflow-hidden">
      {/* Background glowing orbs */}
      <div className="absolute -top-10 -left-20 w-72 h-72 bg-blue-300/30 blur-[90px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-400/20 blur-[120px] rounded-full"></div>

      <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Image */}
        <div className="md:w-1/2">
          <div className="overflow-hidden rounded-2xl shadow-xl bg-white/40 backdrop-blur-lg border border-white/20">
            <Image
              src="/homeintro.png"
              alt="Consultancy"
              width={700}
              height={500}
              className="object-cover w-full h-full rounded-2xl hover:scale-105 transition-all duration-500"
            />
          </div>
        </div>

        <div className="md:w-1/2 text-center md:text-left">
          <div className="mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-blue-900 leading-tight">
              Welcome to NExt Consultancy
            </h1>
          </div>

          <div className="space-y-4">
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              We provide{" "}
              <span className="font-semibold text-gray-900">
                professional guidance
              </span>{" "}
              to students aiming to study abroad — from selecting the right
              university to preparing documents and securing visas.
            </p>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              As a leading education service provider in Nepal, we have over a
              decade of experience assisting students for studies in{" "}
              <span className="text-[#0066A6] font-semibold">
                Australia, New Zealand, UK, USA, and Canada
              </span>
              . We also offer top-quality preparation classes for{" "}
              <span className="text-[#0066A6] font-semibold">
                IELTS, PTE, GMAT, TOEFL, and SAT
              </span>
              .
            </p>
          </div>

          {/* Button */}
          <div className="mt-6">
            <Link href="/about">
              <button className="bg-gradient-to-r from-[#0066A6] to-[#0099CC] hover:from-[#005799] hover:to-[#0077AA] text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
