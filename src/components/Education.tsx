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
      institution: 'Hong Kong Polytechnic University',
      duration: '2013-2019',
      title: 'BBA in Global Supply Chain Management',
      description: '',
      location: 'Hong Kong' 
    },
    {
      institution: 'Shanghai High School International Division',
      duration: '2013',
      title: 'High School Diploma',
      description: '',
      location: 'Shanghai, China' 
    }
  ];

  return (
    <section id="education" className="py-16 px-4 w-full bg-gray-50"> {/* Added a light background */}
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Education</h2> {/* Changed mb-12 to mb-4 */}
        <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full mb-12"></div> {/* Added blue line */}
        <div className="flex flex-col md:flex-row justify-center gap-12">
          {/* Left side: Institution, Duration, and Location */}
          <div className="md:w-1/3 space-y-8">
            {educationHistory.map((item, index) => (
              <div key={index}>
                <h4 className="font-semibold">{item.institution}</h4>
                <p className="text-sm text-gray-500">{item.duration}</p>
                {/* Display location */}
                {item.location && <p className="text-sm text-gray-500">{item.location}</p>}
              </div>
            ))}
          </div>

          {/* Right side: Timeline with Title and Description */}
          <div className="md:w-1/2 relative pl-8">
            {/* Vertical Line */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-300 ml-[calc(0.5rem-1px)]"></div>

            {educationHistory.map((item, index) => (
              <div key={index} className="mb-10 relative">
                {/* Container with flex for alignment */}
                <div className="flex items-center relative">
                  {/* Dot */}
                  <div className="absolute left-0 w-3 h-3 bg-black rounded-full transform -translate-x-[calc(50%-1px)]"></div>
                  {/* Content with adjusted margin */}
                  <div className="ml-5">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
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

export default Education; 