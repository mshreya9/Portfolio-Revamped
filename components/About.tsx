'use client'

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="pt-32 pb-12 bg-gradient-to-br from-white to-indigo-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Image Column */}
            <div className="lg:w-1/3 flex justify-center">
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Main circular image */}
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <Image
                    src="/about/shreya-photo.jpg"
                    alt="Shreya Maheshwari"
                    width={512}
                    height={512}
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Decorative circles */}
                <div className="absolute -z-10 w-64 h-64 rounded-full bg-indigo-100 top-4 -right-4"></div>
                <div className="absolute -z-10 w-32 h-32 rounded-full bg-indigo-200 -bottom-4 -left-4"></div>
              </motion.div>
            </div>

            {/* Content Column */}
            <div className="lg:w-2/3 space-y-8">
              <div className="space-y-6 text-lg text-gray-600">
                <p className="text-lg leading-relaxed text-justify">
                  <span className="text-indigo-600 font-semibold">Hello!</span> I'm Shreya Maheshwari, a software engineer passionate about building impactful and user-friendly digital solutions. With a strong foundation in frontend development, I specialize in creating accessible, responsive, and visually appealing interfaces. My journey has been shaped by hackathons, leadership roles, and community-driven initiatives, where I've honed my problem-solving and teamwork skills.
                </p>
                <p className="text-lg leading-relaxed text-justify">
                Currently, I am preparing for my next challenge as an MBA candidate at BITSoM, where I aim to bridge technology and business for meaningful impact.
                </p>
              </div>

              {/* Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center space-x-3">
                    <span className="text-indigo-600 bg-indigo-50 p-2 rounded-lg">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                        />
                      </svg>
                    </span>
                    <div>
                      <h3 className="font-semibold text-gray-900">Experience</h3>
                      <p className="text-sm text-gray-600">3+ Years in Tech</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center space-x-3">
                    <span className="text-indigo-600 bg-indigo-50 p-2 rounded-lg">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" 
                        />
                      </svg>
                    </span>
                    <div>
                      <h3 className="font-semibold text-gray-900">Education</h3>
                      <p className="text-sm text-gray-600">BITSoM MBA | Class of 2027</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-2 flex justify-center lg:justify-start">
                <a 
                  href="#contact" 
                  className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg"
                >
                  Let's Connect
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;