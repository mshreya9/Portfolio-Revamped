import React from 'react';
import Link from 'next/link';

interface Project {
  title: string;
  description: string;
  link: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    title: "Voyage EduCare Raabta",
    description: "We built a mobile-friendly platform for Voyage EduCare Foundation's Raabta initiative, empowering teachers' professional growth through feedback loops, gamified quizzes, study resources, leaderboards, and community forums. The platform helped achieve the ultimate goal of enhancing students' holistic development.",
    link: "https://docs.google.com/presentation/d/1XFfxnCQ96rDwoJx9G9wUk1c7Y-fehc9Bhs-5bX70Q9c/edit?usp=sharing",
    technologies: ["React", "NodeJs", "Firebase", "AWS", "Nginx", "Kubernetes", "CodeForGood by JPMC"],
  },
  {
    title: "Pragati",
    description: "Pragati is an online platform that empowers underdeveloped but talented women to earn and become financially independent by selling authentic self-made products and providing reliable services on the go. The portal also features Women in News, an Ask Desk section for guidance and support, and an emergency SOS service.",
    link: "https://devfolio.co/projects/pragati-progress-begins-at-home-9220",
    technologies: ["HTML5", "CSS3", "JavaScript", "MongoDB", "NodeJS", "ExpressJs", "Sentiment Analysis"],
  },
  {
    title: "Food ResQ",
    description: "A comprehensive application designed to bridge the gap between excess food providers and distributors, working towards eradicating hunger. The platform enables users to locate food donation centers, book slots for pickups or drop-offs, and seamlessly connect with organizations and volunteers - all in one place to do the good deed!",
    link: "https://devpost.com/software/food-resq",
    technologies: ["HTML5", "CSS3", "JavaScript", "MongoDB", "NodeJS", "ExpressJs", "Bootstrap"],
  },
  {
    title: "Medalysis",
    description: "Medalysis is an API that serves its purpose solely towards tracking locations, figuring out patterns of symptoms, and helping one observe the growing trends of diseases and epidemics worldwide, thus identifying an incoming pandemic at an early stage.",
    link: "https://devpost.com/software/medalysis",
    technologies: ["HTML5", "CSS3", "JavaScript", "MongoDB", "NodeJS", "ExpressJs", "Bootstrap", "Postman"],
  },
  {
    title: "COVID-19 Guide and Helper",
    description: "It is a one-stop destination for COVID-19 statistics in India, government and health ministry updates, a self-assessment bot, a bilingual Voice Assistant for better searches, a Help Station for posting and receiving assistance, a comment feature for engagement, and official WHO guidelines to follow during the pandemic.",
    link: "https://devfolio.co/projects/covid-desk",
    technologies: ["HTML5", "CSS3", "JavaScript", "MongoDB", "NodeJS", "ExpressJs", "Bootstrap", "slanglabs.in"],
  },
  {
    title: "Java-DSA",
    description: "A comprehensive guide to Data Structures and Algorithms for internships and placements, covering core concepts, detailed explanations, practical examples, and handwritten notes to enhance understanding and excel in technical interviews.",
    link: "https://github.com/mshreya9/Java-DSA",
    technologies: ["Java", "Data Structures", "Algorithms", "Interview Preparation", "OOPS", "Leetcode", "Hackerrank"],
  },
];

const Projects = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
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
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg hover:border-indigo-500 dark:hover:border-indigo-400 transition-all duration-300 h-[470px]"
            >
              <div className="p-6 h-full flex flex-col">
                <h3 className="text-xl font-bold text-indigo-700 dark:text-indigo-500 mb-3 text-center">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-auto text-justify">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 group"
                >
                  View Project 
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
