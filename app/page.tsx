import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/WorkExperience"; 
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <About />
      <Education />
      <Experience />
      <Projects />
      <Achievements />
      <Contact />
    </main>
  );
}
