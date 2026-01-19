"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { Briefcase, Download, Sparkles } from "lucide-react";
import { useInView } from "@/hooks/useInView";

export function Hero() {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const { scrollY } = useScroll();
  const parallaxOrange = useTransform(scrollY, (value) => value * 0.5);
  const parallaxPurple = useTransform(scrollY, (value) => value * 0.3);
  return (
    <section id="hero" ref={heroRef} className="pt-32 pb-12 px-6 relative overflow-hidden">
          {/* Parallax Background Elements */}
          <motion.div
            style={{ y: parallaxOrange }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl"
          />
          <motion.div
            style={{ y: parallaxPurple }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"
          />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-12 gap-4 auto-rows-auto">
              {/* Main Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6 }}
                className="col-span-12 md:col-span-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl p-12 text-white relative overflow-hidden group min-h-[400px]"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32 group-hover:scale-150 transition-transform duration-700" />
                <div className="relative z-10 flex flex-col justify-center h-full">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={heroInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 }}
                    className="text-sm mb-4 opacity-90 font-medium tracking-wide"
                  >
                    SOFTWARE ENGINEER
                  </motion.div>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={heroInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 }}
                    className="text-6xl md:text-7xl font-bold mb-6 leading-tight"
                  >
                    Robert
                    <br />
                    Lee
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={heroInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 }}
                    className="text-xl opacity-90 max-w-xl mb-8"
                  >
                    Backend & Mobile Developer crafting scalable solutions with AI
                  </motion.p>
                  <motion.a
                    href="/robert_cv.pdf"
                    download
                    initial={{ opacity: 0, y: 20 }}
                    animate={heroInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-orange-600 rounded-full font-medium hover:bg-orange-50 transition-colors w-fit shadow-lg shadow-orange-900/10"
                  >
                    <Download className="w-4 h-4" />
                    Download CV
                  </motion.a>
                </div>
              </motion.div>

              {/* Location Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                className="col-span-6 md:col-span-4 relative rounded-3xl overflow-hidden min-h-[200px] border border-gray-200 hover:shadow-xl transition-all group"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: "url('/hk.webp')" }}
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white">
                  <h3 className="text-xl font-medium mb-1 opacity-90">Based in</h3>
                  <p className="text-3xl font-bold">Hong Kong</p>
                </div>
              </motion.div>

              {/* Experience Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                className="col-span-6 md:col-span-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl p-8 text-white hover:shadow-xl transition-all flex flex-col justify-center min-h-[200px]"
              >
                <Sparkles className="w-8 h-8 mb-4 opacity-80" />
                <div className="text-5xl font-bold mb-2">
                  4.5<span className="text-3xl">+</span>
                </div>
                <p className="text-white/90">Years Experience</p>
              </motion.div>

              {/* Current Role Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                className="col-span-12 md:col-span-8 bg-gray-900 rounded-3xl p-8 text-white hover:shadow-xl transition-all flex flex-col justify-center min-h-[200px]"
              >
                <Briefcase className="w-8 h-8 mb-4 text-orange-400" />
                <h3 className="text-2xl font-bold mb-2">Software Engineer</h3>
                <p className="text-gray-400 mb-1">LSCM Research & Development Centre</p>
                <p className="text-sm text-gray-500">2020 – Present</p>
              </motion.div>
            </div>
          </div>
        </section>
  );
}
