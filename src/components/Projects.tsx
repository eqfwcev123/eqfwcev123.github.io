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
    <div className="mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="group relative bg-white rounded-3xl overflow-hidden flex flex-col shadow-md hover:shadow-2xl transition-all duration-300 ease-out transform hover:-translate-y-2 border border-gray-100"
          >
            <Link href={`/projects/${project.slug}`} className="flex flex-col flex-grow">
              {/* Image Area with Material Design treatment */}
              {project.imgSrc && (
                <div className="relative w-full h-56 bg-gray-50 overflow-hidden">
                  <Image
                    src={project.imgSrc}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 3}
                  />
                  {/* Material Design overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  
                  {/* Floating status indicator */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-blue-600/90 backdrop-blur-sm text-white text-xs font-medium rounded-full shadow-lg">
                    Project
                  </div>
                </div>
              )}
              
              {/* Content Area with Material spacing */}
              <div className="p-6 md:p-8 flex flex-col flex-grow space-y-4">
                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base line-clamp-3">
                    {project.description}
                  </p>
                </div>
                
                {/* Technology tags with Material Design chips */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-blue-700 bg-blue-50 rounded-full border border-blue-200 hover:bg-blue-100 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-gray-500 bg-gray-100 rounded-full">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </Link>

            {/* Material Design action area */}
            <div className="px-6 md:px-8 pb-6 md:pb-8 mt-auto">
              <Link
                href={`/projects/${project.slug}`}
                className="group/link inline-flex items-center justify-center w-full px-6 py-3 text-sm font-medium text-blue-600 bg-blue-50 rounded-2xl hover:bg-blue-100 hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all duration-200 ease-out"
              >
                <span className="mr-2">View Details</span>
                <svg 
                  className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-200" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-16 md:py-24 px-4 w-full bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-7xl">
        {/* Material Design section header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
              Projects & Portfolio
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Explore my work across different domains, from AI-powered systems to mobile applications
            </p>
          </div>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6"></div>
        </div>
        
        {/* Work Projects Section */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                Work Projects
              </h3>
            </div>
          </div>
          <ProjectGrid projects={workProjects} />
        </div>

        {/* Side Projects Section */}
        <div>
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                Side Projects
              </h3>
            </div>
          </div>
          <ProjectGrid projects={personalProjects} />
        </div>
      </div>
    </section>
  );
};

export default Projects; 