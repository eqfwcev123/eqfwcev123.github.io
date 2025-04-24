import React from 'react';

const Expertise = () => {
  const services = [
    {
      icon: '🖥️', 
      title: 'Backend Development',
      description: 'Building robust and scalable server-side applications and APIs.' 
    },
    {
      icon: '📱', 
      title: 'Mobile App Development',
      description: 'Crafting functional mobile applications for various platforms.' 
    },
    {
      icon: '🧠', 
      title: 'Others',
      description: 'Exploring AI applications and Computer Vision techniques.'
    }
  ];

  return (
    <section id="expertise" className="py-16 px-4 w-full">
      <div className="container mx-auto flex flex-col md:flex-row gap-12">
        {/* Left side: Service items */}
        <div className="md:w-1/3 space-y-6">
          {services.map((service, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="text-2xl bg-gray-100 rounded-full p-3">{service.icon}</div>
              <div>
                <h3 className="font-semibold">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right side: Service description and stats */}
        <div className="md:w-2/3">
          <h2 className="text-3xl font-bold mb-4">Areas of Expertise</h2>
          <p className="text-gray-600 mb-6">
            I build and maintain the backend logic and APIs powering applications, develop mobile solutions, and explore practical uses for AI technologies.
          </p>
          <div className="flex space-x-8">
            <div>
              <p className="text-3xl font-bold">4+</p>
              <p className="text-sm text-gray-500">Technologies used</p>
            </div>
            <div>
              <p className="text-3xl font-bold">4.5+</p>
              <p className="text-sm text-gray-500">Years of experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise; 