"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaSearch, FaCheck, FaUniversity } from "react-icons/fa";

const Universities = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("All");

  const countries = [
    {
      name: "United States",
      flag: "/Usa.png",
      universities: 250,
      description:
        "Home to Ivy League and top research institutions with world-class education.",
      popularUniversities: ["Harvard University", "Stanford University", "MIT"],
      slug: "united-states",
    },
    {
      name: "United Kingdom",
      flag: "/ukflag.png",
      universities: 150,
      description:
        "Renowned for historic universities and academic excellence.",
      popularUniversities: [
        "University of Oxford",
        "University of Cambridge",
        "Imperial College London",
      ],
      slug: "united-kingdom",
    },
    {
      name: "Canada",
      flag: "/canadaflag.png",
      universities: 120,
      description:
        "High-quality education with excellent post-study work opportunities.",
      popularUniversities: [
        "University of Toronto",
        "University of British Columbia",
        "McGill University",
      ],
      slug: "canada",
    },
    {
      name: "Australia",
      flag: "/australiaaflag.png",
      universities: 100,
      description:
        "World-class education system with exceptional lifestyle quality.",
      popularUniversities: [
        "University of Melbourne",
        "Australian National University",
        "University of Sydney",
      ],
      slug: "australia",
    },
    {
      name: "Germany",
      flag: "/germanyflag.png",
      universities: 80,
      description: "Tuition-free education at prestigious public universities.",
      popularUniversities: [
        "Technical University of Munich",
        "Heidelberg University",
        "LMU Munich",
      ],
      slug: "germany",
    },
    {
      name: "France",
      flag: "/franceflag.png",
      universities: 70,
      description: "Rich cultural heritage with affordable higher education.",
      popularUniversities: [
        "Sorbonne University",
        "École Polytechnique",
        "PSL University",
      ],
      slug: "france",
    },
  ];

  const filteredCountries = countries.filter((country) => {
    const matchesSearch =
      country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      country.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCountry =
      selectedCountry === "All" || country.name === selectedCountry;
    return matchesSearch && matchesCountry;
  });

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#f8f9fa] px-6 py-3 rounded-lg text-lg font-medium mb-6 border border-[#e9ecef]">
            <FaUniversity className="w-5 h-5 text-[#2c5aa0]" />
            <span className="text-[#495057]">
              Global Education Destinations
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#212529] mb-6 leading-tight">
            Explore <span className="text-[#2c5aa0]">World-Class</span>{" "}
            Universities
          </h1>
          <p className="text-xl text-[#6c757d] max-w-3xl mx-auto leading-relaxed">
            Discover premier universities across the globe and find your perfect
            academic destination
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <FaSearch className="h-5 w-5 text-[#6c757d]" />
              </div>
              <input
                type="text"
                placeholder="Search countries or universities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-6 py-4 border border-[#dee2e6] rounded-lg focus:ring-2 focus:ring-[#2c5aa0] focus:border-[#2c5aa0] bg-white text-[#495057] placeholder-[#6c757d] transition-all duration-200 shadow-sm"
              />
            </div>

            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="px-6 py-4 border border-[#dee2e6] rounded-lg focus:ring-2 focus:ring-[#2c5aa0] focus:border-[#2c5aa0] bg-white text-[#495057] transition-all duration-200 shadow-sm cursor-pointer"
            >
              <option value="All">All Countries</option>
              {countries.map((country) => (
                <option key={country.name} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-[#e7f1ff] text-[#2c5aa0] px-4 py-2 rounded-full text-sm font-medium">
              <span>🎯</span>
              Found {filteredCountries.length} of {countries.length} countries
            </div>
          </div>
        </div>

        {/* Countries Grid - Matching Goreto's Card Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
          {filteredCountries.map((country) => (
            <div
              key={country.name}
              className="group bg-white border border-[#e9ecef] rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden hover:-translate-y-1"
            >
              <div className="p-6">
                {/* Country Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 relative rounded-lg overflow-hidden border-2 border-white shadow-md">
                      <Image
                        src={country.flag}
                        alt={`${country.name} Flag`}
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#212529] mb-2">
                      {country.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-2 bg-[#e7f1ff] text-[#2c5aa0] px-3 py-1 rounded-full text-sm font-semibold">
                        <FaUniversity className="w-3 h-3" />
                        {country.universities}+ Universities
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[#495057] text-base leading-relaxed mb-6">
                  {country.description}
                </p>

                {/* Popular Universities */}
                <div className="mb-6">
                  <h4 className="text-[#212529] font-semibold text-lg mb-4 border-b border-[#e9ecef] pb-2">
                    Top Universities
                  </h4>
                  <ul className="space-y-3">
                    {country.popularUniversities.map((university, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-[#495057] text-base"
                      >
                        <FaCheck className="w-4 h-4 text-[#28a745] mr-3 flex-shrink-0" />
                        <span>{university}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Link
                  href={`/studyabroad/${country.slug}`}
                  className="group/btn inline-flex items-center justify-center gap-3 w-full bg-[#2c5aa0] hover:bg-[#1e4a8a] text-white font-semibold py-3.5 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  <span>Explore Universities</span>
                  <FaArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* No Results State */}
        {filteredCountries.length === 0 && (
          <div className="text-center py-20">
            <div className="w-24 h-24 mx-auto mb-6 bg-[#f8f9fa] rounded-2xl flex items-center justify-center border border-[#e9ecef]">
              <FaSearch className="w-10 h-10 text-[#6c757d]" />
            </div>
            <h3 className="text-2xl font-bold text-[#212529] mb-3">
              No countries found
            </h3>
            <p className="text-[#6c757d] text-lg max-w-md mx-auto">
              Try adjusting your search terms to discover amazing study
              destinations
            </p>
          </div>
        )}

        {/* CTA Section - Matching Goreto's Style */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-[#1e3a8a] to-[#2c5aa0] rounded-2xl p-12 text-center text-white shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Academic Journey?
            </h2>
            <p className="text-[#e9ecef] text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Get expert guidance from our experienced counselors and make your
              study abroad dreams a reality
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link
                href="/contact"
                className="bg-white text-[#2c5aa0] hover:bg-[#f8f9fa] font-bold py-4 px-10 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl text-lg"
              >
                Get Free Assessment
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-[#2c5aa0] font-bold py-4 px-10 rounded-lg transition-all duration-200 text-lg"
              >
                Speak with Advisor
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Universities;
