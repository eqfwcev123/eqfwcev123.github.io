"use client";
import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { LoadingAnimation } from "@/components/LoadingAnimation";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Education } from "@/components/Education";
import { TechStack } from "@/components/TechStack";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingAnimation onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 font-sans text-slate-900">
        <Navigation />
        <Hero />
        <Education />
        <TechStack />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
