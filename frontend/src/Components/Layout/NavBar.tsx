import React, { useState, useEffect } from "react";
import { Menu, X, ChefHat } from "lucide-react";
import { Button } from "../Common/Button.tsx";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "Chef's Specials", href: "#specials" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0a192f]/90 backdrop-blur-md py-2 shadow-lg"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="#home" className="flex items-center space-x-2">
            <ChefHat size={28} className="text-[#e6c200]" />
            <span className="text-white font-bold text-xl tracking-wider">
              Master's Food
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-200 hover:text-[#e6c200] transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
            <Button variant="primary" size="sm">
              Reserve a Table
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
        md:hidden fixed inset-0 bg-[#0a192f] z-40 transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "translate-x-full"}
        pt-20
      `}
      >
        <div className="flex flex-col items-center space-y-6 p-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-white text-xl hover:text-[#e6c200] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Button
            variant="primary"
            size="md"
            className="mt-6 w-full"
            onClick={() => setIsOpen(false)}
          >
            Reserve a Table
          </Button>
        </div>
      </div>
    </nav>
  );
};
