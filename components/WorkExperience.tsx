'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const experienceData = [
  {
    role: "Software Development Engineer II",
    company: "JPMorgan Chase & Co.",
    location: "Bangalore, India",
    duration: "July 2022 - Present",
    type: "Full-time",
    description: [
      "Led UI design and development, owning new features and ensuring mobile-responsive, user-friendly interfaces",
      "Enhanced accessibility using screen readers for seamless navigation by visually impaired users",
      "Managed API development, service upgrades to more efficient versions, and ongoing maintenance.",
      "Utilized AWS certification to migrate applications to AWS, focusing on S3",
      "I served as one of four SEP Engineer Committee Leads, leading initiatives to empower engineers"
    ],
    technologies: ["JavaScript", "HTML5", "CSS3", "AEM", "Java", "SpringBoot", "AWS", "Leadership", "Communication"],
    logo: "/workexp/jpmc.jpg",
  },
  {
    role: "Software Engineer Intern",
    company: "JPMorgan Chase & Co.",
    location: "Bangalore, India",
    duration: "Jan 2022 - Jun 2021",
    type: "Internship",
    description: [
      "Automated bi-monthly build and release process for 23 services, saving 200+ minutes monthly",
      "Gained Agile experience, managing sprints, writing unit tests, and improving code coverage",
      "Made the UI responsive, improving design and usability for a key service",
    ],
    technologies: ["JavaScript", "HTML5", "CSS3", "Java", "SpringBoot", "Bash"],
    logo: "/workexp/jpmc.jpg",
  },
  {
    role: "Software Engineer Intern",
    company: "Optum Global Solutions",
    location: "Gurgaon, India",
    duration: "Jun 2021 - Aug 2021",
    type: "Internship",
    description: [
      "Gained hands-on experience with Microsoft Azure through training and practical use",
      "Worked on an insurance case management app in Optum's clinical portfolio",
    ],
    technologies: ["Microsoft Azure", "NodeJs", "ExpressJS"],
    logo: "/workexp/optum-uhg.png",
  },
];

const Experience: React.FC = () => {
  return (
    <section id="workexp" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Work <span className="text-indigo-600">Experience</span>
          </h2>
          <div className="h-1 w-20 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-indigo-200"></div>

          {/* Experience Cards */}
          <div className="space-y-12">
            {experienceData.map((experience, index) => (
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
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 relative">
                    {/* Company Logo - Desktop only */}
                    <div className="absolute top-6 right-6 hidden lg:block">
                      {experience.logo && (
                        <div className="relative w-24 h-24 rounded-full overflow-hidden">
                          <Image
                            src={experience.logo}
                            alt={`${experience.company} logo`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                    </div>

                    {/* Role & Duration */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{experience.role}</h3>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-50 text-indigo-600">
                        {experience.duration}
                      </span>
                    </div>

                    {/* Company & Location */}
                    <div className="mb-4">
                      <div className="text-lg font-semibold text-gray-700">{experience.company}</div>
                      <div className="text-gray-600 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                          />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                          />
                        </svg>
                        {experience.location}
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2 mb-4">
                      {experience.description.map((point, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="w-4 h-4 mt-1.5 mr-2 text-indigo-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          <span className="text-gray-600">{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 text-sm font-medium bg-gray-100 text-gray-700 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
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

export default Experience;
