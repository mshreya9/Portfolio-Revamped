'use client'
import React from 'react';
import Link from 'next/link';
import { FaGlobe, FaUserGraduate, FaHandHoldingHeart, FaHospital } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  link: string;
  technologies: string[];
  type: "education" | "social good" | "health";
}

const getProjectIcon = (type: Project['type']) => {
  switch (type) {
    case 'education':
      return <FaUserGraduate className="w-6 h-6 text-purple-500" />;
    case 'social good':
      return <FaHandHoldingHeart className="w-6 h-6 text-pink-500" />;
    case 'health':
      return <FaHospital className="w-6 h-6 text-red-500" />;
    default:
      return <FaGlobe className="w-6 h-6 text-blue-500" />;
  }
};

const projects: Project[] = [
  {
    title: "Voyage EduCare Raabta",
    description: "We built a mobile-friendly platform for Voyage EduCare Foundation's Raabta initiative, empowering teachers' professional growth through feedback loops, gamified quizzes, study resources, leaderboards, and community forums. The platform helped achieve the ultimate goal of enhancing students' holistic development.",
    link: "https://docs.google.com/presentation/d/1XFfxnCQ96rDwoJx9G9wUk1c7Y-fehc9Bhs-5bX70Q9c/edit?usp=sharing",
    technologies: ["React", "NodeJs", "Firebase", "AWS", "Nginx", "Kubernetes", "CodeForGood by JPMC"],
    type: "education"
  },
  {
    title: "Pragati",
    description: "Pragati is an online platform that empowers underdeveloped but talented women to earn and become financially independent by selling authentic self-made products and providing reliable services on the go. The portal also features Women in News, an Ask Desk section for guidance and support, and an emergency SOS service.",
    link: "https://devfolio.co/projects/pragati-progress-begins-at-home-9220",
    technologies: ["HTML5", "CSS3", "JavaScript", "MongoDB", "NodeJS", "ExpressJs", "Sentiment Analysis", "Social Good"],
    type: "social good"
  },
  {
    title: "Food ResQ",
    description: "A comprehensive application designed to bridge the gap between excess food providers and distributors, working towards eradicating hunger. The platform enables users to locate food donation centers, book slots for pickups or drop-offs, and seamlessly connect with organizations and volunteers - all in one place to do the good deed!",
    link: "https://devpost.com/software/food-resq",
    technologies: ["HTML5", "CSS3", "JavaScript", "MongoDB", "NodeJS", "ExpressJs", "Bootstrap", "Social Good"],
    type: "social good"
  },
  {
    title: "Medalysis",
    description: "Medalysis is an API that serves its purpose solely towards tracking locations, figuring out patterns of symptoms, and helping one observe the growing trends of diseases and epidemics worldwide, thus identifying an incoming pandemic at an early stage.",
    link: "https://devpost.com/software/medalysis",
    technologies: ["HTML5", "CSS3", "JavaScript", "MongoDB", "NodeJS", "ExpressJs", "Bootstrap", "Postman"],
    type: "health"
  },
  {
    title: "COVID-19 Guide and Helper",
    description: "It is a one-stop destination for COVID-19 statistics in India, government and health ministry updates, a self-assessment bot, a bilingual Voice Assistant for better searches, a Help Station for posting and receiving assistance, a comment feature for engagement, and official WHO guidelines to follow during the pandemic.",
    link: "https://devfolio.co/projects/covid-desk",
    technologies: ["HTML5", "CSS3", "JavaScript", "MongoDB", "NodeJS", "ExpressJs", "Bootstrap", "slanglabs.in"],
    type: "social good"
  },
  {
    title: "Java for DSA",
    description: "A comprehensive guide to Data Structures and Algorithms for internships and placements, covering core concepts, detailed explanations, practical examples, and handwritten notes to enhance understanding and excel in technical interviews.",
    link: "https://github.com/mshreya9/Java-DSA",
    technologies: ["Java", "Data Structures", "Algorithms", "Interview Preparation", "OOPS", "Leetcode", "Hackerrank"],
    type: "education"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            My <span className="text-indigo-600">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-200 hover:border-indigo-500"
            >
              <div className="p-6 h-full flex flex-col">
                {/* Title with Icon */}
                <div className="flex items-center gap-3 mb-3">
                  {getProjectIcon(project.type)}
                  <h3 className="text-xl font-bold text-indigo-600">{project.title}</h3>
                </div>

                <p 
                  className="text-gray-600 mb-6 flex-grow text-justify"
                  dangerouslySetInnerHTML={{ __html: project.description }}
                />
                
                <div className="space-y-4">
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 text-sm font-medium bg-gray-100 text-gray-700 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Link */}
                  <Link 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium group-hover:translate-x-2 transition-transform duration-200"
                  >
                    View Project 
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
