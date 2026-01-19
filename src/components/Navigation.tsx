"use client";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Github, Linkedin } from "lucide-react";

export function Navigation() {
  const [activeNav, setActiveNav] = useState("");

  // Smooth scroll
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Update active nav on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "skills", "projects", "testimonials", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveNav(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg z-40 border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="font-bold text-2xl cursor-pointer bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          RL
        </motion.div>
        <div className="hidden md:flex gap-6 text-sm">
          {[
            { id: "skills", label: "Skills" },
            { id: "projects", label: "Projects" },
            { id: "education", label: "Education" },
            { id: "contact", label: "Contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`hover:text-orange-600 transition-colors ${
                activeNav === item.id ? "text-orange-600 font-semibold" : "text-gray-600"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
        {/* Social Links */}
        <div className="flex gap-4">
          <a
            href="https://github.com/eqfwcev123"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-orange-600 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/robert-lee-06434467"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-orange-600 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
