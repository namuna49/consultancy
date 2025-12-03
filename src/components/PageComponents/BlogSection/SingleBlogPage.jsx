"use client";
import React from "react";
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
} from "react-icons/fa";
import {
  FaXTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa6";

const SingleBlogPage = () => {
  const params = useParams();
  const slug = params.slug;

  const blogData = {
    "top-tips-for-studying-abroad-successfully": {
      id: 1,
      title: "Top Tips for Studying Abroad Successfully",
      description:
        "Discover essential tips for adjusting to a new academic environment, making friends, and thriving while studying abroad.",
      image: "/aa.png",
      date: "October 12, 2025",
      author: "Sarah Johnson",
      authorRole: "Study Abroad Advisor",
      authorImage: "/author1.jpg",
      content: `
        <h2>Introduction</h2>
        <p>Studying abroad is an exciting adventure that can transform your life. However, it also comes with its challenges. Here are some essential tips to help you succeed in your international education journey.</p>
        
        <h2>1. Prepare Academically</h2>
        <p>Research the education system of your host country. Understand the grading system, teaching methods, and academic expectations. This will help you adapt quickly to your new learning environment.</p>
        
        <h2>2. Embrace Cultural Differences</h2>
        <p>Be open to new experiences and different ways of thinking. Engage with local students and participate in cultural activities to fully immerse yourself in the experience.</p>
        
        <h2>3. Manage Your Finances</h2>
        <p>Create a budget and stick to it. Research cost of living in your host country and explore part-time work opportunities if your visa permits.</p>
        
        <h2>4. Build a Support Network</h2>
        <p>Connect with other international students and join student organizations. Don't hesitate to seek help from university support services when needed.</p>
        
        <h2>Conclusion</h2>
        <p>Studying abroad is a rewarding experience that will enhance your personal and professional growth. With proper preparation and the right mindset, you can make the most of this incredible opportunity.</p>
      `,
      tags: ["Study Tips", "Student Life", "Cultural Adaptation"],
      readTime: "5 min read",
    },
    "how-to-choose-the-right-university-for-you": {
      id: 2,
      title: "How to Choose the Right University for You",
      description:
        "From academic programs to campus life, learn how to find the perfect fit for your goals and lifestyle.",
      image: "/right.png",
      date: "September 28, 2025",
      author: "Michael Chen",
      authorRole: "Education Consultant",
      authorImage: "/author2.jpg",
      content: `
        <h2>Finding Your Perfect University Match</h2>
        <p>Choosing the right university is one of the most important decisions you'll make. Here's a comprehensive guide to help you find the perfect institution for your academic and personal needs.</p>
        
        <h2>1. Academic Programs</h2>
        <p>Look beyond university rankings. Consider the specific programs, faculty expertise, research opportunities, and curriculum structure that align with your career goals.</p>
        
        <h2>2. Location and Campus Life</h2>
        <p>Consider the university's location, campus facilities, student organizations, and overall campus culture. Visit if possible, or take virtual tours.</p>
        
        <h2>3. Career Opportunities</h2>
        <p>Research the university's career services, internship opportunities, industry connections, and alumni network. These factors significantly impact your future career prospects.</p>
        
        <h2>4. Financial Considerations</h2>
        <p>Evaluate tuition fees, available scholarships, cost of living, and potential part-time work opportunities in the area.</p>
      `,
      tags: ["University Selection", "Admissions", "Career Planning"],
      readTime: "7 min read",
    },
    "scholarship-opportunities-for-international-students": {
      id: 3,
      title: "Scholarship Opportunities for International Students",
      description:
        "Explore the top scholarships available for international students in the USA, UK, Australia, and Canada.",
      image: "/scholarship.png",
      date: "August 30, 2025",
      author: "Dr. Emily Watson",
      authorRole: "Scholarship Advisor",
      authorImage: "/author3.jpg",
      content: `
        <h2>Introduction to International Scholarships</h2>
        <p>Funding your international education can be challenging, but numerous scholarship opportunities exist for deserving students. This guide covers the most prestigious scholarships across popular study destinations.</p>
        
        <h2>1. USA Scholarships</h2>
        <p>The United States offers various scholarships including Fulbright, Hubert Humphrey, and university-specific merit scholarships. Many private organizations also support international students.</p>
        
        <h2>2. UK Scholarships</h2>
        <p>Explore Chevening Scholarships, Commonwealth Scholarships, and Rhodes Scholarships. UK universities also offer significant bursaries and fee waivers for international candidates.</p>
        
        <h2>3. Australia & Canada</h2>
        <p>Australia offers Australia Awards and research training programs, while Canada provides Vanier Canada Graduate Scholarships and university-specific funding.</p>
        
        <h2>Application Tips</h2>
        <p>Start early, meet all deadlines, tailor your applications, and highlight your unique strengths and contributions to the academic community.</p>
      `,
      tags: ["Scholarships", "Financial Aid", "Study Abroad"],
      readTime: "6 min read",
    },
    "top-tips-to-ace-your-ielts-exam": {
      id: 4,
      title: "Top Tips to Ace Your IELTS Exam",
      description:
        "Master the IELTS test with these practical strategies and proven preparation tips.",
      image: "/ielts.png",
      date: "October 12, 2025",
      author: "Robert Kim",
      authorRole: "IELTS Expert",
      authorImage: "/author4.jpg",
      content: `
        <h2>Understanding the IELTS Exam</h2>
        <p>The International English Language Testing System (IELTS) is crucial for study abroad applications. Here's how to maximize your score.</p>
        
        <h2>1. Listening Section Strategies</h2>
        <p>Practice active listening with various accents. Learn to predict answers and manage your time effectively during the test.</p>
        
        <h2>2. Reading Comprehension</h2>
        <p>Develop skimming and scanning techniques. Practice with academic texts and learn to identify key information quickly.</p>
        
        <h2>3. Writing Excellence</h2>
        <p>Master essay structure for Task 2 and data interpretation for Task 1. Practice writing under timed conditions.</p>
        
        <h2>4. Speaking Confidence</h2>
        <p>Practice speaking on various topics, record yourself, and work on fluency, pronunciation, and vocabulary range.</p>
        
        <h2>Final Preparation</h2>
        <p>Take mock tests, review your mistakes, and develop a study schedule that covers all four sections equally.</p>
      `,
      tags: ["IELTS", "English Test", "Exam Preparation"],
      readTime: "8 min read",
    },
    "choosing-the-right-country-for-your-studies": {
      id: 5,
      title: "Choosing the Right Country for Your Studies",
      description:
        "Explore how to pick the perfect destination that fits your goals, lifestyle, and career plans.",
      image: "/right.png",
      date: "September 25, 2025",
      author: "Maria Gonzalez",
      authorRole: "International Education Expert",
      authorImage: "/author5.jpg",
      content: `
        <h2>Finding Your Ideal Study Destination</h2>
        <p>Selecting the right country is as important as choosing the right university. Consider these factors for your decision.</p>
        
        <h2>1. Academic Excellence</h2>
        <p>Research education systems, university rankings, and program strengths in different countries that match your field of study.</p>
        
        <h2>2. Career Opportunities</h2>
        <p>Consider post-study work rights, internship opportunities, and job markets in your preferred destinations.</p>
        
        <h2>3. Cost of Living & Scholarships</h2>
        <p>Compare tuition fees, living expenses, and available financial support across different countries.</p>
        
        <h2>4. Cultural Fit & Lifestyle</h2>
        <p>Evaluate climate, language, social environment, and cultural aspects that align with your personality and preferences.</p>
        
        <h2>5. Visa Requirements</h2>
        <p>Understand visa processes, requirements, and success rates for different study destinations.</p>
      `,
      tags: ["Study Destination", "Country Selection", "International Study"],
      readTime: "7 min read",
    },
    "how-to-write-a-winning-sop-for-university-admissions": {
      id: 6,
      title: "How to Write a Winning SOP for University Admissions",
      description:
        "Your Statement of Purpose can make or break your application — here's how to make it shine.",
      image: "/mock.png",
      date: "August 18, 2025",
      author: "Dr. James Wilson",
      authorRole: "Admissions Consultant",
      authorImage: "/author6.jpg",
      content: `
        <h2>The Importance of a Strong SOP</h2>
        <p>A well-crafted Statement of Purpose (SOP) can significantly impact your admission chances. Learn the art of persuasive academic writing.</p>
        
        <h2>1. Structure Your SOP</h2>
        <p>Follow a clear structure: introduction, academic background, research interests, why this university, career goals, and conclusion.</p>
        
        <h2>2. Showcase Your Unique Story</h2>
        <p>Highlight your journey, experiences, and what makes you a unique candidate. Connect your past experiences to future goals.</p>
        
        <h2>3. Research the University</h2>
        <p>Demonstrate specific knowledge about the program, faculty, and research opportunities. Show why you're a perfect fit.</p>
        
        <h2>4. Avoid Common Mistakes</h2>
        <p>Steer clear of generic statements, grammatical errors, and excessive length. Be authentic and specific.</p>
        
        <h2>5. Editing and Proofreading</h2>
        <p>Revise multiple times, seek feedback, and ensure your SOP is error-free and compelling.</p>
      `,
      tags: ["SOP", "Admissions", "Application Tips"],
      readTime: "9 min read",
    },
    "visa-interview-tips-for-us-and-canada": {
      id: 7,
      title: "Visa Interview Tips for US and Canada",
      description:
        "Essential tips and strategies to clear your study visa interviews confidently.",
      image: "/tips.png",
      date: "September 30, 2025",
      author: "Michael Chen",
      authorRole: "Visa Consultant",
      authorImage: "/author2.jpg",
      content: `
    <h2>Mastering the Visa Interview</h2>
    <p>The visa interview is a crucial step in your study abroad journey. Prepare effectively with these proven strategies.</p>
    
    <h2>1. US F-1 Visa Interview</h2>
    <p>Common questions, required documents, and how to demonstrate non-immigrant intent and financial capability.</p>
    
    <h2>2. Canadian Study Permit Interview</h2>
    <p>Specific requirements for Canada, including proof of funds, acceptance letters, and post-graduation plans.</p>
    
    <h2>3. Document Preparation</h2>
    <p>Complete checklist of required documents and how to organize them for a smooth interview process.</p>
    
    <h2>4. Common Interview Questions</h2>
    <p>Practice with frequently asked questions and learn how to frame convincing, honest answers.</p>
    
    <h2>5. Body Language and Communication</h2>
    <p>Master non-verbal communication, maintain confidence, and handle unexpected questions professionally.</p>
  `,
      tags: ["Visa Interview", "US Visa", "Canada Study Permit"],
      readTime: "11 min read",
    },
  };
  const blog = blogData[slug];

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Blog Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <Link
            href="/blog"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition flex items-center gap-2 w-fit mx-auto"
          >
            <FaArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8">
          <Link
            href="/blog"
            className="text-blue-600 hover:text-blue-700 transition flex items-center gap-2 w-fit"
          >
            <FaArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </nav>{" "}
        <header className="mb-12 text-center">
          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {blog.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1"
              >
                <FaTag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {blog.title}
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            {blog.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-500">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                <FaUserCircle className="w-8 h-8 text-gray-500" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">{blog.author}</p>
                <p className="text-sm">{blog.authorRole}</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <FaCalendarAlt className="w-4 h-4" />
                <span>{blog.date}</span>
              </div>

              <div className="flex items-center gap-2">
                <FaClock className="w-4 h-4" />
                <span>{blog.readTime}</span>
              </div>
            </div>
          </div>
        </header>
        {/* Featured Image */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
          <div className="relative w-full h-96">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        <div className="prose prose-lg max-w-none">
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <FaShareAlt className="w-5 h-5 text-gray-600" />
              <h3 className="text-lg font-semibold text-gray-900">
                Share this article
              </h3>
            </div>
            <div className="flex gap-3">
              <button
                className="p-3 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition duration-300 flex items-center justify-center"
                title="Share on Twitter"
              >
                <FaXTwitter className="w-5 h-5" />
              </button>
              <button
                className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition duration-300 flex items-center justify-center"
                title="Share on Facebook"
              >
                <FaFacebookF className="w-5 h-5" />
              </button>
              <button
                className="p-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition duration-300 flex items-center justify-center"
                title="Share on LinkedIn"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </button>
              <button
                className="p-3 rounded-full bg-pink-600 text-white hover:bg-pink-700 transition duration-300 flex items-center justify-center"
                title="Share on Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </button>
              <button
                className="p-3 rounded-full bg-green-500 text-white hover:bg-green-600 transition duration-300 flex items-center justify-center"
                title="Share on WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </article>

      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.values(blogData)
              .slice(0, 3)
              .map(
                (relatedBlog) =>
                  relatedBlog.id !== blog.id && (
                    <Link
                      key={relatedBlog.id}
                      href={`/blog/${relatedBlog.slug}`}
                    >
                      <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105">
                        <div className="relative w-full h-48">
                          <Image
                            src={relatedBlog.image}
                            alt={relatedBlog.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                            <FaCalendarAlt className="w-3 h-3" />
                            <span>{relatedBlog.date}</span>
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                            {relatedBlog.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                            {relatedBlog.description}
                          </p>
                          <span className="text-blue-600 font-semibold hover:underline flex items-center gap-1">
                            Read More
                            <FaArrowLeft className="w-3 h-3 rotate-180" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  )
              )}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Study Abroad Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get personalized guidance from our expert counselors and make your
            dreams a reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-lg transition-all duration-300"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleBlogPage;
