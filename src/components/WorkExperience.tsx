import React from 'react';

interface Job {
  company: string;
  role: string;
  duration: string;
  description: string[]; // Use an array for bullet points
  location?: string; // Uncommented optional location field
}

const WorkExperience = () => {
  // Placeholder data - replace with your actual experience
  const jobs: Job[] = [
    {
      company: 'Logistics and Supply Chain Multitech R&D Center',
      role: 'Software Engineer',
      duration: '2020 - Present',
      description: [],
      location: 'Hong Kong' 
    }
    // Add more jobs here
  ];

  // Reverse jobs to show most recent first
  const reversedJobs = [...jobs].reverse();

  return (
    <section id="experience" className="py-16 px-4 w-full bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Work Experience</h2>
        <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full mb-12"></div>
        {/* Two-column layout similar to Education */}
        <div className="flex flex-col md:flex-row justify-center gap-12">
          {/* Left side: Company and Duration */}
          <div className="md:w-1/3 space-y-8">
            {reversedJobs.map((job, index) => (
              <div key={index}>
                <h4 className="font-semibold">{job.company}</h4>
                <p className="text-sm text-gray-500">{job.duration}</p>
                {/* Display location */}
                {job.location && <p className="text-sm text-gray-500">{job.location}</p>}
              </div>
            ))}
          </div>

          {/* Right side: Timeline with Role and Description */}
          <div className="md:w-1/2 relative pl-8">
            {/* Vertical Line */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-300 ml-[calc(0.5rem-1px)]"></div>

            {reversedJobs.map((job, index) => (
              <div key={index} className="mb-10 relative">
                <div className="flex items-center relative">
                  {/* Dot */}
                  <div className="absolute left-0 w-3 h-3 bg-black rounded-full transform -translate-x-[calc(50%-1px)]"></div>
                  <div className="ml-5">
                    <h3 className="font-semibold">{job.role}</h3>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      {job.description.map((point, pointIndex) => (
                        <li key={pointIndex}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience; 