import React from 'react';


interface EducationItem {
  institution: string;
  duration: string;
  title: string;
  description: string;
  location?: string; 
}

const Education = () => {
  const educationHistory: EducationItem[] = [
    {
      institution: 'The Hong Kong Polytechnic University',
      duration: '2013 – 2019',
      title: 'BBA (Honors) in Global Supply Chain Management',
      description: 'Comprehensive business education focusing on supply chain management, logistics, and international business operations.',
      location: 'Hong Kong' 
    },
    {
      institution: 'Shanghai High School International Division',
      duration: '2002 – 2013',
      title: 'High School Diploma',
      description: 'International curriculum with focus on mathematics, sciences, and multilingual education.',
      location: 'Shanghai, China' 
    }
  ];

  return (
    <section id="education" className="py-16 md:py-24 px-4 w-full bg-gradient-to-b from-blue-50/30 to-white">
      <div className="container mx-auto max-w-6xl">
        {/* Material Design header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
              Education
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Academic background and qualifications that shaped my foundation
            </p>
          </div>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Education timeline with Material Design */}
        <div className="space-y-8">
          {educationHistory.map((item, index) => (
            <div key={index} className="group relative">
              {/* Education card */}
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300 ease-out transform hover:-translate-y-1 overflow-hidden">
                <div className="p-8 md:p-10">
                  {/* Header section */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                          {item.title}
                        </h3>
                      </div>
                      <h4 className="text-lg md:text-xl font-semibold text-purple-600">
                        {item.institution}
                      </h4>
                    </div>
                    
                    <div className="mt-4 lg:mt-0 flex flex-col items-start lg:items-end space-y-2">
                      <div className="inline-flex items-center px-4 py-2 bg-purple-50 rounded-full border border-purple-200">
                        <svg className="w-4 h-4 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-sm font-medium text-purple-700">{item.duration}</span>
                      </div>
                      {item.location && (
                        <div className="inline-flex items-center px-4 py-2 bg-gray-50 rounded-full border border-gray-200">
                          <svg className="w-4 h-4 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span className="text-sm font-medium text-gray-700">{item.location}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  {item.description && (
                    <div className="mt-6 p-6 bg-gradient-to-br from-purple-50/50 to-blue-50/30 rounded-2xl border border-purple-100/50">
                      <p className="text-gray-700 leading-relaxed font-medium">
                        {item.description}
                      </p>
                    </div>
                  )}
                </div>

                {/* Material Design floating indicator */}
                <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
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

export default Education; 