"use client";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { LoadingAnimation } from "@/components/LoadingAnimation";
import { useInView } from "@/hooks/useInView";
import Link from "next/link";
import {
  Download,
  Mail,
  Code2,
  Briefcase,
  Sparkles,
  ExternalLink,
  Github,
  Linkedin,
  Calendar,
  GraduationCap,
} from "lucide-react";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiFlutter,
  SiMongodb,
  SiMysql,
  SiDocker,
  SiReact,
  SiNextdotjs,
  SiOpencv,
} from "react-icons/si";

import { workProjects, sideProjects } from "@/data/projects";




export function BentoTheme() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeNav, setActiveNav] = useState("");

  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [skillsRef, skillsInView] = useInView({ threshold: 0.1 });
  const [projectsRef, projectsInView] = useInView({ threshold: 0.1 });
  const [educationRef, educationInView] = useInView({ threshold: 0.1 });


  const [contactRef, contactInView] = useInView({ threshold: 0.1 });

  const education = [
    {
      year: "2013 – 2018",
      title: "BBA (Honors) in Global Supply Chain Management",
      company: "The Hong Kong Polytechnic University",
      description: "Comprehensive business education focusing on supply chain management, logistics, and international business operations.",
    },
    {
      year: "2002 – 2013",
      title: "High School Diploma",
      company: "Shanghai High School International Division",
      description: "International curriculum with a strong focus on mathematics, sciences, and multilingual education.",
    }
  ];

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

  // Parallax effect
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingAnimation onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 font-sans text-slate-900">
        {/* Navigation */}
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
                { id: "testimonials", label: "Testimonials" },
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

        {/* Hero Section */}
        <section id="hero" ref={heroRef} className="pt-32 pb-12 px-6 relative overflow-hidden">
          {/* Parallax Background Elements */}
          <motion.div
            style={{ y: scrollY * 0.5 }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl"
          />
          <motion.div
            style={{ y: scrollY * 0.3 }}
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

        {/* Education Section */}
        <section id="education" ref={educationRef} className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={educationInView ? { opacity: 1, y: 0 } : {}}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Education
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Academic background and qualifications
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {education.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  animate={educationInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
                >
                  {/* Gradient accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    {/* Icon/Year Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full text-white text-sm font-semibold shadow-lg">
                        <Calendar className="w-4 h-4" />
                        {item.year}
                      </div>
                      <GraduationCap className="w-8 h-8 text-orange-500 group-hover:scale-110 transition-transform" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                      {item.title}
                    </h3>

                    {/* Company/Institution */}
                    <p className="text-base font-semibold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
                      {item.company}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Decorative element */}
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-400/10 to-red-400/10 rounded-full blur-2xl transform translate-x-16 translate-y-16 group-hover:scale-150 transition-transform duration-500" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" ref={skillsRef} className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={skillsInView ? { opacity: 1, y: 0 } : {}}
              className="text-4xl font-bold mb-8"
            >
              Tech Stack
            </motion.h2>

            <div className="grid grid-cols-12 gap-4">
              {/* Languages */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 }}
                className="col-span-12 md:col-span-6 bg-white rounded-3xl p-8 border border-gray-200 hover:shadow-xl transition-all"
              >
                <h3 className="text-xl font-bold mb-6">Languages</h3>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { icon: SiPython, name: "Python", color: "#3776AB" },
                    { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
                    { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
                  ].map((lang) => (
                    <div
                      key={lang.name}
                      className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                    >
                      <lang.icon size={40} color={lang.color} />
                      <span className="text-sm font-medium">{lang.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Frameworks */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="col-span-12 md:col-span-6 bg-white rounded-3xl p-8 border border-gray-200 hover:shadow-xl transition-all"
              >
                <h3 className="text-xl font-bold mb-6">Frameworks & Tools</h3>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
                    { icon: SiFlutter, name: "Flutter", color: "#02569B" },
                    { icon: SiReact, name: "React", color: "#61DAFB" },
                    { icon: SiNextdotjs, name: "Next.js", color: "#000000" },
                    { icon: SiDocker, name: "Docker", color: "#2496ED" },
                    { icon: SiOpencv, name: "OpenCV", color: "#5C3EE8" },
                  ].map((tech) => (
                    <div
                      key={tech.name}
                      className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                    >
                      <tech.icon size={40} color={tech.color} />
                      <span className="text-sm font-medium text-center">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Databases */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="col-span-12 md:col-span-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-8 text-white hover:shadow-xl transition-all"
              >
                <h3 className="text-xl font-bold mb-4">Databases</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <SiMongodb size={24} />
                    <span className="text-white/90">MongoDB</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <SiMysql size={24} />
                    <span className="text-white/90">MySQL</span>
                  </div>
                </div>
              </motion.div>

              {/* Achievement */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="col-span-12 md:col-span-8 bg-gray-900 rounded-3xl p-8 text-white hover:shadow-xl transition-all"
              >
                <h3 className="text-xl font-bold mb-4">Key Achievement</h3>
                <p className="text-gray-300">
                  Designed computer vision pipeline that automated quality control,
                  <span className="text-orange-400 font-bold"> reducing processing time by 75%</span>
                </p>
              </motion.div>
            </div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={skillsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4"
            >
            </motion.div>
          </div>
        </section>



        {/* Projects Section */}
        <section id="projects" ref={projectsRef} className="py-12 px-6 relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl animate-pulse" />
            <div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "2s" }}
            />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Work Projects */}
            <div className="mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                className="text-4xl font-bold mb-2"
              >
                Work Projects
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 }}
                className="text-gray-600 mb-8"
              >
                Professional work at LSCM Research & Development Centre
              </motion.p>

              <div className="grid grid-cols-12 gap-4">
                {workProjects.map((project, index) => (
                  <Link
                    key={project.slug}
                    href={`/projects/${project.slug}`}
                    className={`${
                      index % 4 === 0 || index % 4 === 3
                        ? "col-span-12 md:col-span-7"
                        : "col-span-12 md:col-span-5"
                    } block`}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.1 + index * 0.1 }}
                      whileHover={{ y: -10, boxShadow: "0 20px 60px rgba(0,0,0,0.2)" }}
                      className={`h-full ${
                        index % 2 === 1
                          ? "bg-gradient-to-br from-purple-500 to-pink-500 text-white"
                          : "bg-white"
                      } rounded-3xl p-8 border border-gray-200 hover:shadow-xl transition-all group cursor-pointer relative overflow-hidden`}
                    >
                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-4">
                          <div
                            className={`w-12 h-12 ${
                              index % 2 === 1 ? "bg-white/20" : "bg-blue-100"
                            } rounded-2xl flex items-center justify-center`}
                          >
                            {index === 0 && <Code2 className={`w-6 h-6 ${index % 2 === 1 ? "text-white" : "text-blue-600"}`} />}
                            {index === 1 && <Sparkles className="w-6 h-6 text-white" />}
                            {index === 2 && <Briefcase className="w-6 h-6 text-orange-600" />}
                            {index === 3 && <div className="text-2xl">📱</div>}
                          </div>
                          <ExternalLink
                            className={`w-5 h-5 ${
                              index % 2 === 1
                                ? "text-white/60 group-hover:text-white"
                                : "text-gray-400 group-hover:text-orange-600"
                            } transition-colors`}
                          />
                        </div>

                        <h3 className={`text-xl font-bold mb-2 ${index % 2 === 0 ? "group-hover:text-orange-600" : ""} transition-colors`}>
                          {project.title}
                        </h3>

                        <p className={`text-sm mb-4 ${index % 2 === 1 ? "text-white/90" : "text-gray-600"}`}>
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className={`text-xs px-3 py-1 rounded-full ${
                                index % 2 === 1 ? "bg-white/20 text-white" : "bg-blue-50 text-blue-700"
                              }`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Personal Projects */}
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="text-4xl font-bold mb-2"
              >
                Personal Projects
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="text-gray-600 mb-8"
              >
                Side projects and independent ventures
              </motion.p>

              <div className="grid grid-cols-12 gap-4">
                {sideProjects.map((project, index) => {
                  return (
                    <Link
                      key={project.slug}
                      href={`/projects/${project.slug}`}
                      className={`${
                        index % 4 === 0 || index % 4 === 3
                          ? "col-span-12 md:col-span-7"
                          : "col-span-12 md:col-span-5"
                      } block`}
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        whileHover={{ y: -10, boxShadow: "0 20px 60px rgba(0,0,0,0.2)" }}
                        className={`${
                          index === 1
                            ? "bg-gradient-to-br from-indigo-500 to-purple-500 text-white"
                            : "bg-white"
                        } rounded-3xl p-8 border border-gray-200 hover:shadow-xl transition-all group cursor-pointer relative overflow-hidden h-full`}
                      >
                        {index === 1 && (
                          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                        )}

                        <div className="relative z-10">
                          <div className="flex items-start justify-between mb-4">
                            <div className="text-4xl">{index === 0 ? "💬" : index === 1 ? "🤖" : "📈"}</div>
                            <ExternalLink
                              className={`w-5 h-5 ${
                                index === 1
                                  ? "text-white/60 group-hover:text-white"
                                  : "text-gray-400 group-hover:text-orange-600"
                              } transition-colors`}
                            />
                          </div>

                          <h3
                            className={`text-xl font-bold mb-2 ${
                              index !== 1 ? "group-hover:text-orange-600" : ""
                            } transition-colors`}
                          >
                            {project.title}
                          </h3>

                          <p className={`text-sm mb-4 ${index === 1 ? "text-white/90" : "text-gray-600"}`}>
                            {project.description}
                          </p>

                          <div className="flex flex-wrap gap-2">
                            {project.technologies.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className={`text-xs px-3 py-1 rounded-full ${
                                  index === 1 ? "bg-white/20 text-white" : "bg-green-50 text-green-700"
                                }`}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  );
                })}

                {/* Projects Count CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.9 }}
                  whileHover={{ scale: 1.02 }}
                  className="col-span-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl p-12 text-white text-center relative overflow-hidden group cursor-pointer"
                >
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-3">More Projects Coming Soon</h3>
                    <p className="text-white/90 mb-6">
                      Currently working on exciting new ventures in AI and blockchain technology
                    </p>
                    <a
                      href="https://github.com/eqfwcev123"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white text-orange-600 rounded-full font-medium hover:bg-orange-50 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      View GitHub Profile
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
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

        {/* Footer */}
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
      </div>
    </>
  );
}
