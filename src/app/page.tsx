import LoadingScreen from "@/components/LoadingScreen";
import BackgroundGrid from "@/components/BackgroundGrid";
import CursorGlow from "@/components/CursorGlow";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Simulation load screens */}
      <LoadingScreen />

      {/* Global canvas & lights trackers */}
      <BackgroundGrid />
      <CursorGlow />

      {/* Main layout grid */}
      <Navbar />
      
      <main className="relative z-10 flex flex-col w-full">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
