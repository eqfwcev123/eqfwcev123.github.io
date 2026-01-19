"use client";
import { motion } from "motion/react";
import { useInView } from "@/hooks/useInView";
import { Calendar, GraduationCap } from "lucide-react";

export function Education() {
  const [educationRef, educationInView] = useInView({ threshold: 0.1 });

  const education = [
    {
      year: "2013 – 2018",
      title: "BBA (Honors) in Global Supply Chain Management",
      company: "The Hong Kong Polytechnic University",
      description: "Comprehensive business education focusing on supply chain management, logistics, and international business operations.",
    },
    {
      year: "2002 – 2013",
      title: "High School Diploma",
      company: "Shanghai High School International Division",
      description: "International curriculum with a strong focus on mathematics, sciences, and multilingual education.",
    }
  ];

  return (
    <section id="education" ref={educationRef} className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={educationInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Academic background and qualifications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {education.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 30 }}
              animate={educationInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              {/* Gradient accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                {/* Icon/Year Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full text-white text-sm font-semibold shadow-lg">
                    <Calendar className="w-4 h-4" />
                    {item.year}
                  </div>
                  <GraduationCap className="w-8 h-8 text-orange-500 group-hover:scale-110 transition-transform" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                  {item.title}
                </h3>

                {/* Company/Institution */}
                <p className="text-base font-semibold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
                  {item.company}
                </p>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>

                {/* Decorative element */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-400/10 to-red-400/10 rounded-full blur-2xl transform translate-x-16 translate-y-16 group-hover:scale-150 transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
