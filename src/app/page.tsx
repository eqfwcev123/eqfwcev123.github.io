// import Image from "next/image"; // Removed unused import
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Expertise from '@/components/Expertise';
import Education from '@/components/Education';
import WorkExperience from '@/components/WorkExperience';
// import Portfolio from '@/components/Portfolio'; // Removed import
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import TechStack from '@/components/TechStack';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full">
      <Header />
      <Hero />
      <Expertise />
      <Education />
      <WorkExperience />
      {/* <Portfolio /> // Removed usage */}
      <Projects />
      <TechStack />
      <Footer />
    </main>
  );
}
