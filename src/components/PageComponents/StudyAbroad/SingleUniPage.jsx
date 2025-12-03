"use client";
import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  FaCalendarAlt,
  FaClock,
  FaArrowLeft,
  FaShareAlt,
  FaUserCircle,
  FaTag,
  FaArrowRight,
  FaCheckCircle,
  FaShareAltSquare,
  FaFacebookF,
} from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";

const SingleUniPage = () => {
  const { slug } = useParams();

  const countriesData = {
    "united-states": {
      id: 1,
      name: "United States",
      flag: "/Usa.png",
      universities: 250,
      description: "Home to Ivy League and top research institutions.",
      popularUniversities: ["Harvard University", "Stanford University", "MIT"],
      content: [
        { type: "h2", text: "Study in the United States" },
        {
          type: "p",
          text: "The United States is one of the most popular destinations for international students, offering world-class education and diverse cultural experiences.",
        },
        { type: "h2", text: "Top Universities" },
        {
          type: "p",
          text: "The US is home to prestigious institutions like Harvard, MIT, Stanford, and many other top-ranked universities across various disciplines.",
        },
        { type: "h2", text: "Education System" },
        {
          type: "p",
          text: "The US education system offers flexibility with a wide range of programs, majors, and research opportunities at undergraduate and graduate levels.",
        },
        { type: "h2", text: "Career Opportunities" },
        {
          type: "p",
          text: "Graduates from US universities have excellent career prospects with opportunities for Optional Practical Training (OPT) and H-1B visa pathways.",
        },
        { type: "h2", text: "Application Process" },
        {
          type: "p",
          text: "Applications typically require transcripts, test scores (SAT/ACT/GRE/GMAT), letters of recommendation, and personal statements.",
        },
      ],
      tags: ["USA", "Ivy League", "Research"],
      author: "Education Advisor",
      authorRole: "Study Abroad Expert",
      date: "2024",
      readTime: "8 min read",
    },
    "united-kingdom": {
      id: 2,
      name: "United Kingdom",
      flag: "/ukflag.png",
      universities: 150,
      description: "Renowned for historic universities and quality education.",
      popularUniversities: [
        "University of Oxford",
        "University of Cambridge",
        "Imperial College London",
      ],
      content: [
        { type: "h2", text: "Study in the United Kingdom" },
        {
          type: "p",
          text: "The UK offers a rich academic tradition with some of the world's oldest and most prestigious universities.",
        },
        { type: "h2", text: "Top Universities" },
        {
          type: "p",
          text: "Oxford, Cambridge, Imperial College London, and other Russell Group universities provide exceptional education.",
        },
        { type: "h2", text: "Education System" },
        {
          type: "p",
          text: "UK degrees are typically shorter in duration (3 years for bachelor's, 1 year for master's) and focused on specialized study.",
        },
        { type: "h2", text: "Career Opportunities" },
        {
          type: "p",
          text: "Graduate Route visa allows international students to work in the UK for 2 years after completing their studies.",
        },
      ],
      tags: ["UK", "Russell Group", "Quality Education"],
      author: "Education Advisor",
      authorRole: "Study Abroad Expert",
      date: "2024",
      readTime: "6 min read",
    },
    canada: {
      id: 3,
      name: "Canada",
      flag: "/canadaflag.png",
      universities: 120,
      description: "High-quality education with post-study work opportunities.",
      popularUniversities: [
        "University of Toronto",
        "University of British Columbia",
        "McGill University",
      ],
      content: [
        { type: "h2", text: "Study in Canada" },
        {
          type: "p",
          text: "Canada offers world-class education in a multicultural environment with excellent post-study work opportunities.",
        },
        { type: "h2", text: "Top Universities" },
        {
          type: "p",
          text: "Canadian universities like University of Toronto, UBC, and McGill are consistently ranked among the world's best.",
        },
        { type: "h2", text: "Education System" },
        {
          type: "p",
          text: "Canada provides high-quality education with affordable tuition fees compared to other popular study destinations.",
        },
        { type: "h2", text: "Career Opportunities" },
        {
          type: "p",
          text: "Post-Graduation Work Permit (PGWP) allows graduates to gain valuable Canadian work experience.",
        },
      ],
      tags: ["Canada", "PGWP", "Multicultural"],
      author: "Education Advisor",
      authorRole: "Study Abroad Expert",
      date: "2024",
      readTime: "7 min read",
    },
    australia: {
      id: 4,
      name: "Australia",
      flag: "/australiaaflag.png",
      universities: 110,
      description:
        "Globally recognized degrees with a vibrant student lifestyle.",
      popularUniversities: [
        "University of Melbourne",
        "Australian National University",
        "University of Sydney",
      ],
      content: [
        { type: "h2", text: "Study in Australia" },
        {
          type: "p",
          text: "Australia is known for its world-class education system, research opportunities, and welcoming multicultural society.",
        },
        { type: "h2", text: "Top Universities" },
        {
          type: "p",
          text: "Universities like the University of Melbourne, ANU, and the University of Sydney are globally recognized for academic excellence and innovation.",
        },
        { type: "h2", text: "Education System" },
        {
          type: "p",
          text: "Australian universities offer flexible study options, strong industry connections, and practical learning experiences.",
        },
        { type: "h2", text: "Career Opportunities" },
        {
          type: "p",
          text: "Australia's Temporary Graduate Visa (subclass 485) allows students to work after graduation, gaining valuable global work experience.",
        },
      ],
      tags: ["Australia", "PR Pathway", "Global Education"],
      author: "Education Advisor",
      authorRole: "Study Abroad Expert",
      date: "2024",
      readTime: "7 min read",
    },
    germany: {
      id: 5,
      name: "Germany",
      flag: "/germanyflag.png",
      universities: 150,
      description: "World-leading education with little to no tuition fees.",
      popularUniversities: [
        "Technical University of Munich",
        "Heidelberg University",
        "Ludwig Maximilian University of Munich",
      ],
      content: [
        { type: "h2", text: "Study in Germany" },
        {
          type: "p",
          text: "Germany offers top-quality education, especially in engineering, science, and technology — often with no tuition fees for international students.",
        },
        { type: "h2", text: "Top Universities" },
        {
          type: "p",
          text: "Institutions like TUM, Heidelberg, and LMU Munich are renowned for cutting-edge research and academic excellence.",
        },
        { type: "h2", text: "Education System" },
        {
          type: "p",
          text: "Germany's public universities are tuition-free and provide a wide range of English-taught programs, making them accessible to students worldwide.",
        },
        { type: "h2", text: "Career Opportunities" },
        {
          type: "p",
          text: "With a strong economy and post-study work options, Germany offers outstanding opportunities for international graduates to build their careers.",
        },
      ],
      tags: ["Germany", "No Tuition Fees", "Engineering"],
      author: "Education Advisor",
      authorRole: "Study Abroad Expert",
      date: "2024",
      readTime: "7 min read",
    },
    france: {
      id: 6,
      name: "France",
      flag: "/franceflag.png",
      universities: 90,
      description: "Prestigious education and a rich cultural experience.",
      popularUniversities: [
        "Sorbonne University",
        "École Polytechnique",
        "HEC Paris",
      ],
      content: [
        { type: "h2", text: "Study in France" },
        {
          type: "p",
          text: "France combines high-quality education with art, culture, and global opportunities for international students.",
        },
        { type: "h2", text: "Top Universities" },
        {
          type: "p",
          text: "Leading institutions like Sorbonne University, École Polytechnique, and HEC Paris are recognized for their academic excellence and innovation.",
        },
        { type: "h2", text: "Education System" },
        {
          type: "p",
          text: "France offers diverse programs in English and French, supported by affordable tuition and strong government scholarships for international students.",
        },
        { type: "h2", text: "Career Opportunities" },
        {
          type: "p",
          text: "France's post-study visa allows graduates to gain experience in Europe's dynamic job market and build international networks.",
        },
      ],
      tags: ["France", "Cultural Hub", "Scholarships"],
      author: "Education Advisor",
      authorRole: "Study Abroad Expert",
      date: "2024",
      readTime: "7 min read",
    },
  };

  const country = countriesData[slug];

  const renderStyledContent = useMemo(() => {
    if (!country?.content) return null;

    return country.content.map((item, index) => {
      if (item.type === "h2") {
        return (
          <h2
            key={index}
            className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-l-4 border-blue-600 pl-3"
          >
            {item.text}
          </h2>
        );
      }
      if (item.type === "p") {
        return (
          <div
            key={index}
            className="flex items-start gap-3 mb-4 text-gray-700 leading-relaxed"
          >
            <FaCheckCircle className="text-blue-600 mt-1 w-5 h-5 flex-shrink-0" />
            <p>{item.text}</p>
          </div>
        );
      }
      return null;
    });
  }, [country]);

  if (!country) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Country Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            The country data you're looking for doesn't exist.
          </p>
          <Link
            href="/studyabroad"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            <FaArrowLeft />
            Back to Universities
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <article className="max-w-5xl mx-auto px-6 py-12">
        <nav className="mb-10">
          <Link
            href="/studyabroad"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition"
          >
            <FaArrowLeft />
            Back to Universities
          </Link>
        </nav>

        <header className="text-center mb-12">
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {country.tags.map((tag, i) => (
              <span
                key={i}
                className="flex items-center gap-1 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
              >
                <FaTag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Study in {country.name}
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {country.description}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-600">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                <FaUserCircle className="w-8 h-8 text-gray-500" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-900">{country.author}</p>
                <p className="text-sm">{country.authorRole}</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <FaCalendarAlt className="w-4 h-4" />
                <span>{country.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="w-4 h-4" />
                <span>{country.readTime}</span>
              </div>
            </div>
          </div>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden shadow-lg relative w-full h-72">
          <Image
            src={country.flag}
            alt={`${country.name} Flag`}
            fill
            className="object-cover brightness-75"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
            <h2 className="text-4xl font-bold">{country.name}</h2>
            <p className="text-lg mt-2">
              Explore top universities and programs
            </p>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center md:text-left">
            Top Universities in {country.name}
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {country.popularUniversities.map((uni, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold text-gray-800">{uni}</h3>
                <p className="text-gray-600 mt-2">
                  One of the premier institutions in {country.name}.
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-4xl mx-auto">{renderStyledContent}</section>

        <section className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-700">
              <FaShareAltSquare className="w-5 h-5" />
              <h3 className="font-semibold text-lg">Share this guide</h3>
            </div>
            <div className="flex gap-3">
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 transition"
              >
                <FaXTwitter className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white transition"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 hover:opacity-90 rounded-full text-white transition"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>
      </article>

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Explore Other Countries
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(countriesData)
              .filter(([key]) => key !== slug)
              .map(([key, related]) => (
                <Link key={related.id} href={`/studyabroad/${key}`}>
                  <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:scale-[1.02] transition-transform duration-300">
                    <div className="relative h-48 w-full">
                      <Image
                        src={related.flag}
                        alt={`${related.name} Flag`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Study in {related.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {related.description}
                      </p>
                      <span className="text-blue-600 font-medium flex items-center gap-1">
                        Explore <FaArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <div className="mt-16 text-center">
        <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 rounded-3xl p-10 text-white shadow-2xl border border-gray-700 mb-10 ">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
            Find Your Perfect University Match
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Get personalized guidance from our experienced counselors to
            navigate your study abroad journey seamlessly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Free Assessment
            </Link>
            <Link
              href="/contact"
              className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-10 rounded-xl transition-all duration-300"
            >
              Speak with Advisor
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleUniPage;
