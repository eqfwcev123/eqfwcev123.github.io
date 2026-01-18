"use client";
import { motion } from "motion/react";
import { useInView } from "@/hooks/useInView";
import { Mail, MapPin, Linkedin, Github, Send } from "lucide-react";

export function Contact() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Let&apos;s Connect
          </h2>

          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Ready to collaborate on exciting projects or discuss opportunities
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Send className="w-6 h-6 text-blue-400" />
              Get in Touch
            </h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Available for new opportunities and collaborations
            </p>

            <div className="space-y-6">
              <motion.a
                href="mailto:dohyeonee95@hotmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300 border border-white/10 hover:border-blue-400/50 group"
              >
                <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-white font-medium">
                    dohyeonee95@hotmail.com
                  </p>
                </div>
              </motion.a>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10"
              >
                <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-white font-medium">Hong Kong</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Social Links & Quick Contact */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Connect with Me
            </h3>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center justify-center p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:border-blue-400/50 hover:bg-white/15 transition-all duration-300 group"
              >
                <div className="p-4 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Linkedin className="w-8 h-8 text-white" />
                </div>
                <span className="text-white font-medium">LinkedIn</span>
              </motion.a>

              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center justify-center p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:border-purple-400/50 hover:bg-white/15 transition-all duration-300 group"
              >
                <div className="p-4 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Github className="w-8 h-8 text-white" />
                </div>
                <span className="text-white font-medium">GitHub</span>
              </motion.a>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-center"
            >
              <p className="text-white font-medium text-lg mb-2">
                Let&apos;s build something amazing together!
              </p>

              <p className="text-blue-100 text-sm">
                Feel free to reach out for collaborations or just a friendly chat
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 pt-8 border-t border-white/10 text-center"
        >
          <p className="text-gray-400 text-sm">
            © 2025 Robert Lee. Built with Next.js and Material Design principles.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
