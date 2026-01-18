"use client";
import { motion } from "motion/react";
import { useInView } from "@/hooks/useInView";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

export function Education() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const education = [
    {
      degree: "BBA (Honors) in Global Supply Chain Management",
      school: "The Hong Kong Polytechnic University",
      period: "2013 – 2018",
      location: "Hong Kong",
      description:
        "Comprehensive business education focusing on supply chain management, logistics, and international business operations.",
      color: "from-purple-500 to-pink-500",
    },
    {
      degree: "High School Diploma",
      school: "Shanghai High School International Division",
      period: "2002 – 2013",
      location: "Shanghai, China",
      description:
        "International curriculum with focus on mathematics, sciences, and multilingual education.",
      color: "from-blue-500 to-cyan-500",
    },
  ];

  return (
    <section
      id="education"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Academic background and qualifications that shaped my foundation
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent overflow-hidden">
                {/* Decorative gradient */}
                <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${edu.color}`} />
                
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Icon */}
                  <div className={`flex-shrink-0 p-4 rounded-2xl bg-gradient-to-br ${edu.color} group-hover:scale-110 transition-transform duration-300`}>
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {edu.degree}
                        </h3>
                        <p className={`text-lg font-semibold bg-gradient-to-r ${edu.color} bg-clip-text text-transparent`}>
                          {edu.school}
                        </p>
                      </div>

                      <div className="flex flex-col gap-2 text-sm text-gray-600">
                        <div className="flex items-center gap-2 bg-blue-50 px-3 py-1.5 rounded-lg">
                          <Calendar className="w-4 h-4 text-blue-600" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-purple-50 px-3 py-1.5 rounded-lg">
                          <MapPin className="w-4 h-4 text-purple-600" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
