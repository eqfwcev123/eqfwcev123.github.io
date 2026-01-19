"use client";
import { motion } from "motion/react";
import { useInView } from "@/hooks/useInView";
import Link from "next/link";
import { Code2, ExternalLink, Sparkles, Briefcase, Github } from "lucide-react";
import { workProjects, sideProjects } from "@/data/projects";

export function Projects() {
  const [projectsRef, projectsInView] = useInView({ threshold: 0.1 });

  return (
    <section id="projects" ref={projectsRef} className="py-12 px-6 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Work Projects */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            className="text-4xl font-bold mb-2"
          >
            Work Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-gray-600 mb-8"
          >
            Professional work at LSCM Research & Development Centre
          </motion.p>

          <div className="grid grid-cols-12 gap-4">
            {workProjects.map((project, index) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className={`${
                  index % 4 === 0 || index % 4 === 3
                    ? "col-span-12 md:col-span-7"
                    : "col-span-12 md:col-span-5"
                } block`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  whileHover={{ y: -10, boxShadow: "0 20px 60px rgba(0,0,0,0.2)" }}
                  className={`h-full ${
                    index % 2 === 1
                      ? "bg-gradient-to-br from-purple-500 to-pink-500 text-white"
                      : "bg-white"
                  } rounded-3xl p-8 border border-gray-200 hover:shadow-xl transition-all group cursor-pointer relative overflow-hidden`}
                >
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`w-12 h-12 ${
                          index % 2 === 1 ? "bg-white/20" : "bg-blue-100"
                        } rounded-2xl flex items-center justify-center`}
                      >
                        {index === 0 && <Code2 className={`w-6 h-6 ${index % 2 === 1 ? "text-white" : "text-blue-600"}`} />}
                        {index === 1 && <Sparkles className="w-6 h-6 text-white" />}
                        {index === 2 && <Briefcase className="w-6 h-6 text-orange-600" />}
                        {index === 3 && <div className="text-2xl">📱</div>}
                      </div>
                      <ExternalLink
                        className={`w-5 h-5 ${
                          index % 2 === 1
                            ? "text-white/60 group-hover:text-white"
                            : "text-gray-400 group-hover:text-orange-600"
                        } transition-colors`}
                      />
                    </div>

                    <h3 className={`text-xl font-bold mb-2 ${index % 2 === 0 ? "group-hover:text-orange-600" : ""} transition-colors`}>
                      {project.title}
                    </h3>

                    <p className={`text-sm mb-4 ${index % 2 === 1 ? "text-white/90" : "text-gray-600"}`}>
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className={`text-xs px-3 py-1 rounded-full ${
                            index % 2 === 1 ? "bg-white/20 text-white" : "bg-blue-50 text-blue-700"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>

        {/* Personal Projects */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="text-4xl font-bold mb-2"
          >
            Personal Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="text-gray-600 mb-8"
          >
            Side projects and independent ventures
          </motion.p>

          <div className="grid grid-cols-12 gap-4">
            {sideProjects.map((project, index) => {
              return (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className={`${
                    index % 4 === 0 || index % 4 === 3
                      ? "col-span-12 md:col-span-7"
                      : "col-span-12 md:col-span-5"
                  } block`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ y: -10, boxShadow: "0 20px 60px rgba(0,0,0,0.2)" }}
                    className={`${
                      index === 1
                        ? "bg-gradient-to-br from-indigo-500 to-purple-500 text-white"
                        : "bg-white"
                    } rounded-3xl p-8 border border-gray-200 hover:shadow-xl transition-all group cursor-pointer relative overflow-hidden h-full`}
                  >
                    {index === 1 && (
                      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}

                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div className="text-4xl">{index === 0 ? "💬" : index === 1 ? "🤖" : "📈"}</div>
                        <ExternalLink
                          className={`w-5 h-5 ${
                            index === 1
                              ? "text-white/60 group-hover:text-white"
                              : "text-gray-400 group-hover:text-orange-600"
                          } transition-colors`}
                        />
                      </div>

                      <h3
                        className={`text-xl font-bold mb-2 ${
                          index !== 1 ? "group-hover:text-orange-600" : ""
                        } transition-colors`}
                      >
                        {project.title}
                      </h3>

                      <p className={`text-sm mb-4 ${index === 1 ? "text-white/90" : "text-gray-600"}`}>
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className={`text-xs px-3 py-1 rounded-full ${
                              index === 1 ? "bg-white/20 text-white" : "bg-green-50 text-green-700"
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </Link>
              );
            })}

            {/* Projects Count CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={projectsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
              whileHover={{ scale: 1.02 }}
              className="col-span-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl p-12 text-white text-center relative overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-3">More Projects Coming Soon</h3>
                <p className="text-white/90 mb-6">
                  Currently working on exciting new ventures in AI and blockchain technology
                </p>
                <a
                  href="https://github.com/eqfwcev123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-orange-600 rounded-full font-medium hover:bg-orange-50 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  View GitHub Profile
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
