"use client";
import { motion } from "motion/react";
import { useInView } from "@/hooks/useInView";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiFlutter,
  SiMongodb,
  SiMysql,
  SiDocker,
  SiReact,
  SiNextdotjs,
  SiOpencv,
} from "react-icons/si";

export function TechStack() {
  const [skillsRef, skillsInView] = useInView({ threshold: 0.1 });

  return (
    <section id="skills" ref={skillsRef} className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={skillsInView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl font-bold mb-8"
        >
          Tech Stack
        </motion.h2>

        <div className="grid grid-cols-12 gap-4">
          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={skillsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="col-span-12 md:col-span-6 bg-white rounded-3xl p-8 border border-gray-200 hover:shadow-xl transition-all"
          >
            <h3 className="text-xl font-bold mb-6">Languages</h3>
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: SiPython, name: "Python", color: "#3776AB" },
                { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
                { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
              ].map((lang) => (
                <div
                  key={lang.name}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <lang.icon size={40} color={lang.color} />
                  <span className="text-sm font-medium">{lang.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Frameworks */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={skillsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="col-span-12 md:col-span-6 bg-white rounded-3xl p-8 border border-gray-200 hover:shadow-xl transition-all"
          >
            <h3 className="text-xl font-bold mb-6">Frameworks & Tools</h3>
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
                { icon: SiFlutter, name: "Flutter", color: "#02569B" },
                { icon: SiReact, name: "React", color: "#61DAFB" },
                { icon: SiNextdotjs, name: "Next.js", color: "#000000" },
                { icon: SiDocker, name: "Docker", color: "#2496ED" },
                { icon: SiOpencv, name: "OpenCV", color: "#5C3EE8" },
              ].map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <tech.icon size={40} color={tech.color} />
                  <span className="text-sm font-medium text-center">{tech.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Databases */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={skillsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="col-span-12 md:col-span-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-8 text-white hover:shadow-xl transition-all"
          >
            <h3 className="text-xl font-bold mb-4">Databases</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <SiMongodb size={24} />
                <span className="text-white/90">MongoDB</span>
              </div>
              <div className="flex items-center gap-3">
                <SiMysql size={24} />
                <span className="text-white/90">MySQL</span>
              </div>
            </div>
          </motion.div>

          {/* Achievement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={skillsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="col-span-12 md:col-span-8 bg-gray-900 rounded-3xl p-8 text-white hover:shadow-xl transition-all"
          >
            <h3 className="text-xl font-bold mb-4">Key Achievement</h3>
            <p className="text-gray-300">
              Designed computer vision pipeline that automated quality control,
              <span className="text-orange-400 font-bold"> reducing processing time by 75%</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
