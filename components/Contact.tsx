'use client'

import React from 'react';
import Link from 'next/link';
import { FaLinkedin, FaInstagram, FaGithub, FaCode, FaEnvelope, FaFileDownload, FaMapMarkerAlt } from 'react-icons/fa';

const Contact: React.FC = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mshreya9/',
      icon: <FaLinkedin className="w-6 h-6" />,
    },
    {
      name: 'GitHub',
      url: 'https://github.com/mshreya9',
      icon: <FaGithub className="w-6 h-6" />,
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/shreya.pixels/',
      icon: <FaInstagram className="w-6 h-6" />,
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/mshreya9/',
      icon: <FaCode className="w-6 h-6" />,
    },
    {
      name: 'Email',
      url: 'mailto:shreya.maheshwari06@gmail.com',
      icon: <FaEnvelope className="w-6 h-6" />,
    },
  ];

  return (
    <section id="contact" className="bg-gradient-to-b from-slate-800 to-slate-900 text-white py-16 relative">
      {/* Decorative Elements - adjusted opacity */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(79,70,229,0.1),transparent)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(99,102,241,0.1),transparent)] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Get In <span className="text-indigo-400">Touch</span>
          </h2>
          <div className="h-1 w-20 bg-indigo-400 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Location */}
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <FaMapMarkerAlt className="w-5 h-5 text-indigo-400" />
              <span className="text-gray-300">Bangalore, India</span>
            </div>

            {/* Email Call to Action */}
            <div className="text-center md:text-left">
              <p className="text-gray-400 mb-2">Feel free to reach out!</p>
              <Link
                href="mailto:shreyamaheshwari09@gmail.com"
                className="text-l text-indigo-400 hover:text-indigo-300 font-medium"
              >
                shreya.maheshwari06@gmail.com
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start space-x-6">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-indigo-400 transform hover:scale-110 transition-all duration-300"
                  aria-label={link.name}
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          <div className="text-center md:text-right">
            {/* Resume Download */}
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-full transition-colors duration-300 hover:scale-105 transform"
            >
              <FaFileDownload className="w-5 h-5 mr-2" />
              Download Resume
            </Link>
          </div>
        </div>

        {/* Decorative Divider */}
        <div className="relative py-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-700"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-gradient-to-b from-gray-800 to-gray-900 px-4">
              <div className="h-2 w-2 rounded-full bg-indigo-400"></div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm pb-1">
          <p>© {new Date().getFullYear()} Shreya Maheshwari. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
