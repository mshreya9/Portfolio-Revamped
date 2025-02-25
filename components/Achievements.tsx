'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaTrophy, FaCode, FaGraduationCap, FaAward, FaMedal } from 'react-icons/fa';

interface Achievement {
  title: string;
  description: string;
  category: "Academic" | "Leadership" | "Hackathon" | "Award";
  date: string;
  certificateLink?: string;
}

const getCategoryIcon = (category: Achievement['category']) => {
  switch (category) {
    case 'Academic':
      return <FaGraduationCap className="w-5 h-5 text-green-500" />;
    case 'Leadership':
      return <FaAward className="w-5 h-5 text-purple-500" />;
    case 'Hackathon':
      return <FaTrophy className="w-5 h-5 text-yellow-500" />;
    case 'Award':
      return <FaMedal className="w-5 h-5 text-red-500" />;
    default:
      return null;
  }
};

const achievements: Achievement[] = [
  {
    title: "JPMC Townhall Recognition",
    description: "At JPMC, I served as an SEP Engineer Committee Lead, organizing leadership sessions with senior executives, mentoring junior engineers, and publishing success stories of colleagues who advanced into leadership roles. My contributions were recognized by the Executive Director at a townhall.",
    category: "Leadership",
    date: "May 2024",
    certificateLink: "https://drive.google.com/drive/folders/1s0ZuSBre7FRDw4YdlZTiI5tVyuu9i-rt?usp=sharing"
  },
  {
    title: "JPMC SEP Induction Challenge Winner",
    description: "In a two-week training program, I learned full-stack development, Agile methodology, and industry best practices. The program concluded with a competition, where my team won, showcasing our technical skills and strong collaboration.",
    category: "Hackathon",
    date: "July 2022",
    certificateLink: "https://www.linkedin.com/feed/update/urn:li:activity:6969955338565427200/"
  },
  {
    title: "Achiever Award Holder",
    description: "I have been presented with an Achiever Award by VIT Vellore for the academic year 2020-2021 for my exemplary performance at National level hackathons. I stood as a winner in 5 National level hackathons.",
    category: "Academic",
    date: "November 2021",
    certificateLink: " https://drive.google.com/file/d/1k_vtBuauyVeVcAaCxpaKU9g2v0YbjBWb/view?usp=sharing"
  },
  {
    title: "JPMC Code for Good Winner",
    description: "My team built a mobile-friendly platform for Voyage EduCare Foundation's <a href='#projects' class='italic text-indigo-600 hover:underline'>Raabta</a> initiative, empowering teachers' professional growth through feedback loops, gamified quizzes, study resources, leaderboards, and community forums.",
    category: "Hackathon",
    date: "June 2021",
    certificateLink: " https://drive.google.com/file/d/1sgOvo2bEsg0u2-7etx8hdXCI-aOPz2Kk/view?usp=sharing"
  },
  {
    title: "Top 20 finalists at Streamr Data Challenge",
    description: "My team and I implemented Streamr's Data Unions and integrated the Streamr technologies with our project <a href='#projects' class='italic text-indigo-600 hover:underline'>Pragati</a>, to add value to Streamr's data ecosystem. We were selected as one of the top 20 finalists and received prize money worth 200$.",
    category: "Hackathon",
    date: "March 2021",
    certificateLink: " https://drive.google.com/file/d/1dIPjt0JCL0rDvpMUJYiAzN0oxXVHZw4e/view?usp=sharing"
  },
  {
    title: "2nd Prize at Cisco Webex Virtual Hackathon",
    description: "We submitted our project, <a href='#projects' class='italic text-indigo-600 hover:underline'>Pragati</a>, under the <i>Social Good</i> theme in the globally conducted Cisco Webex hackathon, which had 300+ project submissions. Our innovative solution earned us the second category prize and a Samsung Galaxy Tab A.",
    category: "Hackathon",
    date: "February 2021",
    certificateLink: "https://drive.google.com/file/d/1EvVFUthPCvzCOXbI7yiXJyp40scElvkr/view?usp=sharing"
  },
  {
    title: "Certificate of Excellence at Social Innovation Challenge",
    description: "Our project, <a href='#projects' class='italic text-indigo-600 hover:underline'>Pragati</a>, submitted under the <i>Gender Equity and Inclusion</i> theme, ranked among the top 5 teams in the Social Innovation Challenge conducted by IISC Bangalore in collaboration with Keio University, Japan.",
    category: "Hackathon",
    date: "January 2021",
    certificateLink: "https://drive.google.com/file/d/1pOGpIrsshGQEjA37rfEhiXyZFOeAssFC/view?usp=sharing"
  },
  {
    title: "Winner at HTNE (Hack the NorthEast: Beyond)",
    description: "We won the <i>Best Social Change/ Inclusivity Hack</i> award, competing against 1,000+ participants from various countries. As winners, we received Bose Noise Cancellation 700 Headphones along with MLH goodies, including t-shirts, stickers, and a winner badge.",
    category: "Award",
    date: "January 2021",
    certificateLink: "https://drive.google.com/file/d/1-6YPJ0tv7QMxEkKeakMhZxwW6dxEAoGv/view?usp=sharing"
  },
  {
    title: "1st Prize (Champion) at HackNagpur",
    description: "We built our project, <a href='#projects' class='italic text-indigo-600 hover:underline'>Pragati</a>, at HackNagpur, Central India's largest community-driven hackathon, organized by GDG Nagpur and 20+ other communities. Our team secured the 1st place, earning an exclusive GitHub bag and other goodies.",
    category: "Hackathon",
    date: "December 2020",
    certificateLink: "https://drive.google.com/file/d/1YagOOziNGlkkCnWN6OioXdg2464ryWep/view?usp=sharing"
  },
  {
    title: "Finalist in Crack the COVID-19 Crisis Hackathon",
    description: "We built <a href='#projects' class='italic text-indigo-600 hover:underline'>COVID-19 Guide and Helper</a> and our team ranked among the Top 16 out of 26,000+ participants from 500+ institutions across India in a hacakthon conducted by IBM and NASSCOM. As a prize, we received Sony Headphones for our achievement.",
    category: "Hackathon",
    date: "June 2020",
    certificateLink: "https://drive.google.com/file/d/10ajGyme_vo8fPN7I1EKxDUaUx1T1pFBc/view?usp=sharing"
  },
];

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            My <span className="text-indigo-600">Achievements</span>
          </h2>
          <div className="h-1 w-20 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-200 hover:border-indigo-500"
            >
              <div className="p-6 h-full flex flex-col">
                {/* Category with Icon */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex-shrink-0">
                    {getCategoryIcon(achievement.category)}
                  </div>
                  <span className="inline-block px-3 py-1 text-sm font-medium bg-indigo-50 text-indigo-600 rounded-full">
                    {achievement.category}
                  </span>
                  <span className="ml-auto text-sm text-gray-500">{achievement.date}</span>
                </div>

                {/* Title and Description */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-indigo-600 mb-2">{achievement.title}</h3>
                  <p className="text-gray-600 text-justify"
                  dangerouslySetInnerHTML={{ __html: achievement.description }}
                  />
                </div>
                
                {/* Certificate Link */}
                <div className="mt-auto">
                  {achievement.certificateLink && (
                    <Link 
                      href={achievement.certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium group-hover:translate-x-2 transition-transform duration-200"
                    >
                      View Achievement
                      <svg 
                        className="ml-2 w-4 h-4" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
