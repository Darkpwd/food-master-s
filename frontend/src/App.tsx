import { useEffect } from "react";
import { Navbar } from "./Components/Layout/NavBar";
import { Hero } from "./Components/Sections/Hero";
import { ChefSpecials } from "./Components/Sections/ChefSpecials";
import { Menu } from "./Components/Sections/Menu";
import { Reservation } from "./Components/Sections/Reservation";
import { Contact } from "./Components/Sections/Contact";
import { Footer } from "./Components/Layout/Footer";

// Add custom styles to index.css
import "./index.css";

export const App = () => {
  useEffect(() => {
    // Update the document title
    document.title = "Master's Food | Modern Culinary Experience";

    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = "smooth";

    // Add global keyframes for animations
    const style = document.createElement("style");
    style.textContent = `
      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
        100% { transform: translateY(0px); }
      }

      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }

      @keyframes pulse {
        0% { opacity: 0.6; }
        50% { opacity: 1; }
        100% { opacity: 0.6; }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0a192f] text-white">
      <Navbar />
      <Hero />
      <ChefSpecials />
      <Menu />
      <Reservation />
      <Contact />
      <Footer />
    </div>
  );
};
