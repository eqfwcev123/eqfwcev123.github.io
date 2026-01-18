"use client";
import { motion } from "motion/react";
import { useInView } from "@/hooks/useInView";
import { ExternalLink, Briefcase, Code2 } from "lucide-react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";

export function Projects() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const workProjects = [
    {
      title: "SSDMS - Smart Sensor Data Management System",
      description:
        "A comprehensive dashboard platform for visualizing real-time sensor data from multiple outdoor sensors, with location mapping.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      tags: ["Flutter", "Dart", "Firebase"],
      type: "work",
    },
    {
      title: "Autonomous Defect Inspection System",
      description:
        "AI-powered quality assurance system for construction materials using Mask-RCNN and computer vision techniques to automate inspection.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
      tags: ["Python", "OpenCV", "Mask-RCNN", "+1 more"],
      type: "work",
    },
    {
      title: "Smart Traffic Control System",
      description:
        "An intelligent traffic management system that dynamically adjusts traffic signals based on real-time vehicle and pedestrian detection data.",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80",
      tags: ["Node.js", "Express.js", "WebSocket"],
      type: "work",
    },
    {
      title: "Color Change Detection System",
      description:
        "Environmental monitoring system using advanced image processing to detect water pollution and assess construction impact on environment.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
      tags: ["Python", "OpenCV", "NumPy", "+2 more"],
      type: "work",
    },
    {
      title: "IBB Beacon Scanning - Smart Crossing Assistant",
      description:
        "An innovative mobile application that alerts visually impaired users about approaching vehicles at zebra crossings using Bluetooth technology.",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80",
      tags: ["Flutter", "Dart"],
      type: "work",
    },
  ];

  const sideProjects = [
    {
      title: "Solva",
      description:
        "A reward-based Q&A platform where users post questions with monetary incentives and verified experts compete to provide solutions.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
      tags: ["Flutter", "Dart", "Firebase", "+1 more"],
      type: "side",
    },
    {
      title: "Enus.ai",
      description:
        "An AI-powered news summarization platform that delivers personalized news briefings and enables interactive discussions through an intelligent chatbot.",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80",
      tags: ["Java", "Spring Boot", "Python", "+4 more"],
      type: "side",
    },
    {
      title: "Crypto Backtesting Platform",
      description:
        "A user-friendly platform that democratizes algorithmic trading by enabling non-programmers to create, test, and analyze cryptocurrency trading strategies.",
      image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&q=80",
      tags: ["TypeScript", "Next.js", "Nest.JS", "+2 more"],
      type: "side",
    },
  ];

  const ProjectCard = ({ project, index }: { project: any; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
        <ImageWithFallback
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Badge */}
        <div className="absolute top-4 right-4">
          <div className="px-3 py-1.5 rounded-full bg-blue-600 text-white text-sm font-medium flex items-center gap-1.5">
            {project.type === "work" ? (
              <>
                <Briefcase className="w-3.5 h-3.5" />
                Project
              </>
            ) : (
              <>
                <Code2 className="w-3.5 h-3.5" />
                Project
              </>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag: string) => (
            <span
              key={tag}
              className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* View Details Link */}
        <button className="flex items-center gap-2 text-blue-600 font-medium hover:gap-3 transition-all duration-300">
          View Details
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>

      {/* Decorative gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
    </motion.div>
  );

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Projects & Portfolio
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Explore my work across different domains, from AI-powered systems to
            mobile applications
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Work Projects */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="p-2 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Work Projects
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Side Projects */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="p-2 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Side Projects
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sideProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
