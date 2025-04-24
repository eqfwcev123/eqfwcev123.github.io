'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';

const Projects = () => {
  // Separate projects into work and personal
  const workProjects = projects.slice(0, 3);
  const personalProjects = projects.slice(3);

  const ProjectGrid = ({ projects }: { projects: typeof workProjects }) => (
    <div className="mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <Link href={`/projects/${project.slug}`} className="flex flex-col flex-grow">
              {/* Image Area */}
              {project.imgSrc && (
                <div className="relative w-full h-56 bg-gray-300 overflow-hidden">
                  <Image
                    src={project.imgSrc}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              )}
              
              {/* Content Area */}
              <div className="p-8 flex flex-col flex-grow">
                <div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 rounded-full 
                        hover:bg-gray-200 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>

            {/* See Details link */}
            <div className="px-8 pb-8">
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 
                transition-colors group/link"
              >
                <span className="mr-2">See Details</span>
                <svg 
                  className="w-5 h-5 transform group-hover/link:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 px-4 w-full bg-blue-100/50">
      <div className="container mx-auto">
        {/* Enhanced section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Projects & Portfolio
          </h2>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        {/* Work Projects Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12 text-gray-800">
            Work Projects
          </h3>
          <ProjectGrid projects={workProjects} />
        </div>

        {/* Side Projects Section */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-12 text-gray-800">
            Side Projects
          </h3>
          <ProjectGrid projects={personalProjects} />
        </div>
      </div>
    </section>
  );
};

export default Projects; 