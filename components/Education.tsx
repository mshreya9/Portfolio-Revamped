'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const educationData = [
  {
    year: "2025 - 2027",
    degree: "Master of Business Administration",
    institution: "BITS School of Management",
    location: "Mumbai, Maharashtra, India",
    description: "MBA Leadership and Strategy",
    // grade: "CGPA: 9.00",
    achievements: [],
    logo: "/education/bitsom.png"
  },
  {
    year: "2018 - 2022",
    degree: "Bachelor of Technology",
    institution: "Vellore Institute of Technology",
    location: "Vellore, Tamil Nadu, India",
    description: "Computer Science and Engineering",
    grade: "CGPA: 9.23",
    achievements: [
      "Winner of 2 International and 5 National Hackathons",
      "Achiever Award Holder"
    ],
    logo: "/education/vit.png"
  },
  {
    year: "2016 - 2017",
    degree: "Higher Secondary Education",
    institution: "St. Jospeh Public School",
    location: "Kota, Rajasthan, India",
    description: "Science Stream (PCM)",
    grade: "Percentage: 92.2%",
    achievements: [],
    logo: "/education/stjoseph.png"
  },
];

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Education <span className="text-indigo-600">Journey</span>
          </h2>
          <div className="h-1 w-20 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-indigo-200"></div>

          {/* Timeline entries */}
          <div className="space-y-12">
            {educationData.map((entry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row gap-4 md:gap-8 items-start 
                  ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow relative">
                    <div className="absolute top-6 right-6 hidden md:block">
                      {entry.logo && (
                        <div className="relative w-[105px] h-[112px] overflow-hidden">
                          <Image
                            src={entry.logo}
                            alt={`${entry.institution} logo`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                    </div>
                    <div>
                      <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold text-indigo-600 bg-indigo-50 mb-4">
                        {entry.year}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{entry.degree}</h3>
                      <h4 className="text-lg font-semibold text-gray-700 mb-1">{entry.institution}</h4>
                      <p className="text-gray-600 mb-2">{entry.location}</p>
                      <p className="text-gray-600 mb-2">{entry.description}</p>
                      <p className="text-indigo-600 font-medium mb-4">{entry.grade}</p>
                      
                      {entry.achievements.length > 0 && (
                        <div>
                          <h5 className="text-sm font-semibold text-gray-900 mb-2">Key Achievements:</h5>
                          <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                            {entry.achievements.map((achievement, i) => (
                              <li key={i}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
