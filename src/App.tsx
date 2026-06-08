import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Solutions } from "./components/Solutions";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { Process } from "./components/Process";
import { Blog } from "./components/Blog";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";

export default function App() {
  const [currentLang, setCurrentLang] = useState<"vi" | "en">("vi");
  const [activeSection, setActiveSection] = useState<string>("hero");

  // Track scroll position to update active navbar menu item automatically
  useEffect(() => {
    const sections = ["hero", "solutions", "projects", "about", "process", "blog", "contact"];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for better accuracy
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      // Offset scroll calculation for fixed navbar height of ~80px
      const yOffset = -72; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg-gray flex flex-col justify-between selection:bg-brand-primary selection:text-white">
      {/* Pristine Glassmorphic Header */}
      <Header
        currentLang={currentLang}
        setLang={setCurrentLang}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Single-Scroll Sections Grid layout */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero currentLang={currentLang} onNavigate={handleNavigate} />

        {/* Tactical Solutions Section */}
        <Solutions currentLang={currentLang} onNavigate={handleNavigate} />

        {/* Portfolios Projects Grid */}
        <Projects currentLang={currentLang} />

        {/* Corporate Technical Values (About) */}
        <About currentLang={currentLang} />

        {/* Detailed Site Process Staggered Chart */}
        <Process currentLang={currentLang} />

        {/* Informational Insights Catalog */}
        <Blog currentLang={currentLang} />

        {/* High-fidelity Consulting Consultation Intake Forms */}
        <ContactForm currentLang={currentLang} />
      </main>

      {/* Corporate Technical Bottom Navigation Footer */}
      <Footer currentLang={currentLang} onNavigate={handleNavigate} />
    </div>
  );
}
