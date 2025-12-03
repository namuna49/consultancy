"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ThreeSteps() {
  const [activeStep, setActiveStep] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);

  const steps = [
    {
      number: "01",
      title: "Personalized Counseling",
      description:
        "We analyze your academic profile and career goals to match you with the perfect universities and programs worldwide.",
      details: [
        "Comprehensive profile assessment",
        "University and program matching",
        "Scholarship opportunity evaluation",
        "Career pathway planning",
      ],
    },
    {
      number: "02",
      title: "Application Management",
      description:
        "Our experts guide you through every document, essay, and application requirement with precision and attention to detail.",
      details: [
        "Document preparation & verification",
        "SOP and essay refinement",
        "Application submission",
        "Interview preparation",
      ],
    },
    {
      number: "03",
      title: "Visa & Pre-Departure",
      description:
        "Complete support from visa documentation to pre-departure briefings, ensuring a smooth transition to your new academic journey.",
      details: [
        "Visa documentation support",
        "Financial proof preparation",
        "Accommodation assistance",
        "Pre-departure orientation",
      ],
    },
  ];

  // Function to download the actual PDF file
  const downloadBrochure = () => {
    setIsDownloading(true);

    try {
      // Create a download link for the PDF file in your public folder
      const link = document.createElement("a");
      link.href = "/downloads/study-abroad-brochure.pdf"; // Path to your PDF in public folder
      link.download = "Global_Education_Consultants_Brochure.pdf"; // Custom filename for download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading brochure:", error);
      alert("There was an error downloading the brochure. Please try again.");
    } finally {
      setTimeout(() => {
        setIsDownloading(false);
      }, 1000);
    }
  };

  // Function to open the PDF in a new tab
  const viewBrochure = () => {
    window.open("/downloads/study-abroad-brochure.pdf", "_blank");
  };

  return (
    <section className="w-full py-32 bg-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-gray-400"></div>
            <span className="text-sm font-medium text-gray-500 tracking-wider uppercase">
              PROCESS
            </span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-gray-400"></div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-3xl font-light text-center text-gray-900 mb-6"
          >
            <span className="font-normal">Three Steps to</span>
            <br />
            <span className="font-medium">Your International Education</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 text-center max-w-2xl mx-auto leading-relaxed"
          >
            A structured, transparent process designed for success at every
            stage of your study abroad journey.
          </motion.p>
        </div>

        {/* Step Navigation */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-6 mb-12">
            {steps.map((step, index) => (
              <motion.button
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveStep(index)}
                className={`flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-300 ${
                  activeStep === index
                    ? "bg-gray-900 text-white shadow-xl"
                    : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full ${
                    activeStep === index
                      ? "bg-white text-gray-900"
                      : "bg-gray-200 text-gray-700"
                  } font-medium`}
                >
                  {step.number}
                </div>
                <span className="text-lg font-medium">{step.title}</span>
              </motion.button>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="relative max-w-2xl mx-auto mb-8">
            <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-600 to-violet-600"
                initial={{ width: "33%" }}
                animate={{ width: `${(activeStep + 1) * 33.33}%` }}
                transition={{ duration: 0.6 }}
              />
            </div>
            <div className="flex justify-between mt-2 text-sm text-gray-500">
              <span>Step {activeStep + 1} of 3</span>
              <span>{(activeStep + 1) * 33}% Complete</span>
            </div>
          </div>
        </div>

        {/* Step Content */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: activeStep === index ? 1 : 0,
                y: activeStep === index ? 0 : 20,
                display: activeStep === index ? "block" : "none",
              }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100"
            >
              <div className="flex items-start gap-8">
                {/* Step Number */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-violet-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-white">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                    {step.title}
                  </h3>

                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Details Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {step.details.map((detail, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                      >
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700">{detail}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        Estimated Timeline
                      </p>
                      <p className="text-sm text-gray-600">
                        This step typically takes 2-4 weeks to complete
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex justify-between items-center mt-12 max-w-4xl mx-auto"
        >
          <button
            onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
            disabled={activeStep === 0}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
              activeStep === 0
                ? "text-gray-400 cursor-not-allowed"
                : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            }`}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Previous Step
          </button>

          <div className="flex items-center gap-6">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  activeStep === index
                    ? "bg-gray-900 w-4"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => setActiveStep((prev) => Math.min(2, prev + 1))}
            disabled={activeStep === 2}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
              activeStep === 2
                ? "text-gray-400 cursor-not-allowed"
                : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            }`}
          >
            Next Step
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-24 text-center"
        >
          <div className="inline-block p-1 bg-gradient-to-r rounded-2xl">
            <div className="bg-white rounded-xl p-8 md:p-8">
              <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                Ready to Begin Your Journey?
              </h3>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Schedule a complimentary consultation with one of our education
                specialists.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <button
                  onClick={() => {
                    alert(
                      "Booking consultation - This would open a booking modal in a real application."
                    );
                  }}
                  className="px-8 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors shadow-lg flex items-center justify-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Book Free Consultation
                </button>
              </div>

              {/* PDF Download Section */}
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-violet-50 rounded-xl border border-blue-100">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="text-left">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <h4 className="text-lg font-bold text-gray-900">
                        Download Our Brochure
                      </h4>
                    </div>
                    <p className="text-sm text-gray-600">
                      Get detailed information about our services, success
                      stories, and university partnerships.
                    </p>
                    <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      <span>
                        PDF • 2.4 MB • Updated:{" "}
                        {new Date().toLocaleDateString()}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={viewBrochure}
                      className="px-4 py-2 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors flex items-center gap-2"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                      Preview
                    </button>

                    <button
                      onClick={downloadBrochure}
                      disabled={isDownloading}
                      className="px-4 py-2 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-medium rounded-lg hover:shadow-lg transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isDownloading ? (
                        <>
                          <svg
                            className="animate-spin h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Downloading...
                        </>
                      ) : (
                        <>
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                          Download PDF
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* What's Included */}
                <div className="mt-4 pt-4 border-t border-blue-200">
                  <p className="text-sm font-medium text-gray-700 mb-2">
                    Includes:
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                    <div className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span>Complete Service Guide</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 bg-violet-500 rounded-full"></div>
                      <span>University Partnerships</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span>Success Stories</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                      <span>Contact Information</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-500 mt-6">
                98% of our students receive admission to their top-choice
                universities
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
