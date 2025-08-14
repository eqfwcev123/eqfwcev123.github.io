import React from 'react';

interface Job {
  company: string;
  role: string;
  duration: string;
  description: string[]; // Use an array for bullet points
  location?: string; // Uncommented optional location field
}

const WorkExperience = () => {
  // Experience data with actual bullet points from resume
  const jobs: Job[] = [
    {
      company: 'LSCM Research & Development Centre',
      role: 'Software Engineer',
      duration: '2020 October – Present',
      description: [
        'Designed and implemented a computer vision pipeline that automated quality control, reducing processing time by 75%',
        'Developed a real-time traffic management backend system that dynamically adjusts traffic signals based on computer vision analytics, reducing congestion in key intersections',
        'Led development of a mobile application in Flutter/Dart that uses IoT devices to detect approaching objects and provide audio alerts to visually impaired users, enhancing pedestrian safety'
      ],
      location: 'Hong Kong' 
    }
  ];

  return (
    <section id="experience" className="py-16 md:py-24 px-4 w-full bg-gradient-to-b from-white to-blue-50/30">
      <div className="container mx-auto max-w-6xl">
        {/* Material Design header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
              Work Experience
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Professional journey and key achievements in software engineering
            </p>
          </div>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Experience cards with Material Design */}
        <div className="space-y-8">
          {jobs.map((job, index) => (
            <div key={index} className="group relative">
              {/* Main experience card */}
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300 ease-out transform hover:-translate-y-1 overflow-hidden">
                <div className="p-8 md:p-10">
                  {/* Header section */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                          {job.role}
                        </h3>
                      </div>
                      <h4 className="text-lg md:text-xl font-semibold text-blue-600">
                        {job.company}
                      </h4>
                    </div>
                    
                    <div className="mt-4 lg:mt-0 flex flex-col items-start lg:items-end space-y-2">
                      <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full border border-blue-200">
                        <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-sm font-medium text-blue-700">{job.duration}</span>
                      </div>
                      {job.location && (
                        <div className="inline-flex items-center px-4 py-2 bg-gray-50 rounded-full border border-gray-200">
                          <svg className="w-4 h-4 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span className="text-sm font-medium text-gray-700">{job.location}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Achievements section */}
                  <div className="space-y-4">
                    <h5 className="text-lg font-semibold text-gray-800 mb-6">Key Achievements & Responsibilities</h5>
                    <div className="grid gap-4">
                      {job.description.map((achievement, pointIndex) => (
                        <div key={pointIndex} className="group/item flex items-start space-x-4 p-4 rounded-2xl hover:bg-blue-50/50 transition-colors duration-200">
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-2 h-2 bg-blue-600 rounded-full group-hover/item:scale-125 transition-transform duration-200"></div>
                          </div>
                          <p className="text-gray-700 leading-relaxed font-medium">
                            {achievement}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Material Design floating action indicator */}
                <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience; 