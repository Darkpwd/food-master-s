import React, { useState, useEffect } from "react";
import { Menu, X, ChefHat } from "lucide-react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0a192f]/90 backdrop-blur-md py-2 shadow-lg"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container px-4 mx-auto md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2">
            <ChefHat size={28} className="text-[#e6c200]" />
            <span className="text-xl font-bold tracking-wider text-white">
              Master's Food
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="items-center hidden space-x-6 md:flex">
            {navItems.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-gray-200 hover:text-[#e6c200] transition-colors duration-300"
              >
                {label}
              </a>
            ))}

            <Button
              variant="secondary"
              size="sm"
              onClick={() => navigate("/login")}
            >
              Sign In
            </Button>

            <Button variant="primary" size="sm">
              Reserve a Table
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="p-2 text-white md:hidden focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden bg-[#0a192f] transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } pt-20`}
      >
        <div className="flex flex-col items-center px-8 py-6 space-y-6">
          {navItems.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={closeMenu}
              className="text-white text-xl hover:text-[#e6c200] transition-colors"
            >
              {label}
            </a>
          ))}

          <Button
            variant="secondary"
            size="md"
            className="w-full"
            onClick={() => {
              closeMenu();
              navigate("/login");
            }}
          >
            Sign In
          </Button>

          <Button
            variant="primary"
            size="md"
            className="w-full"
            onClick={closeMenu}
          >
            Reserve a Table
          </Button>
        </div>
      </div>
    </nav>
  );
};
