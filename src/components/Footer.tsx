"use client";
import { motion } from "motion/react";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex justify-center gap-6 mb-6">
          <motion.a
            href="https://github.com/eqfwcev123"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -5 }}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github className="w-6 h-6" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/robert-lee-06434467"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -5 }}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </motion.a>
          <motion.a
            href="mailto:dohyeonee95@hotmail.com"
            whileHover={{ scale: 1.2, y: -5 }}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Mail className="w-6 h-6" />
          </motion.a>
        </div>
        <p className="text-gray-400 text-sm">
          © 2026 Robert Lee. Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
