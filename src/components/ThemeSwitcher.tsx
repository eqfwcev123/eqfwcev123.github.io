"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTheme, ThemeType } from "@/context/ThemeContext";
import { Palette, X } from "lucide-react";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themes: { value: ThemeType; label: string; color: string; description: string }[] = [
    {
      value: "gradient",
      label: "Gradient Modern",
      color: "from-blue-500 to-purple-500",
      description: "Smooth gradients & animations"
    },
    {
      value: "minimalist",
      label: "Minimalist",
      color: "from-gray-800 to-gray-600",
      description: "Clean & simple"
    },
    {
      value: "dark",
      label: "Dark Mode",
      color: "from-purple-600 to-pink-600",
      description: "Dark with neon accents"
    },
    {
      value: "bento",
      label: "Bento Grid",
      color: "from-orange-500 to-red-500",
      description: "Apple-inspired cards"
    },
    {
      value: "terminal",
      label: "Terminal",
      color: "from-green-500 to-emerald-600",
      description: "Developer console style"
    },
    {
      value: "glass",
      label: "Glassmorphism",
      color: "from-cyan-400 to-blue-500",
      description: "Frosted glass effects"
    },
    {
      value: "bold",
      label: "Bold & Colorful",
      color: "from-pink-500 to-yellow-500",
      description: "Vibrant & energetic"
    },
    {
      value: "magazine",
      label: "Magazine",
      color: "from-indigo-600 to-purple-600",
      description: "Editorial layout"
    },
  ];

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-50 p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all duration-300"
      >
        <Palette className="w-6 h-6" />
      </motion.button>

      {/* Theme Selector Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-2xl z-50 overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Choose Your Style
                  </h2>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <p className="text-gray-600 mb-6">
                  Select a design theme to preview different portfolio styles
                </p>

                <div className="grid gap-4">
                  {themes.map((t) => (
                    <motion.button
                      key={t.value}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        setTheme(t.value);
                        setIsOpen(false);
                      }}
                      className={`relative p-6 rounded-2xl border-2 transition-all duration-300 text-left overflow-hidden group ${
                        theme === t.value
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-200 hover:border-gray-300 bg-white"
                      }`}
                    >
                      <div
                        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${t.color}`}
                      />
                      
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-grow">
                          <h3 className="text-lg font-bold text-gray-900 mb-1">
                            {t.label}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {t.description}
                          </p>
                        </div>
                        
                        <div
                          className={`w-12 h-12 rounded-lg bg-gradient-to-br ${t.color} flex-shrink-0 group-hover:scale-110 transition-transform`}
                        />
                      </div>

                      {theme === t.value && (
                        <div className="absolute bottom-4 right-4">
                          <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full" />
                          </div>
                        </div>
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
