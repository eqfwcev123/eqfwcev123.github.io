"use client";
import { motion } from "motion/react";
import { useInView } from "@/hooks/useInView";
import { Download, Mail, Code2, Briefcase, Sparkles, GraduationCap } from "lucide-react";

export function GlassTheme() {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [contentRef, contentInView] = useInView({ threshold: 0.1 });

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-400/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-6">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-8 py-4 shadow-2xl">
          <div className="flex justify-between items-center">
            <div className="font-bold text-white text-lg">Robert Lee</div>
            <div className="flex gap-6 text-sm text-white/90">
              {["About", "Work", "Skills", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center px-6 pt-32 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={heroInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-12 md:p-16 shadow-2xl"
          >
            <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-xl rounded-full mb-8 border border-white/30">
              <span className="text-white text-sm">Available for opportunities</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white">
              Software
              <br />
              Engineer
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Backend & Mobile Developer crafting scalable solutions
              <br />
              Based in Hong Kong 🇭🇰
            </p>

            <div className="flex gap-4 justify-center">
              <button className="px-8 py-4 bg-white/20 backdrop-blur-xl border border-white/30 text-white rounded-full font-medium hover:bg-white/30 transition-all shadow-lg flex items-center gap-2">
                <Download className="w-5 h-5" />
                Download CV
              </button>
              <button className="px-8 py-4 bg-white text-blue-600 rounded-full font-medium hover:bg-white/90 transition-all shadow-lg">
                View Projects
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section ref={contentRef} className="relative z-10 px-6 pb-20">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Expertise */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-10 shadow-2xl"
          >
            <h2 className="text-4xl font-bold text-white mb-8 text-center">Expertise</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Code2, title: "Backend Dev", desc: "Scalable APIs & server logic" },
                { icon: Briefcase, title: "Mobile Dev", desc: "Cross-platform applications" },
                { icon: Sparkles, title: "AI & CV", desc: "Machine learning solutions" },
              ].map((item, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all">
                  <div className="inline-flex p-4 bg-white/20 rounded-full mb-4">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/80">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={contentInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-10 shadow-2xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white/20 rounded-full">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Experience</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white">Software Engineer</h3>
                  <p className="text-white/80">LSCM Research & Development Centre</p>
                  <p className="text-sm text-white/60">2020 - Present</p>
                </div>
                <div className="space-y-2 text-white/90 text-sm">
                  <p>• CV pipeline reducing time by 75%</p>
                  <p>• Real-time traffic management system</p>
                  <p>• Flutter app for accessibility</p>
                </div>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={contentInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-10 shadow-2xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white/20 rounded-full">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Education</h2>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">BBA (Honors)</h3>
                <p className="text-white/80">Global Supply Chain Management</p>
                <p className="text-white/70 mt-1">Hong Kong Polytechnic University</p>
                <p className="text-sm text-white/60 mt-2">2013 - 2018</p>
              </div>
            </motion.div>
          </div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-10 shadow-2xl"
          >
            <h2 className="text-4xl font-bold text-white mb-8 text-center">Tech Stack</h2>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                "Python", "JavaScript", "TypeScript", "Java", "Dart",
                "Node.js", "Flutter", "Spring Boot", "Next.js",
                "Docker", "Git", "MongoDB", "MySQL"
              ].map((skill, i) => (
                <div
                  key={skill}
                  className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl px-4 py-3 text-center text-white font-medium hover:bg-white/20 transition-all"
                >
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Projects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-10 shadow-2xl"
          >
            <h2 className="text-4xl font-bold text-white mb-8 text-center">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Smart Sensor Data Management",
                "Autonomous Defect Inspection",
                "Smart Traffic Control System",
                "Solva - Q&A Platform",
                "Enus.ai - News Summarization",
                "Crypto Backtesting Platform"
              ].map((project, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all cursor-pointer"
                >
                  <h3 className="text-lg font-bold text-white mb-2">{project}</h3>
                  <span className="text-white/60 text-sm">View Details →</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-12 shadow-2xl text-center"
          >
            <h2 className="text-5xl font-bold text-white mb-4">Let's Connect</h2>
            <p className="text-xl text-white/80 mb-8">Open to new opportunities</p>
            <a
              href="mailto:dohyeonee95@hotmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-full font-medium hover:bg-white/90 transition-all shadow-lg"
            >
              <Mail className="w-5 h-5" />
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
