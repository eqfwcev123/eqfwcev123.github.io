"use client";
import { motion } from "motion/react";
import { useInView } from "@/hooks/useInView";
import { Mail, Github, Linkedin, ExternalLink } from "lucide-react";

export function Contact() {
  const [contactRef, contactInView] = useInView({ threshold: 0.1 });

  return (
    <section id="contact" ref={contactRef} className="py-12 px-6 pb-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-6">
          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={contactInView ? { opacity: 1, y: 0 } : {}}
            whileHover={{ scale: 1.02 }}
            className="col-span-12 md:col-span-6 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 rounded-3xl p-12 text-white relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32 group-hover:scale-150 transition-transform duration-700" />
            <div className="relative z-10">
              <h2 className="text-5xl font-bold mb-6">Let&apos;s Work Together</h2>
              <p className="text-xl text-white/90 mb-8">Open to new opportunities and collaborations</p>
              <motion.a
                href="mailto:dohyeonee95@hotmail.com"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 rounded-full font-medium hover:bg-purple-50 transition-colors"
              >
                <Mail className="w-5 h-5" />
                dohyeonee95@hotmail.com
              </motion.a>
            </div>
          </motion.div>

          {/* Connect with Me */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={contactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="col-span-12 md:col-span-6 bg-white rounded-3xl p-8 border border-gray-200"
          >
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
              Connect with Me
            </h3>
            
            {/* Social Links */}
            <div className="space-y-4 mb-8">
              <motion.a
                href="https://github.com/eqfwcev123"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, x: 5 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 transition-all group"
              >
                <div className="p-3 rounded-xl bg-gray-900 text-white group-hover:scale-110 transition-transform">
                  <Github className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <p className="font-semibold text-gray-900">GitHub</p>
                  <p className="text-sm text-gray-500">@eqfwcev123</p>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/robert-lee-06434467"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, x: 5 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 hover:from-blue-100 hover:to-cyan-100 transition-all group"
              >
                <div className="p-3 rounded-xl bg-blue-600 text-white group-hover:scale-110 transition-transform">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <p className="font-semibold text-gray-900">LinkedIn</p>
                  <p className="text-sm text-gray-500">Connect with me</p>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600" />
              </motion.a>

              <motion.a
                href="mailto:dohyeonee95@hotmail.com"
                whileHover={{ scale: 1.03, x: 5 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 transition-all group"
              >
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 text-white group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-sm text-gray-500">dohyeonee95@hotmail.com</p>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-purple-600" />
              </motion.a>
            </div>

            {/* Availability Status */}
            <div className="pt-6 border-t border-gray-200">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                </div>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-900">Available for opportunities</span> • Open to full-time roles
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
