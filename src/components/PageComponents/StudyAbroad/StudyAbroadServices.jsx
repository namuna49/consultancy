"use client";
import React from "react";

const services = [
  {
    id: 1,
    title: "University Selection",
    description:
      "Get guidance to choose the best universities matching your profile and goals.",
  },
  {
    id: 2,
    title: "Visa Assistance",
    description:
      "Complete support throughout the visa application and approval process.",
  },
  {
    id: 3,
    title: "Test Preparation",
    description: "IELTS, PTE, GRE, GMAT, SAT coaching to achieve top scores.",
  },
  {
    id: 4,
    title: "Scholarship Guidance",
    description:
      "Discover scholarships and financial aid opportunities to fund your education.",
  },
];

const StudyAbroadServices = () => {
  return (
    <section className="py-20 bg-gray-50 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0066A6] mb-8">
          Our Study Abroad Support Services
        </h2>
        <p className="text-gray-600 text-base md:text-lg mb-8 max-w-3xl mx-auto">
          We provide end-to-end support to help you prepare, apply, and succeed
          in studying abroad.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold text-lg">
                  {service.title.charAt(0)}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudyAbroadServices;
