// src/components/Navigation.tsx
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { hash: "hero", label: "Home" },
    { hash: "projects", label: "Projects" },
    { hash: "experience", label: "Experience" },
    { hash: "skills", label: "Skills" },
    { hash: "education", label: "Education" },
    { hash: "contact", label: "Contact" },
  ];

  const handleNavClick = (hash: string) => {
    setIsOpen(false);
    const el = document.getElementById(hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          <button
            onClick={() => handleNavClick("hero")}
            className="text-xl font-bold text-white"
          >
            MJ.DEV
          </button>

          {/* Desktop */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.hash}
                onClick={() => handleNavClick(item.hash)}
                className="text-white hover:text-cyan-400 transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-sm">
            {navItems.map((item) => (
              <button
                key={item.hash}
                onClick={() => handleNavClick(item.hash)}
                className="block w-full text-left px-4 py-2 text-white hover:text-cyan-400 transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
