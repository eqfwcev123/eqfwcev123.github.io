"use client";
import { motion } from "motion/react";
import { useInView } from "@/hooks/useInView";
import { Download, Code2, Briefcase, GraduationCap, Zap, Mail, MapPin } from "lucide-react";

export function DarkTheme() {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [expertiseRef, expertiseInView] = useInView({ threshold: 0.1 });
  const [experienceRef, experienceInView] = useInView({ threshold: 0.1 });
  const [projectsRef, projectsInView] = useInView({ threshold: 0.1 });
  const [skillsRef, skillsInView] = useInView({ threshold: 0.1 });

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-lg border-b border-purple-500/20 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold">
            <span className="text-purple-400">&lt;</span>
            Robert Lee
            <span className="text-purple-400">/&gt;</span>
          </div>
          <div className="flex gap-6">
            {["About", "Work", "Skills", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 -top-48 -left-48 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-pink-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-block p-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 mb-6">
              <div className="px-6 py-2 bg-gray-950 rounded-full">
                <span className="text-sm text-purple-400">Available for work</span>
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-6xl md:text-8xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Software Engineer
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto"
          >
            Backend & Mobile Developer crafting scalable solutions with AI and
            Computer Vision. Based in Hong Kong 🇭🇰
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex gap-4 justify-center"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download CV
            </button>
            <button className="px-8 py-4 border border-purple-500 rounded-lg font-medium hover:bg-purple-500/10 transition-colors">
              View Work
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ delay: 1, duration: 1 }}
            className="mt-16 flex gap-12 justify-center text-sm"
          >
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-1">4+</div>
              <div className="text-gray-500">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-pink-400 mb-1">8+</div>
              <div className="text-gray-500">Projects</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expertise */}
      <section id="about" ref={expertiseRef} className="py-32 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={expertiseInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-purple-400">//</span> Expertise
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Code2,
                title: "Backend Development",
                desc: "Scalable server-side applications and APIs",
                color: "from-purple-500 to-purple-700",
              },
              {
                icon: Briefcase,
                title: "Mobile Development",
                desc: "Cross-platform mobile applications",
                color: "from-pink-500 to-pink-700",
              },
              {
                icon: Zap,
                title: "AI & Computer Vision",
                desc: "Machine learning and CV solutions",
                color: "from-purple-500 to-pink-500",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={expertiseInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="group relative bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${item.color} mb-6`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="work" ref={experienceRef} className="py-32 px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={experienceInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              <span className="text-purple-400">//</span> Experience
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={experienceInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-gray-900 border border-gray-800 rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500" />
            
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg">
                <Briefcase className="w-6 h-6" />
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-1">Software Engineer</h3>
                <p className="text-purple-400 mb-2">LSCM Research & Development Centre</p>
                <p className="text-sm text-gray-500">2020 October – Present • Hong Kong</p>
              </div>
            </div>

            <div className="space-y-3 text-gray-300">
              <div className="flex gap-3">
                <span className="text-purple-400 mt-1">▸</span>
                <p>Computer vision pipeline reducing processing time by 75%</p>
              </div>
              <div className="flex gap-3">
                <span className="text-purple-400 mt-1">▸</span>
                <p>Real-time traffic management backend system</p>
              </div>
              <div className="flex gap-3">
                <span className="text-purple-400 mt-1">▸</span>
                <p>Flutter mobile app for visually impaired users</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" ref={projectsRef} className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              <span className="text-purple-400">//</span> Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Smart Sensor Data Management System",
              "Autonomous Defect Inspection",
              "Smart Traffic Control System",
              "Solva - Reward Q&A Platform",
              "Enus.ai - News Summarization",
              "Crypto Backtesting Platform",
            ].map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-purple-500/50 transition-all cursor-pointer"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold group-hover:text-purple-400 transition-colors">
                    {project}
                  </h3>
                  <span className="text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {["Python", "Node.js", "Flutter"].slice(0, 2).map((tech) => (
                    <span key={tech} className="text-xs px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" ref={skillsRef} className="py-32 px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={skillsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              <span className="text-purple-400">//</span> Tech Stack
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-4 gap-4">
            {["Python", "JavaScript", "Java", "Dart", "Node.js", "Flutter", "Spring Boot", "Next.js", "MongoDB", "MySQL", "Docker", "Git"].map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={skillsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="bg-gray-900 border border-gray-800 rounded-lg p-4 text-center hover:border-purple-500/50 hover:bg-purple-500/5 transition-all"
              >
                <span className="font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-6 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold mb-6">
              Let's <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Connect</span>
            </h2>
            <p className="text-gray-400 mb-12 text-lg">
              Open to new opportunities and collaborations
            </p>

            <div className="flex gap-6 justify-center mb-12">
              <a href="mailto:dohyeonee95@hotmail.com" className="flex items-center gap-2 px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors">
                <Mail className="w-5 h-5" />
                <span>Email Me</span>
              </a>
            </div>

            <div className="flex gap-2 items-center justify-center text-gray-500 mb-8">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Hong Kong</span>
            </div>

            <p className="text-xs text-gray-600">© 2025 Robert Lee • Built with React</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
