"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const newsData = [
  {
    id: 1,
    title: "New IELTS Batch Starting Soon",
    date: "October 25, 2025",
    description:
      "Join our upcoming IELTS preparation batch with certified trainers and flexible timing options.",
    image: "/ie.jpg",
    slug: "ielts-batch-starting-soon",
  },
  {
    id: 2,
    title: "Visa Success Stories",
    date: "September 15, 2025",
    description:
      "Congratulations to our students who received their student visas to study abroad!",
    image: "/approve.jpg",
    slug: "visa-success-stories",
  },
  {
    id: 3,
    title: "University Partnership",
    date: "August 30, 2025",
    description:
      "We are proud to announce our new collaboration with top universities across the USA and Australia.",
    image: "/partner.jpg",
    slug: "university-partnership",
  },
];

const NewsAndUpdate = () => {
  return (
    <section className="py-16 bg-gray-50 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">
          News & Updates
        </h2>

        <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
          Stay updated with our latest news, success stories, and announcements.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {newsData.map((news) => (
            <div
              key={news.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative w-full h-56">
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-left">
                <p className="text-sm text-blue-600 font-medium mb-2">
                  {news.date}
                </p>

                <h3 className="text-xl font-semibold mb-3 text-gray-800 leading-snug">
                  {news.title}
                </h3>

                <p className="text-gray-600 mb-4">{news.description}</p>
                <Link
                  href={`/news/${news.slug}`}
                  className="text-blue-700 font-semibold hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsAndUpdate;
