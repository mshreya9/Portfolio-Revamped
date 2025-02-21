import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/WorkExperience"; 
export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <About />
      <Education />
      <Experience />
    </main>
  );
}
