"use client";
import { motion } from "motion/react";
import { useInView } from "@/hooks/useInView";
import { ArrowRight, Mail } from "lucide-react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";

export function MagazineTheme() {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-900 py-6 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <div className="text-3xl font-serif italic">Robert Lee</div>
            <div className="text-xs tracking-widest mt-1">SOFTWARE ENGINEER PORTFOLIO</div>
          </div>
          <div className="text-right text-sm">
            <div className="font-serif">Hong Kong</div>
            <div className="text-xs text-gray-600">2025 Edition</div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section ref={heroRef} className="px-6 py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="text-xs tracking-widest text-gray-600 mb-4">
              FEATURED ENGINEER • JANUARY 2025
            </div>
            <h1 className="text-7xl md:text-9xl font-serif leading-none mb-8">
              Building the
              <br />
              <span className="italic">Future</span> with
              <br />
              Code
            </h1>
            <div className="grid md:grid-cols-2 gap-12 mt-12">
              <div>
                <p className="text-xl leading-relaxed text-gray-800 font-serif">
                  A deep dive into the world of backend development, mobile
                  applications, and artificial intelligence with Robert Lee—a
                  Hong Kong-based software engineer crafting scalable solutions
                  that matter.
                </p>
              </div>
              <div className="space-y-6">
                <div className="border-l-4 border-indigo-600 pl-4">
                  <div className="text-sm text-gray-600 mb-1">Current Position</div>
                  <div className="font-medium">Software Engineer</div>
                  <div className="text-sm text-gray-600">
                    LSCM Research & Development Centre
                  </div>
                </div>
                <div className="border-l-4 border-indigo-600 pl-4">
                  <div className="text-sm text-gray-600 mb-1">Experience</div>
                  <div className="font-medium">4.5+ Years</div>
                </div>
                <div className="border-l-4 border-indigo-600 pl-4">
                  <div className="text-sm text-gray-600 mb-1">Contact</div>
                  <div className="font-medium">dohyeonee95@hotmail.com</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Story */}
      <section ref={ref} className="px-6 py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-3 gap-12"
          >
            <div className="md:col-span-2">
              <div className="text-xs tracking-widest text-gray-600 mb-4">
                COVER STORY
              </div>
              <h2 className="text-5xl font-serif mb-6 leading-tight">
                The Art of Building Robust Backend Systems
              </h2>
              
              <div className="prose prose-lg font-serif text-gray-800 space-y-4">
                <p className="text-xl leading-relaxed first-letter:text-7xl first-letter:font-serif first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                  In the bustling tech scene of Hong Kong, Robert Lee has spent
                  the past four and a half years honing his craft in software
                  engineering. His expertise spans across backend development,
                  mobile applications, and the cutting-edge field of artificial
                  intelligence and computer vision.
                </p>
                
                <p className="leading-relaxed">
                  At LSCM Research & Development Centre since October 2020, Lee
                  has spearheaded projects that showcase the transformative power
                  of well-architected software. His most notable achievement—a
                  computer vision pipeline that reduced processing time by an
                  impressive 75%—demonstrates not just technical prowess, but an
                  understanding of real-world impact.
                </p>

                <div className="bg-gray-50 border-l-4 border-indigo-600 p-6 my-8 italic">
                  "I specialize in backend and mobile development, crafting
                  reliable server-side logic, APIs, and database solutions to
                  drive application functionality."
                </div>

                <p className="leading-relaxed">
                  Beyond the backend, Lee's portfolio includes a real-time traffic
                  management system that dynamically adjusts signals based on
                  computer vision analytics, and a Flutter mobile application
                  designed to enhance pedestrian safety for visually impaired
                  users through IoT-powered audio alerts.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-50 p-6">
                <h3 className="font-serif text-2xl mb-4">At a Glance</h3>
                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="text-gray-600 mb-1">Name</dt>
                    <dd className="font-medium">Robert Lee</dd>
                  </div>
                  <div>
                    <dt className="text-gray-600 mb-1">Location</dt>
                    <dd className="font-medium">Hong Kong</dd>
                  </div>
                  <div>
                    <dt className="text-gray-600 mb-1">Role</dt>
                    <dd className="font-medium">Software Engineer</dd>
                  </div>
                  <div>
                    <dt className="text-gray-600 mb-1">Specialties</dt>
                    <dd className="font-medium">
                      Backend Development, Mobile Apps, AI & Computer Vision
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="border border-gray-200 p-6">
                <h3 className="font-serif text-xl mb-4">Education</h3>
                <div>
                  <div className="font-medium mb-1">BBA (Honors)</div>
                  <div className="text-sm text-gray-600 mb-1">
                    Global Supply Chain Management
                  </div>
                  <div className="text-sm text-gray-600">
                    Hong Kong Polytechnic University
                  </div>
                  <div className="text-xs text-gray-500 mt-2">2013 – 2018</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="skills" className="px-6 py-20 border-b border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs tracking-widest text-gray-600 mb-4">
            TECHNICAL EXPERTISE
          </div>
          <h2 className="text-5xl font-serif mb-12">The Toolkit</h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-medium mb-4 text-sm tracking-wider">
                LANGUAGES
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>Python</li>
                <li>JavaScript / TypeScript</li>
                <li>Java</li>
                <li>Dart</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4 text-sm tracking-wider">
                FRAMEWORKS
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>Node.js / Express.js</li>
                <li>Spring Boot</li>
                <li>Flutter</li>
                <li>Next.js</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4 text-sm tracking-wider">
                DATABASES
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>MongoDB</li>
                <li>MySQL</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4 text-sm tracking-wider">
                TOOLS & PLATFORMS
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>Docker</li>
                <li>Git</li>
                <li>Ubuntu / Linux</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="px-6 py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs tracking-widest text-gray-600 mb-4">
            PORTFOLIO
          </div>
          <h2 className="text-5xl font-serif mb-12">Selected Works</h2>

          <div className="space-y-12">
            {[
              {
                title: "Smart Sensor Data Management System",
                category: "Work Project",
                desc: "Comprehensive dashboard platform for visualizing real-time sensor data",
              },
              {
                title: "Autonomous Defect Inspection System",
                category: "Work Project",
                desc: "AI-powered quality assurance using Mask-RCNN and computer vision",
              },
              {
                title: "Smart Traffic Control System",
                category: "Work Project",
                desc: "Intelligent traffic management with real-time vehicle detection",
              },
              {
                title: "Solva",
                category: "Side Project",
                desc: "Reward-based Q&A platform connecting users with verified experts",
              },
              {
                title: "Enus.ai",
                category: "Side Project",
                desc: "AI-powered news summarization with intelligent chatbot",
              },
            ].map((project, i) => (
              <div
                key={i}
                className="border-b border-gray-200 pb-8 group cursor-pointer"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="text-xs tracking-wider text-gray-600 mb-2">
                      {project.category}
                    </div>
                    <h3 className="text-3xl font-serif group-hover:text-indigo-600 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-indigo-600 group-hover:translate-x-2 transition-all" />
                </div>
                <p className="text-gray-600 max-w-2xl">{project.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs tracking-widest text-gray-600 mb-4">
                GET IN TOUCH
              </div>
              <h2 className="text-5xl font-serif mb-6">Let's Collaborate</h2>
              <p className="text-xl text-gray-600 font-serif leading-relaxed mb-8">
                Available for new opportunities, collaborations, and interesting
                conversations about technology.
              </p>
              <a
                href="mailto:dohyeonee95@hotmail.com"
                className="inline-flex items-center gap-3 px-8 py-4 bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>Send a Message</span>
              </a>
            </div>
            <div className="bg-gray-50 p-8">
              <h3 className="font-medium mb-6 text-sm tracking-wider">
                CONTACT INFORMATION
              </h3>
              <dl className="space-y-4">
                <div>
                  <dt className="text-sm text-gray-600 mb-1">Email</dt>
                  <dd className="font-medium">dohyeonee95@hotmail.com</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-600 mb-1">Location</dt>
                  <dd className="font-medium">Hong Kong</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-600 mb-1">Availability</dt>
                  <dd className="font-medium">Open to opportunities</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-900 py-6 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div>© 2025 Robert Lee. All rights reserved.</div>
          <div className="text-gray-600">Portfolio • Software Engineer</div>
        </div>
      </footer>
    </div>
  );
}
