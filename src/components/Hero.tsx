"use client";
import { motion } from "motion/react";
import { Download, MapPin } from "lucide-react";
import heroImage from "../assets/8bfdf2af588b37d7be795e0a03d73d33b41d6e53.png";
import Image from 'next/image';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage.src}
          alt="Hong Kong Skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-block"
        >
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-white p-1">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center overflow-hidden">
                  <div className="w-28 h-28 rounded-full bg-cover bg-center" 
                       style={{ backgroundImage: `url(${heroImage.src})` }} />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
              <span className="text-white text-lg">👋</span>
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-white mb-4"
        >
          <span className="text-xl md:text-2xl font-normal mb-2 block">
            Hi! I&apos;m Robert 👋
          </span>
          <span className="text-4xl md:text-6xl lg:text-7xl font-bold block bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            Software Engineer
          </span>
          <span className="text-2xl md:text-3xl lg:text-4xl font-light mt-2 block text-blue-300">
            in Hong Kong
          </span>
        </motion.h1>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed"
        >
          I specialize in backend and mobile development, crafting reliable
          server-side logic, APIs, and database solutions to drive application
          functionality.
        </motion.p>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2">
            <Download className="w-5 h-5 group-hover:animate-bounce" />
            Download CV
            <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>

          <div className="flex items-center gap-2 text-white/90 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
            <MapPin className="w-5 h-5 text-blue-400" />
            <span>Hong Kong</span>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
