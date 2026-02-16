import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Achievements from "@/components/Achievements";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Achievements/>
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
