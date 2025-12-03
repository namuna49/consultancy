"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const CourseCard = ({ title, description, image, href }) => {
  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden m-4 hover:scale-105 transition-transform duration-300">
      <div className="relative h-64 w-full">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <Link
          href={href}
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
