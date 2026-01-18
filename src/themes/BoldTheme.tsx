"use client";
import { motion } from "motion/react";
import { useInView } from "@/hooks/useInView";
import { Download, Mail, Zap, Rocket, Star, Heart } from "lucide-react";

export function BoldTheme() {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <div className="min-h-screen bg-yellow-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-black bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            RL
          </div>
          <div className="flex gap-6 font-bold text-sm">
            {["About", "Work", "Skills", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-800 hover:text-pink-500 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center px-6 pt-20 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={heroInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.8, type: "spring" }}
            className="mb-12"
          >
            <div className="inline-block px-8 py-3 bg-yellow-400 text-black font-black text-sm rounded-full mb-8 transform -rotate-2 shadow-xl">
              🚀 AVAILABLE FOR HIRE!
            </div>

            <h1 className="text-7xl md:text-9xl font-black mb-6 text-white leading-none">
              I BUILD
              <br />
              <span className="bg-yellow-400 text-pink-600 px-6 inline-block transform rotate-1">
                AWESOME
              </span>
              <br />
              SOFTWARE
            </h1>

            <p className="text-2xl md:text-3xl font-bold text-white mb-12">
              Backend • Mobile • AI • Based in 🇭🇰
            </p>

            <div className="flex gap-4 justify-center flex-wrap">
              <button className="px-10 py-5 bg-yellow-400 text-black font-black text-lg rounded-full hover:bg-yellow-300 transition-all shadow-2xl hover:shadow-yellow-400/50 transform hover:scale-105 flex items-center gap-3">
                <Download className="w-6 h-6" />
                DOWNLOAD CV
              </button>
              <button className="px-10 py-5 bg-white text-purple-600 font-black text-lg rounded-full hover:bg-gray-100 transition-all shadow-2xl transform hover:scale-105 flex items-center gap-3">
                <Rocket className="w-6 h-6" />
                SEE PROJECTS
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex gap-8 justify-center text-white font-black"
          >
            <div className="text-center">
              <div className="text-6xl mb-2">4.5+</div>
              <div className="text-lg">YEARS</div>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-2">8+</div>
              <div className="text-lg">PROJECTS</div>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-2">∞</div>
              <div className="text-lg">IDEAS</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expertise */}
      <section id="about" ref={ref} className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-6xl md:text-8xl font-black mb-16 text-center"
          >
            WHAT I DO
            <span className="text-pink-500">!</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "💻",
                title: "BACKEND",
                desc: "Building rock-solid APIs and server magic",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: "📱",
                title: "MOBILE",
                desc: "Creating apps that people love to use",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: "🤖",
                title: "AI & CV",
                desc: "Making machines see and think smart",
                color: "from-orange-500 to-red-500",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50, rotate: -5 }}
                animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className={`bg-gradient-to-br ${item.color} rounded-3xl p-8 text-white shadow-2xl transform hover:scale-105 transition-all`}
              >
                <div className="text-6xl mb-4">{item.icon}</div>
                <h3 className="text-3xl font-black mb-3">{item.title}</h3>
                <p className="text-lg font-bold opacity-90">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="work" className="py-20 px-6 bg-gradient-to-br from-yellow-400 via-orange-400 to-pink-500">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl md:text-8xl font-black mb-12 text-white text-center">
            MY JOURNEY
          </h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-10 shadow-2xl"
          >
            <div className="flex items-start gap-6">
              <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <div className="flex-grow">
                <h3 className="text-3xl font-black mb-2">SOFTWARE ENGINEER</h3>
                <p className="text-xl font-bold text-pink-600 mb-2">
                  LSCM Research & Development Centre
                </p>
                <p className="font-bold text-gray-600 mb-6">2020 - NOW • Hong Kong</p>
                
                <div className="space-y-3 font-bold text-gray-700">
                  <div className="flex gap-3">
                    <span className="text-2xl">⚡</span>
                    <p>Built CV pipeline - 75% FASTER!</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-2xl">🚦</span>
                    <p>Real-time traffic system that WORKS</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-2xl">📱</span>
                    <p>Flutter app helping visually impaired users</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl md:text-8xl font-black mb-12 text-center">
            MY TOOLBOX
            <span className="text-blue-500">!</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "PYTHON", color: "bg-blue-500" },
              { name: "JAVASCRIPT", color: "bg-yellow-400" },
              { name: "JAVA", color: "bg-red-500" },
              { name: "DART", color: "bg-cyan-500" },
              { name: "NODE.JS", color: "bg-green-500" },
              { name: "FLUTTER", color: "bg-blue-400" },
              { name: "SPRING BOOT", color: "bg-green-600" },
              { name: "NEXT.JS", color: "bg-gray-800" },
              { name: "DOCKER", color: "bg-blue-600" },
              { name: "GIT", color: "bg-orange-500" },
              { name: "MONGODB", color: "bg-green-500" },
              { name: "MYSQL", color: "bg-blue-500" },
            ].map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className={`${skill.color} text-white rounded-2xl p-6 text-center font-black text-lg shadow-xl transform hover:scale-110 transition-all cursor-pointer`}
              >
                {skill.name}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl md:text-8xl font-black mb-12 text-white text-center">
            COOL STUFF
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: "Smart Sensor System", emoji: "📊" },
              { name: "Defect Inspection AI", emoji: "🔍" },
              { name: "Traffic Control", emoji: "🚦" },
              { name: "Solva Q&A Platform", emoji: "💬" },
              { name: "Enus.ai News Bot", emoji: "📰" },
              { name: "Crypto Backtesting", emoji: "📈" },
            ].map((project, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-all cursor-pointer"
              >
                <div className="text-5xl mb-4">{project.emoji}</div>
                <h3 className="text-2xl font-black">{project.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 bg-yellow-400">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-8">
              <Star className="w-20 h-20 text-pink-500 animate-spin" style={{ animationDuration: "3s" }} />
            </div>
            <h2 className="text-7xl md:text-9xl font-black mb-6">
              LET'S TALK
              <span className="text-pink-500">!</span>
            </h2>
            <p className="text-2xl font-bold mb-12">
              Got an exciting project? Let's make it happen! 🚀
            </p>
            <a
              href="mailto:dohyeonee95@hotmail.com"
              className="inline-flex items-center gap-3 px-12 py-6 bg-pink-500 text-white font-black text-xl rounded-full shadow-2xl hover:bg-pink-600 transition-all transform hover:scale-110"
            >
              <Mail className="w-6 h-6" />
              HIT ME UP!
            </a>

            <p className="mt-12 font-black text-gray-800">
              © 2025 ROBERT LEE • MADE WITH <Heart className="w-5 h-5 inline text-pink-500 fill-pink-500" /> IN HONG KONG
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
