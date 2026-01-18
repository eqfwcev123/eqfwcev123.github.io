"use client";
import { useState, useEffect } from "react";
import { motion } from "motion/react";

export function TerminalTheme() {
  const [currentCommand, setCurrentCommand] = useState(0);
  const [displayText, setDisplayText] = useState("");

  const commands = [
    { cmd: "whoami", output: "Robert Lee - Software Engineer" },
    { cmd: "pwd", output: "/home/robert/hong-kong" },
    { cmd: "cat about.txt", output: "Backend & Mobile Developer | AI Enthusiast" },
  ];

  useEffect(() => {
    if (currentCommand < commands.length) {
      const command = commands[currentCommand];
      let index = 0;
      const text = `$ ${command.cmd}`;
      
      const interval = setInterval(() => {
        if (index <= text.length) {
          setDisplayText(text.substring(0, index));
          index++;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setCurrentCommand(prev => prev + 1);
          }, 1000);
        }
      }, 50);

      return () => clearInterval(interval);
    }
  }, [currentCommand]);

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono p-6">
      {/* Terminal Header */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-gray-900 rounded-t-lg border border-gray-800 p-3 flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="ml-4 text-sm text-gray-500">robert@portfolio:~</span>
        </div>

        {/* Terminal Content */}
        <div className="bg-gray-950 border border-t-0 border-gray-800 rounded-b-lg p-6 min-h-[600px]">
          {/* Welcome */}
          <div className="mb-6">
            <pre className="text-green-400 mb-4">{`
 ____       _               _     _              
|  _ \\ ___ | |__   ___ _ __| |_  | |    ___  ___ 
| |_) / _ \\| '_ \\ / _ \\ '__| __| | |   / _ \\/ _ \\
|  _ < (_) | |_) |  __/ |  | |_  | |__|  __/  __/
|_| \\_\\___/|_.__/ \\___|_|   \\__| |_____\\___|\\___|
            `}</pre>
            <p className="text-sm text-gray-500">Software Engineer | Backend & Mobile Developer</p>
            <p className="text-sm text-gray-500 mb-4">Type 'help' to see available commands</p>
          </div>

          {/* Command History */}
          <div className="space-y-4">
            {/* help command */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-blue-400">robert@portfolio</span>
                <span className="text-gray-500">:</span>
                <span className="text-purple-400">~</span>
                <span className="text-gray-500">$</span>
                <span className="text-green-400">help</span>
              </div>
              <div className="ml-4 text-sm space-y-1 text-gray-400">
                <p><span className="text-yellow-400">about</span> - Display information about me</p>
                <p><span className="text-yellow-400">skills</span> - List technical skills</p>
                <p><span className="text-yellow-400">experience</span> - Show work experience</p>
                <p><span className="text-yellow-400">projects</span> - List projects</p>
                <p><span className="text-yellow-400">education</span> - Display education background</p>
                <p><span className="text-yellow-400">contact</span> - Get contact information</p>
                <p><span className="text-yellow-400">clear</span> - Clear terminal</p>
              </div>
            </div>

            {/* about command */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-blue-400">robert@portfolio</span>
                <span className="text-gray-500">:</span>
                <span className="text-purple-400">~</span>
                <span className="text-gray-500">$</span>
                <span className="text-green-400">about</span>
              </div>
              <div className="ml-4 space-y-2">
                <p className="text-white">Name: Robert Lee</p>
                <p className="text-white">Role: Software Engineer</p>
                <p className="text-white">Location: Hong Kong 🇭🇰</p>
                <p className="text-white">Experience: 4.5+ years</p>
                <p className="text-gray-400 mt-2">
                  I specialize in backend and mobile development, crafting reliable
                  server-side logic, APIs, and database solutions. Also exploring
                  AI and Computer Vision applications.
                </p>
              </div>
            </div>

            {/* skills command */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-blue-400">robert@portfolio</span>
                <span className="text-gray-500">:</span>
                <span className="text-purple-400">~</span>
                <span className="text-gray-500">$</span>
                <span className="text-green-400">skills --list</span>
              </div>
              <div className="ml-4">
                <div className="mb-3">
                  <p className="text-yellow-400 mb-1">Programming Languages:</p>
                  <div className="ml-4 text-sm space-y-1">
                    <p className="text-gray-300">• Python [████████████████████] 85%</p>
                    <p className="text-gray-300">• JavaScript/TypeScript [███████████████░░░░░] 75%</p>
                    <p className="text-gray-300">• Java [██████████████░░░░░░] 70%</p>
                    <p className="text-gray-300">• Dart [████████████████░░░░] 80%</p>
                  </div>
                </div>
                <div className="mb-3">
                  <p className="text-yellow-400 mb-1">Frameworks & Tools:</p>
                  <div className="ml-4 text-sm text-gray-300">
                    <p>Node.js, Express.js, Spring Boot, Flutter, Next.js</p>
                    <p>Docker, Git, MongoDB, MySQL</p>
                  </div>
                </div>
              </div>
            </div>

            {/* experience command */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-blue-400">robert@portfolio</span>
                <span className="text-gray-500">:</span>
                <span className="text-purple-400">~</span>
                <span className="text-gray-500">$</span>
                <span className="text-green-400">experience</span>
              </div>
              <div className="ml-4 space-y-2">
                <div className="border border-green-900 rounded p-3">
                  <p className="text-white font-bold">Software Engineer</p>
                  <p className="text-cyan-400">LSCM Research & Development Centre</p>
                  <p className="text-gray-500 text-sm">October 2020 - Present | Hong Kong</p>
                  <div className="mt-2 text-sm space-y-1 text-gray-300">
                    <p>→ Designed CV pipeline reducing processing time by 75%</p>
                    <p>→ Developed real-time traffic management system</p>
                    <p>→ Built Flutter app for visually impaired users</p>
                  </div>
                </div>
              </div>
            </div>

            {/* projects command */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-blue-400">robert@portfolio</span>
                <span className="text-gray-500">:</span>
                <span className="text-purple-400">~</span>
                <span className="text-gray-500">$</span>
                <span className="text-green-400">ls projects/</span>
              </div>
              <div className="ml-4 grid grid-cols-2 gap-2 text-sm">
                <p className="text-cyan-400">📁 ssdms/</p>
                <p className="text-cyan-400">📁 defect-inspection/</p>
                <p className="text-cyan-400">📁 traffic-control/</p>
                <p className="text-cyan-400">📁 solva/</p>
                <p className="text-cyan-400">📁 enus-ai/</p>
                <p className="text-cyan-400">📁 crypto-backtesting/</p>
              </div>
            </div>

            {/* education command */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-blue-400">robert@portfolio</span>
                <span className="text-gray-500">:</span>
                <span className="text-purple-400">~</span>
                <span className="text-gray-500">$</span>
                <span className="text-green-400">cat education.json</span>
              </div>
              <div className="ml-4">
                <pre className="text-sm text-gray-300">{`{
  "degree": "BBA (Honors)",
  "major": "Global Supply Chain Management",
  "university": "Hong Kong Polytechnic University",
  "location": "Hong Kong",
  "period": "2013 - 2018",
  "status": "Completed"
}`}</pre>
              </div>
            </div>

            {/* contact command */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-blue-400">robert@portfolio</span>
                <span className="text-gray-500">:</span>
                <span className="text-purple-400">~</span>
                <span className="text-gray-500">$</span>
                <span className="text-green-400">contact --info</span>
              </div>
              <div className="ml-4 space-y-1">
                <p className="text-white">📧 Email: <a href="mailto:dohyeonee95@hotmail.com" className="text-cyan-400 underline">dohyeonee95@hotmail.com</a></p>
                <p className="text-white">📍 Location: Hong Kong</p>
                <p className="text-white">💼 LinkedIn: <span className="text-cyan-400">linkedin.com/in/robert-lee</span></p>
                <p className="text-white">🐙 GitHub: <span className="text-cyan-400">github.com/robert-lee</span></p>
              </div>
            </div>

            {/* Cursor */}
            <div className="flex items-center gap-2 mt-6">
              <span className="text-blue-400">robert@portfolio</span>
              <span className="text-gray-500">:</span>
              <span className="text-purple-400">~</span>
              <span className="text-gray-500">$</span>
              <span className="animate-pulse">_</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center text-gray-600 text-sm">
          <p>© 2025 Robert Lee | Built with React + Terminal Vibes</p>
        </div>
      </div>
    </div>
  );
}
