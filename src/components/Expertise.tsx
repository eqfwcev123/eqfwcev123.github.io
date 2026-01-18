"use client";
import { motion } from "motion/react";
import { useInView } from "@/hooks/useInView";
import { Server, Smartphone, Brain, TrendingUp, Users } from "lucide-react";

export function Expertise() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const expertise = [
    {
      icon: Server,
      title: "Backend Development",
      description:
        "Building robust and scalable server-side applications and APIs.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Crafting functional mobile applications for various platforms.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Brain,
      title: "AI & Computer Vision",
      description:
        "Exploring AI applications and Computer Vision techniques.",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const stats = [
    { value: "4+", label: "Technologies used", icon: TrendingUp },
    { value: "4.5+", label: "Years of experience", icon: Users },
  ];

  return (
    <section
      id="expertise"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Areas of Expertise
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            I build and maintain the backend logic and APIs powering
            applications, develop mobile solutions, and explore practical uses
            for AI technologies.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Expertise Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {expertise.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300 from-blue-500 to-purple-500" />
              
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${item.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 text-center overflow-hidden group hover:shadow-lg transition-shadow duration-300"
            >
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <stat.icon className="w-16 h-16 text-blue-600" />
              </div>
              <div className="relative">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
