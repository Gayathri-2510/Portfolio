import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navigationItems = [
    { label: 'About', section: 'about' },
    { label: 'Skills', section: 'skills' },
    { label: 'Projects', section: 'projects' },
    { label: 'Contact', section: 'contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-xl md:text-2xl font-light text-black hover:scale-105 transition-transform duration-300"
          >
            GV
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.section}
                onClick={() => scrollToSection(item.section)}
                className="text-sm font-medium text-gray-700 hover:text-black hover:-translate-y-0.5 transition-all duration-300"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-black text-white hover:bg-gray-800 transition-all duration-300 hover:scale-105"
            >
              Let's Talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-black transition-colors duration-300"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen 
              ? 'max-h-64 opacity-100' 
              : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="py-4 space-y-4 bg-white/95 backdrop-blur-md rounded-lg mt-2 px-4">
            {navigationItems.map((item) => (
              <button
                key={item.section}
                onClick={() => scrollToSection(item.section)}
                className="block w-full text-left text-gray-700 hover:text-black py-2 transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2 border-t border-gray-200">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="w-full bg-black text-white hover:bg-gray-800 transition-all duration-300"
              >
                Let's Talk
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
