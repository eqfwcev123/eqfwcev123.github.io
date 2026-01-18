"use client";
import { motion } from "motion/react";
import { useInView } from "@/hooks/useInView";
import { Code2, Wrench, Database } from "lucide-react";

export function TechStack() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const skillLevels = [
    { label: "Entry", color: "bg-blue-200", width: "w-1/4" },
    {
      label: "Intermediate",
      color: "bg-blue-400",
      width: "w-1/2",
    },
    { label: "Advanced", color: "bg-blue-600", width: "w-3/4" },
  ];

  const programmingLanguages = [
    {
      name: "Python",
      level: 85,
      icon: "🐍",
      relatedTech: ["NumPy", "Flask", "OpenCV"],
    },
    {
      name: "JavaScript / TypeScript",
      level: 75,
      icon: "⚡",
      relatedTech: ["Node.js", "Next.js", "React"],
    },
    {
      name: "Java",
      level: 70,
      icon: "☕",
      relatedTech: ["Spring", "Spring Boot"],
    },
    {
      name: "Dart",
      level: 80,
      icon: "🎯",
      relatedTech: ["Flutter"],
    },
  ];

  const tools = [
    { name: "Git", level: 75 },
    { name: "Docker", level: 70 },
    { name: "Ubuntu", level: 65 },
  ];

  const databases = [
    { name: "MongoDB", level: 70 },
    { name: "MySQL", level: 65 },
  ];

  const SkillBar = ({
    name,
    level,
    delay = 0,
  }: {
    name: string;
    level: number;
    delay?: number;
  }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
      className="mb-6"
    >
      <div className="flex justify-between mb-2">
        <span className="font-medium text-gray-700">
          {name}
        </span>
        <span className="text-sm text-gray-500">{level}%</span>
      </div>
      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{
            delay: delay + 0.2,
            duration: 1,
            ease: "easeOut",
          }}
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
        </motion.div>
      </div>
    </motion.div>
  );

  return (
    <section
      id="tech-stack"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            My Tech Stack
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Technologies and frameworks I work with to build
            modern applications
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Skill Level Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-6 mb-16"
        >
          {skillLevels.map((level) => (
            <div
              key={level.label}
              className="flex items-center gap-2"
            >
              <div
                className={`${level.width} h-2 ${level.color} rounded-full`}
                style={{ width: "60px" }}
              />
              <span className="text-sm text-gray-600">
                {level.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Programming Languages */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="p-2 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Programming Languages
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {programmingLanguages.map((lang, index) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: 0.4 + index * 0.1,
                  duration: 0.5,
                }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {lang.icon}
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-bold text-gray-900 text-lg mb-1">
                      {lang.name}
                    </h4>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={
                          isInView
                            ? { width: `${lang.level}%` }
                            : {}
                        }
                        transition={{
                          delay: 0.6 + index * 0.1,
                          duration: 1,
                        }}
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm text-gray-500 font-medium">
                    Related Technologies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {lang.relatedTech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 rounded-lg text-sm border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tools & DevOps */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="p-2 rounded-xl bg-gradient-to-br from-orange-500 to-red-500">
              <Wrench className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Tools & DevOps
            </h3>
          </motion.div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.map((tool, index) => (
                <SkillBar
                  key={tool.name}
                  name={tool.name}
                  level={tool.level}
                  delay={0.6 + index * 0.1}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Databases */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="p-2 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600">
              <Database className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Databases
            </h3>
          </motion.div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="grid md:grid-cols-2 gap-6">
              {databases.map((db, index) => (
                <SkillBar
                  key={db.name}
                  name={db.name}
                  level={db.level}
                  delay={0.8 + index * 0.1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
}
