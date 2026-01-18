"use client";
import { motion } from "motion/react";
import { useInView } from "@/hooks/useInView";
import { Briefcase, MapPin, Calendar, CheckCircle2 } from "lucide-react";

export function Experience() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const achievements = [
    "Designed and implemented a computer vision pipeline that automated quality control, reducing processing time by 75%",
    "Developed a real-time traffic management backend system that dynamically adjusts traffic signals based on computer vision analytics, reducing congestion in key intersections",
    "Led development of a mobile application in Flutter/Dart that uses IoT devices to detect approaching objects and provide audio alerts to visually impaired users, enhancing pedestrian safety",
  ];

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Professional journey and key achievements in software engineering
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6 rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative"
        >
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 overflow-hidden group">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-purple-600" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-16 translate-x-16 opacity-50 group-hover:scale-150 transition-transform duration-500" />

            {/* Header */}
            <div className="relative mb-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 group-hover:scale-110 transition-transform duration-300">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>

                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                      Software Engineer
                    </h3>
                    <p className="text-lg md:text-xl font-semibold text-blue-600 mb-4">
                      LSCM Research & Development Centre
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-2 text-sm md:text-base">
                  <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-lg">
                    <Calendar className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700 whitespace-nowrap">
                      2020 October – Present
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-purple-50 px-4 py-2 rounded-lg">
                    <MapPin className="w-4 h-4 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">Hong Kong</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="relative">
              <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full" />
                Key Achievements & Responsibilities
              </h4>

              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    className="flex gap-4 group/item"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="p-1 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 group-hover/item:scale-110 transition-transform duration-300">
                        <CheckCircle2 className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed group-hover/item:text-gray-900 transition-colors">
                      {achievement}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
