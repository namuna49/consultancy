"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ServiceBanner = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#00395f] via-[#005f8f] to-[#0096c7] px-6 py-28 text-white">
      <div className="absolute inset-0 opacity-20 mix-blend-soft-light">
        <Image
          src="/services.png"
          alt="Services Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-cyan-400/30 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-blue-500/30 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl border border-white/20 bg-white/10 p-10 shadow-2xl backdrop-blur-md"
        >
          <h1 className="mb-6 text-4xl font-extrabold leading-tight drop-shadow-lg md:text-6xl">
            Guiding You Towards
            <span className="block text-cyan-200">
              Global Education Success
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg font-light text-gray-200/90 md:text-xl">
            Explore our professional services — from language test preparation
            to personalized visa consulting — designed to make your study abroad
            journey smooth and successful.
          </p>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="#our-services"
            className="inline-block rounded-full bg-white px-10 py-4 font-semibold text-[#0077b6] shadow-xl transition-all duration-300 hover:bg-gray-100 hover:shadow-2xl"
          >
            Explore Services
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceBanner;
