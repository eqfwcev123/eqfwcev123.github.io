"use client";
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { Expertise } from "@/components/Expertise";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { TechStack } from "@/components/TechStack";
import { Contact } from "@/components/Contact";

export function GradientTheme() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Navigation />
      <Hero />
      <Expertise />
      <Education />
      <Experience />
      <Projects />
      <TechStack />
      <Contact />
    </div>
  );
}
