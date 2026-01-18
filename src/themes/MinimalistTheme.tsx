"use client";
import { motion } from "motion/react";
import { useInView } from "@/hooks/useInView";
import { Download, Mail, Github, Linkedin } from "lucide-react";

export function MinimalistTheme() {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [aboutRef, aboutInView] = useInView({ threshold: 0.1 });
  const [expRef, expInView] = useInView({ threshold: 0.1 });
  const [skillsRef, skillsInView] = useInView({ threshold: 0.1 });
  const [projectsRef, projectsInView] = useInView({ threshold: 0.1 });
  const [contactRef, contactInView] = useInView({ threshold: 0.1 });

  return (
    <div className="min-h-screen bg-white">
      {/* Minimal Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-b border-gray-200 z-40">
        <nav className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-mono text-sm font-medium">Robert Lee</div>
          <div className="flex gap-6 text-sm">
            <a href="#about" className="hover:text-gray-600 transition-colors">About</a>
            <a href="#work" className="hover:text-gray-600 transition-colors">Work</a>
            <a href="#skills" className="hover:text-gray-600 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-gray-600 transition-colors">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-light mb-8 tracking-tight"
          >
            Software
            <br />
            Engineer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl text-gray-600 mb-8 max-w-2xl font-light leading-relaxed"
          >
            Backend & Mobile Developer specializing in scalable server solutions
            and AI applications. Based in Hong Kong.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex gap-4"
          >
            <button className="px-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors text-sm flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download CV
            </button>
            <button className="px-6 py-3 border border-black hover:bg-black hover:text-white transition-colors text-sm">
              View Projects
            </button>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" ref={aboutRef} className="py-32 px-6 border-t border-gray-200">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-mono mb-4 text-gray-500">01 / EXPERTISE</h2>
            <h3 className="text-4xl font-light mb-6">Areas of Focus</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-2">Backend Development</h4>
                <p className="text-gray-600 font-light">
                  Building robust server-side applications and APIs
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Mobile Development</h4>
                <p className="text-gray-600 font-light">
                  Crafting functional mobile applications
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">AI & Computer Vision</h4>
                <p className="text-gray-600 font-light">
                  Exploring AI applications and CV techniques
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h2 className="text-sm font-mono mb-4 text-gray-500">02 / EDUCATION</h2>
            <h3 className="text-4xl font-light mb-6">Background</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-1">BBA (Honors)</h4>
                <p className="text-sm text-gray-600 mb-1">Global Supply Chain Management</p>
                <p className="text-sm text-gray-500">Hong Kong Polytechnic University</p>
                <p className="text-sm text-gray-400">2013 – 2018</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience */}
      <section id="work" ref={expRef} className="py-32 px-6 border-t border-gray-200 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={expInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-mono mb-8 text-gray-500">03 / EXPERIENCE</h2>
            <div className="space-y-12">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-light mb-1">Software Engineer</h3>
                    <p className="text-gray-600">LSCM Research & Development Centre</p>
                  </div>
                  <p className="text-sm text-gray-500">2020 – Present</p>
                </div>
                <ul className="space-y-2 text-gray-600 font-light">
                  <li>• Computer vision pipeline reducing processing time by 75%</li>
                  <li>• Real-time traffic management backend system</li>
                  <li>• Flutter mobile app for visually impaired users</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" ref={skillsRef} className="py-32 px-6 border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={skillsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-mono mb-8 text-gray-500">04 / SKILLS</h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div>
                <h3 className="font-medium mb-4">Languages</h3>
                <ul className="space-y-2 text-gray-600 font-light text-sm">
                  <li>Python</li>
                  <li>JavaScript / TypeScript</li>
                  <li>Java</li>
                  <li>Dart</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-4">Frameworks</h3>
                <ul className="space-y-2 text-gray-600 font-light text-sm">
                  <li>Node.js / Express</li>
                  <li>Spring Boot</li>
                  <li>Flutter</li>
                  <li>Next.js</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-4">Tools</h3>
                <ul className="space-y-2 text-gray-600 font-light text-sm">
                  <li>Git</li>
                  <li>Docker</li>
                  <li>MongoDB</li>
                  <li>MySQL</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" ref={projectsRef} className="py-32 px-6 border-t border-gray-200 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-mono mb-8 text-gray-500">05 / SELECTED WORK</h2>
            <div className="space-y-8">
              {[
                "Smart Sensor Data Management System",
                "Autonomous Defect Inspection System",
                "Smart Traffic Control System",
                "Solva - Q&A Platform",
                "Enus.ai - News Summarization",
              ].map((project, i) => (
                <div key={i} className="border-b border-gray-200 pb-4 hover:border-black transition-colors cursor-pointer group">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-light group-hover:translate-x-2 transition-transform">
                      {project}
                    </h3>
                    <span className="text-2xl group-hover:translate-x-2 transition-transform">→</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" ref={contactRef} className="py-32 px-6 border-t border-gray-200">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={contactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-mono mb-8 text-gray-500">06 / GET IN TOUCH</h2>
            <h3 className="text-5xl font-light mb-8">Let's Connect</h3>
            <p className="text-gray-600 mb-12 max-w-2xl mx-auto font-light">
              Available for new opportunities and collaborations
            </p>
            <div className="flex gap-8 justify-center items-center mb-12">
              <a href="mailto:dohyeonee95@hotmail.com" className="flex items-center gap-2 hover:text-gray-600 transition-colors">
                <Mail className="w-5 h-5" />
                <span className="text-sm">Email</span>
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-gray-600 transition-colors">
                <Linkedin className="w-5 h-5" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-gray-600 transition-colors">
                <Github className="w-5 h-5" />
                <span className="text-sm">GitHub</span>
              </a>
            </div>
            <p className="text-xs text-gray-400">© 2025 Robert Lee</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
